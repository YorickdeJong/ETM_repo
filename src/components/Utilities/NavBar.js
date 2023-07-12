// NavBar.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const NavBarLink = ({ href, children, pathnames }) => {

  return (
    <Link 
      href={href} 
      style={{
          fontSize: 20, 
          fontStyle: 'normal', 
          fontWeight: 600, 
          lineHeight: '125%',
          color: pathnames ? '#FFFBF9' : '#2D282A',//'#FFFBF9'
          textDecoration: 'none',
        }}
        className={`px-3 py-2 mt-1 rounded-md text-3xl ${
          pathnames ? "text-gray-1000" : "text-gray-1000 hover:text-white"
        }`}
    >
      <h4 style={{
        fontStyle: 'normal', 
        fontWeight: 500, 
        fontSize: children === 'ETM' ? 'calc(1.9vw + 1.9vh)' :'calc(1.1vw + 1.1vh)',
        lineHeight: '125%',
        display: 'flex',
        alignItems: 'center',
        color: pathnames ? '#FFFBF9' : '#2D282A'
      }}>{children}</h4>
    </Link>
  );
};

const NavBarButton = ({ pathnames, children, href }) => {
  return (
    <Link href={href}>
      <button style={{
        backgroundColor: pathnames ?  '#FF8449' : '#1A5D6A',
        height: '4.5vh',
        padding: '0 1vw',  // horizontal padding
        color: 'white',
        fontSize: 'calc(0.7vw + 0.7vh)',
        borderRadius: 20,  // optional, to make the button's corners rounded
        border: 'none',
        cursor: 'pointer'
      }}>
        {children}
      </button>
    </Link>
  );
};

const NavBar = ({pathname}) => {
  const pathnames = pathname === '/'

  return (
    <nav 
      style={{ 
        position: 'absolute', 
        height: 47, 
        left: 128, 
        right: 96,
        width: '85vw',
        top: '1vh',
        zIndex: 100, 
        display: 'flex',
        flexDirection: 'row'
      }} 
    >
      <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            width: '88vw',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <NavBarLink pathnames = {pathnames} href="/">ETM</NavBarLink>
          <NavBarLink pathnames = {pathnames} href="/">Home</NavBarLink>
          <NavBarLink pathnames = {pathnames} href="/aboutUs">Over Ons</NavBarLink>
          <NavBarLink pathnames = {pathnames} href="/servicesPage">Diensten</NavBarLink>
          <NavBarLink pathnames = {pathnames} href="/projectsPage">Projecten</NavBarLink>
          <NavBarLink pathnames = {pathnames} href="/FAQ">FAQ</NavBarLink>
          <NavBarButton pathnames = {pathname} href="/contactInfo">Maak een gratis afspraak</NavBarButton>
      </div>
    </nav>
  )
}

export default NavBar;