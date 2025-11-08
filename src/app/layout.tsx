import './globals.css';
import Link from 'next/link';
import NavLink from './components/navlink';
import DarkToggle from './components/darktoggle';


export const metadata = {
title: 'My Next Blog',
description: 'Example app router blog with layouts',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<header className="border-b py-4">
<div className="container flex items-center justify-between">
<h1 className="text-xl font-bold">My Next Blog</h1>
<nav className="flex gap-4 items-center">
<NavLink href="/">Home</NavLink>
<NavLink href="/about">About</NavLink>
<NavLink href="/blog">Blog</NavLink>
<DarkToggle />
</nav>
</div>
</header>


<main className="py-8">
<div className="container">{children}</div>
</main>


<footer className="border-t py-6 ">
<div className="container text-center text-sm">© {new Date().getFullYear()} My Next Blog</div>
</footer>
</body>
</html>
);
}