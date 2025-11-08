import React from 'react';
import { getUser } from '../lib/fetchers';


export const revalidate = 0; // 0 -> never revalidate; we'll use no-store below with fetch


export default async function AboutPage() {
// Server-side fetch (no-store) to mimic SSR (always fresh)
const author = await getUser(1, { cache: 'no-store' });


return (
<section>
<h2 className="text-2xl font-semibold mb-4">About the author</h2>
<div className="p-4 border rounded">
<p className="font-bold">{author.name}</p>
<p>{author.email}</p>
<p>{author.website}</p>
<p className="mt-2">{author.company?.name}</p>
</div>
</section>
);
}