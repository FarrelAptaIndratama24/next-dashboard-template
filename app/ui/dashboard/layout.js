import SideNav from '@/app/ui/dashboard/sidenav';
import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
          <div className="flex-none w-full md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
