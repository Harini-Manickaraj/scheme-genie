import Link from 'next/link';

export default function Home() {
  return (
    <div className="main-container">
      <h1>Welcome to Scheme Genie</h1>
      <p>Your personalized government scheme recommender system.</p>
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/contact">Contact</Link> |
        <Link href="/schemes">Schemes</Link>
      </nav>
    </div>
  );
}
