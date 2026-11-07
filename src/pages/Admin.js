import React, { useCallback, useEffect, useState } from 'react';
import { supabase, PHOTO_BUCKET, ADMIN_EMAIL } from '../lib/supabase';
import '../styles/Admin.css';

const folders = [
  { value: 'person-1-red', label: 'Red Bridal Look' },
  { value: 'person-2-white', label: 'White & Red Bengali Look' }
];

function Admin() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [folder, setFolder] = useState(folders[0].value);
  const [files, setFiles] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const current = data.session;
      setSession(current && current.user.email?.toLowerCase() === ADMIN_EMAIL ? current : null);
      if (current && current.user.email?.toLowerCase() !== ADMIN_EMAIL) supabase.auth.signOut();
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, current) => {
      setSession(current && current.user.email?.toLowerCase() === ADMIN_EMAIL ? current : null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.storage.from(PHOTO_BUCKET).list(folder, {
      limit: 100, sortBy: { column: 'name', order: 'asc' }
    });
    if (error) setMessage(error.message);
    else setPhotos((data || []).filter(item => item.name && !item.name.startsWith('.')).map(item => ({
      name: item.name,
      url: supabase.storage.from(PHOTO_BUCKET).getPublicUrl(folder + '/' + item.name).data.publicUrl
    })));
    setLoading(false);
  }, [folder]);

  useEffect(() => { if (session) loadPhotos(); }, [session, loadPhotos]);

  const signIn = async (event) => {
    event.preventDefault();
    setLoading(true); setMessage('');
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setMessage(error.message);
    else if (data.user?.email?.toLowerCase() !== ADMIN_EMAIL) {
      await supabase.auth.signOut();
      setMessage('This account is not authorised for Glow By Esha.');
    }
    setPassword(''); setLoading(false);
  };

  const upload = async (event) => {
    event.preventDefault();
    if (!files.length) return setMessage('Choose at least one photo first.');
    setLoading(true); setMessage('');
    let uploaded = 0;
    for (const file of files) {
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) {
        setMessage(file.name + ' skipped: use JPG, PNG or WEBP up to 10 MB.');
        continue;
      }
      const safeName = file.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]/g, '-');
      const path = folder + '/' + Date.now() + '-' + safeName;
      const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(path, file, { contentType: file.type, upsert: false });
      if (error) setMessage(file.name + ': ' + error.message);
      else uploaded += 1;
    }
    setFiles([]); event.target.reset();
    if (uploaded) setMessage(uploaded + ' photo(s) uploaded successfully.');
    await loadPhotos();
    setLoading(false);
  };

  const removePhoto = async (name) => {
    if (!window.confirm('Delete this photo permanently?')) return;
    setLoading(true);
    const { error } = await supabase.storage.from(PHOTO_BUCKET).remove([folder + '/' + name]);
    setMessage(error ? error.message : 'Photo deleted.');
    await loadPhotos(); setLoading(false);
  };

  if (!session) return (
    <main className="esha-admin">
      <section className="admin-login">
        <p className="admin-eyebrow">GLOW BY ESHA · PRIVATE STUDIO</p>
        <h1>Welcome back.</h1>
        <p>Sign in to manage bridal photographs.</p>
        <form onSubmit={signIn}>
          <label>Email address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="username" required />
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" required />
          <button type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in securely'}</button>
        </form>
        {message && <p className="admin-message" role="status">{message}</p>}
        <a href="/portfolio">← Back to portfolio</a>
      </section>
    </main>
  );

  return (
    <main className="esha-admin">
      <header className="admin-header">
        <div><p className="admin-eyebrow">GLOW BY ESHA · PRIVATE STUDIO</p><h1>Photo manager</h1><p>Manage each bridal story separately.</p></div>
        <button className="admin-logout" onClick={() => supabase.auth.signOut()}>Sign out</button>
      </header>
      <section className="admin-panel">
        <label className="admin-field-label" htmlFor="photo-collection">Choose collection</label>
        <select id="photo-collection" value={folder} onChange={e => setFolder(e.target.value)}>
          {folders.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
        <form className="admin-upload" onSubmit={upload}>
          <label htmlFor="photo-files">Add photographs</label>
          <input id="photo-files" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={e => setFiles(Array.from(e.target.files || []))} />
          <small>JPG, PNG or WEBP · Maximum 10 MB per photo</small>
          <button type="submit" disabled={loading || !files.length}>{loading ? 'Please wait…' : 'Upload selected photos'}</button>
        </form>
        {message && <p className="admin-message" role="status">{message}</p>}
      </section>
      <section className="admin-library">
        <div className="admin-library-heading"><h2>Published photographs</h2><span>{photos.length} photos</span></div>
        {loading && !photos.length ? <p>Loading photos…</p> : photos.length ? (
          <div className="admin-photo-grid">{photos.map(photo => (
            <article className="admin-photo" key={photo.name}>
              <img src={photo.url} alt={photo.name} />
              <p title={photo.name}>{photo.name.replace(/^\d+-/, '')}</p>
              <button onClick={() => removePhoto(photo.name)}>Delete photo</button>
            </article>
          ))}</div>
        ) : <p>No photos in this collection yet. Upload the first one above.</p>}
      </section>
    </main>
  );
}

export default Admin;
