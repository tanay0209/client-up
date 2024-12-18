import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='relative bg-[#0A0E03] overflow-hidden min-h-dvh'>
      <Navbar />
      <div className="rounded-full w-[800px] h-[800px] absolute blur-3xl bg-[radial-gradient(#0D6736,#000)] inset-0 -translate-x-1/2 -translate-y-1/2" />
      <div className='flex flex-col w-full mx-auto lg:max-w-4xl xl:max-w-6xl sm:max-w-md max-w-xs md:max-w-2xl'>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default App
