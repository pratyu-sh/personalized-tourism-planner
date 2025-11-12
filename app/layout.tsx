
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'DeepShiva | AI Tourism Planner',
  description: 'Plan your Uttarakhand trip with AI & smart routing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
