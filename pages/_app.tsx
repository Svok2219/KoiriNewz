import '../styles/globals.css'
// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
