'use client';
import { useEffect, useState } from 'react';


export default function BlogSidebar() {
const [query, setQuery] = useState('');
const [categories] = useState(['Tech', 'Lifestyle', 'Education']);
const [results, setResults] = useState<any[]>([]);


useEffect(() => {
let mounted = true;
if (!query) return setResults([]);


// simple client-side search against JSONPlaceholder title space
fetch('https://jsonplaceholder.typicode.com/posts')
.then(r => r.json())
.then((data) => {
if (!mounted) return;
const filtered = data.filter((p: any) => p.title.includes(query) || p.body.includes(query));
setResults(filtered.slice(0, 5));
});


return () => {
mounted = false;
};
}, [query]);


return (
<div className="p-4 border rounded">
<div className="mb-4">
<label className="block text-sm font-medium">Search posts</label>
<input value={query} onChange={(e) => setQuery(e.target.value)} className="mt-1 w-full p-2 border rounded" placeholder="Search..." />
</div>


<div className="mb-4">
<h4 className="font-semibold mb-2">Categories</h4>
<ul>
{categories.map(c => (
<li key={c} className="text-sm py-1">{c}</li>
))}
</ul>
</div>


{results.length > 0 && (
<div>
<h4 className="font-semibold mb-2">Results</h4>
<ul>
{results.map(r => (
<li key={r.id} className="text-sm py-1">{r.title}</li>
))}
</ul>
</div>
)}
</div>
);
}