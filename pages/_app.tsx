import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Layout from '../Components/Layout'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
