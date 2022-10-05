import '../styles/global.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Header from '../components/layout/header/Header';
import BodyWrapper from '../components/layout/wrappers/BodyWrapper';
import Footer from '../components/layout/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
        
  return (
    <SSRProvider>
      <BodyWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BodyWrapper>
    </SSRProvider>
  );
}

export default MyApp
