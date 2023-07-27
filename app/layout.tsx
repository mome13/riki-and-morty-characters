import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DashboardRootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
