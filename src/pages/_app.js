import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: 'url("/lamp.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
