import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <div>
      <Layout>
        <div className="text-slate-500 flex flex-col gap-6">
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </div>
      </Layout>
    </div>
  );
};

export default MyApp
