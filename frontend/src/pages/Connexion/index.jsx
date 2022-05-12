import Banner from '../../components/Banner'
import Underline from '../../components/Underline'
import Login from '../../components/Forms/Login'
import SignUp from '../../components/Forms/SignUp'
import Footer from '../../components/Footer'

export default function Connexion() {
  return (
    <>
      <header>
        <Banner />
        <div className="mt-10 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h1 className="w-auto mx-10 text-3xl text-primary font-bold tracking-widest">
              BIENVENUE
            </h1>
          </div>
          <Underline />
        </div>
      </header>
      <main className="flex md:flex-row flex-wrap justify-around my-20">
        <Login />
        <SignUp />
      </main>
      <Footer />
    </>
  )
}
