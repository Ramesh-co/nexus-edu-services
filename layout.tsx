import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRANAV’S NEXUS EDU SERVICES',
  description: 'WHERE DISCIPLINE REACHES DESTINATION — a modern online education institute and education-services platform.',
  metadataBase: new URL('https://pranavnexus.com'),
};

const nav = [['About','/about'],['What We Provide','/services'],['Programmes','/programmes'],['Faculty','/faculty'],['Founder','/founder'],['Announcements','/announcements'],['Contact','/contact']];

export default function RootLayout({children}:{children:React.ReactNode}){
 return <><div className="topbar"><div className="container"><span>PRANAV’S NEXUS EDU SERVICES</span><span>WHERE DISCIPLINE REACHES DESTINATION</span></div></div><header className="nav"><div className="container navin"><Link href="/" className="brand"><span className="mark">N</span><span>PRANAV’S NEXUS<small>EDU SERVICES</small></span></Link><nav className="links">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><button className="menu" aria-label="Menu">MENU</button></div></header>{children}<footer className="footer"><div className="container footergrid"><div><h3>PRANAV’S NEXUS EDU SERVICES</h3><p>WHERE DISCIPLINE REACHES DESTINATION</p><p className="small">A unified online education institute and education-services platform.</p></div><div><h4>Explore</h4>{nav.slice(0,4).map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div><div><h4>Connect</h4><Link href="/faculty">Faculty</Link><Link href="/founder">Founder</Link><Link href="/contact">Contact</Link></div></div><div className="container copyright">© {new Date().getFullYear()} PRANAV’S NEXUS EDU SERVICES. All rights reserved.</div></footer></>
}
