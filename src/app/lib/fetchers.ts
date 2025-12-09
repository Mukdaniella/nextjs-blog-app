export async function fetchJSON(url: string, opts?: RequestInit) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error('Fetch error ' + res.status);
  return res.json();
}

export function getPosts(opts?: RequestInit) {
  return fetchJSON('https://jsonplaceholder.typicode.com/posts', opts);
}

export function getPost(id: string | number, opts?: RequestInit) {
  return fetchJSON('https://jsonplaceholder.typicode.com/posts/' + id, opts);
}

export function getUser(id: string | number, opts?: RequestInit) {
  return fetchJSON('https://jsonplaceholder.typicode.com/users/' + id, opts);
}