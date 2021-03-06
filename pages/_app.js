//import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    );
}

export default MyApp
