import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { HalaProvider } from '../context/halaContext'

function MyApp({ Component, pageProps }) {
  return (
    <HalaProvider>
      <Component {...pageProps} />
    </HalaProvider>
  )
}

export default MyApp