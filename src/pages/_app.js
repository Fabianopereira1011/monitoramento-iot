import '../styles/globals.css'

import Painel from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0'


function MyApp({ Component, pageProps }) {

  return (<>
    <UserProvider>
      <Painel>
          <Component {...pageProps} />
      </Painel>
    </UserProvider>
      </>
    )
}

export default MyApp
