import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
            <title>Pokemon Challenge</title>
        </Head>
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
