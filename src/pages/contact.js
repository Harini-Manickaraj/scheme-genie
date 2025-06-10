import Link from 'next/link';

export default function About() {
  return (
    <div className="main-container">
      <h1>Contact Us</h1>
      <p>Reach out to us at contact@schemegenie.com</p>
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/contact">Contact</Link> |
        <Link href="/schemes">Schemes</Link>
      </nav>
    </div>
  );
}
