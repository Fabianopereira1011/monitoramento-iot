import '../styles/globals.css'

import Painel from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (<>
      <Painel>
          <Component {...pageProps} />
      </Painel>
      </>
    )
}

export default MyApp
