'use client';
import { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved === 'dark' : prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial); // ✅ add class to <html>
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark); // ✅ toggle on <html>
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 border rounded"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
