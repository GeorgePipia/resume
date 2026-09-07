import type { Metadata } from 'next';
import './globals.css';
import AuthRedirect from './auth-redirect';
export const metadata: Metadata = {title:'George Odyssey Pipia | Accounting',description:'Resume of George Odyssey Pipia, Accounting major at Rutgers Business School.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><AuthRedirect/>{children}</body></html>}
