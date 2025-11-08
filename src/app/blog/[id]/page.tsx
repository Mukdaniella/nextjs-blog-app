import { getPost, getUser } from '../../lib/fetchers';


// Optionally declare dynamic params behavior
// export const dynamic = 'auto';


export default async function PostPage({ params }: { params: { id: string } }) {
const { id } = params;


// ISR: revalidate after 60 seconds
const post = await getPost(id, { next: { revalidate: 60 } });
const author = await getUser(post.userId, { next: { revalidate: 60 } });


return (
<article>
<h2 className="text-2xl font-bold mb-2">{post.title}</h2>
<p className="text-sm text-gray-500 mb-4">By {author.name} — {author.email}</p>
<div className="prose max-w-none">{post.body}</div>
</article>
);
}