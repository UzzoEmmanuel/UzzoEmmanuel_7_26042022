import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Error() {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center w-screen h-screen mb-20">
        <div className="w-9/12 max-w-3xl px-40 py-20 bg-transparent_background rounded-lg border-4 border-primary">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-primary text-9xl">404</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-primary md:text-3xl">
              <span className="text-white">Oops!</span> Page not found
            </h6>
            <p className="mb-8 text-center text-primary md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
