import Link from 'next/link';
import { getPosts } from '../lib/fetchers';
import ClockWrapper from '../components/clock-wrapper';

export default async function BlogPage() {
  const posts: any[] = await getPosts({ cache: 'force-cache' });

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Blog posts</h2>

      {/* Add the clock here */}
      <ClockWrapper />

      <div className="space-y-3">
        {posts.slice(0, 10).map((p) => (
          <article key={p.id} className="p-4 border rounded">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm mt-2">{p.body.slice(0, 140)}...</p>
            <Link href={`/blog/${p.id}`} className="text-sm mt-2 inline-block underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
