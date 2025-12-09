import { getPost, getUser } from '../../lib/fetchers';
import Link from 'next/link';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id, { next: { revalidate: 60 } });
  const author = await getUser(post.userId, { next: { revalidate: 60 } });

  return (
    <article className="max-w-4xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-6 hover:underline">
        ← Back to Blog
      </Link>
      
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{post.title}</h2>
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {author.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white">{author.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{author.email}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{post.body}</p>
      </div>
    </article>
  );
}