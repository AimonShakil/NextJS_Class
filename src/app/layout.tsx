import Navbar from './components/navbar'
import Navbar1 from './components/navbar1'
import './globals.css'

export default function layout({children}:{children:React.ReactNode }) {
 return (
  <html className='dark'>
    <body >
      <Navbar1/>
      <Navbar/>
      {children}
    </body>
  </html>
 )
}   