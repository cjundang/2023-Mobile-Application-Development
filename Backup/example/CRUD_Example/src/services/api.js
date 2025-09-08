const BASE = 'https://jsonplaceholder.typicode.com';

/** Fetch list of posts */
export async function fetchPosts() {
  const res = await fetch(`${BASE}/posts?_limit=30`);
  if (!res.ok) throw new Error('Failed to load posts');
  return await res.json();
}

/** Fetch single post by id */
export async function fetchPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error('Failed to load post');
  return await res.json();
}

/** Create a post (JSONPlaceholder returns a fake created object) */
export async function createPost(payload) {
  const res = await fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create post');
  return await res.json();
}

/** Update a post (JSONPlaceholder does not persist) */
export async function updatePost(id, payload) {
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update post');
  return await res.json();
}

/** Delete a post (JSONPlaceholder responds ok but does not persist) */
export async function deletePost(id) {
  const res = await fetch(`${BASE}/posts/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete post');
  return true;
}
