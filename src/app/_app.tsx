import { AppProps } from 'next/app';
import GlobalContext from '@/contexts/products'; // Importe o provedor de contexto global

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
