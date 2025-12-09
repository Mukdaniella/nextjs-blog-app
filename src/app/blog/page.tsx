import Link from 'next/link';
import { getPosts } from '../lib/fetchers';
import ClockWrapper from '../components/clock-wrapper';

export default async function BlogPage() {
  const posts: any[] = await getPosts({ cache: 'force-cache' });

  return (
    <section className="max-w-6xl mx-auto">
      
      <ClockWrapper />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.slice(0, 10).map((p) => (
          <article key={p.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {p.id}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Post #{p.id}</span>
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                {p.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                {p.body.slice(0, 120)}...
              </p>
              
              <Link 
                href={`/blog/${p.id}`} 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}