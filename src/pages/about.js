import Link from 'next/link';

export default function About() {
  return (
    <div className="main-container">
      <h1>About Scheme Genie</h1>
      <p>We aim to help citizens find the most relevant government schemes.</p>
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/contact">Contact</Link> |
        <Link href="/schemes">Schemes</Link>
      </nav>
    </div>
  );
}
