import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container">
        {children}
        <nav>
          <Link href="/">Home</Link> |{' '}
          <Link href="/about">About</Link> |{' '}
          <Link href="/contact">Contact</Link> |{' '}
          <Link href="/schemes">Schemes</Link>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
