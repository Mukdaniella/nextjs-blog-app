'use client';
import { useEffect, useState } from 'react';


export default function ClockClient() {
const [now, setNow] = useState(() => new Date());


useEffect(() => {
const t = setInterval(() => setNow(new Date()), 1000);
return () => clearInterval(t);
}, []);


return (
<div className="p-4 border rounded inline-block">
<div className="font-mono">{now.toLocaleString()}</div>
</div>
);
}