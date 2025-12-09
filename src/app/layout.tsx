import './globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'My Next Blog',
  description: 'Example app router blog with layouts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 py-8 transition-colors duration-300">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-8 transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">Blog</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
