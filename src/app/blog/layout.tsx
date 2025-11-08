import React from 'react';
import BlogSidebar from '../components/blogsidebar';


export default function BlogLayout({ children }: { children: React.ReactNode }) {
return (
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/* Main content */}
<div className="md:col-span-3">{children}</div>


{/* Sidebar (visible only in blog) */}
<aside className="hidden md:block">
<BlogSidebar />
</aside>
</div>
);
}