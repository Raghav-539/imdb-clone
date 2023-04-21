import Header from '@/components/Header'    // alias @/ is being used instead of whole path.
import './globals.css'
import Providers from '@/app/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'IMDB Clone',
  description: 'Created By Raghav Gupta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Providers> {/* For darkmode and lightmode */}

          <Header/>  {/* importing header file from components */}
          <Navbar/>  {/* importing navbar file from components */}
          <main> {children} </main> 
          <Footer/>

        </Providers>

      </body>
    </html>
  )
}
