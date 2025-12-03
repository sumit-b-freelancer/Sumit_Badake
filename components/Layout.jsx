import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10">{children}</main>
      <Footer />
    </div>
  )
}