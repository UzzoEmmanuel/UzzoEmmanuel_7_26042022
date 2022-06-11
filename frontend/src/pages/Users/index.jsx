import Header from '../../components/Header'
import Underline from '../../components/Underline'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { getUsers } from '../../utils/context/AuthAction'

export default function Users() {
  const getUsersData = async () => {
    await getUsers().then((res) => {
      console.log(res)
      return res
    })
  }
  getUsersData()
  return (
    <>
      <Header />
      <main>
        <div className="mt-10 after:mb-32 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h1 className="w-auto mx-10 text-3xl text-primary font-bold tracking-widest">
              COLLABORATEURS
            </h1>
          </div>
          <Underline />
        </div>
        <section className="flex flex-wrap justify-around h-auto w-full mb-20">
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Footer />
    </>
  )
}
