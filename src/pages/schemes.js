import Link from 'next/link';

export default function About() {
  return (
    <div className="main-container">
      <h1>Schemes</h1>
      <p>List of schemes will be displayed here</p>
      <nav>
        <Link href="/">About</Link> |
        <Link href="/contact">Contact</Link> |
        <Link href="/schemes">Schemes</Link>
      </nav>
    </div>
  );
}
