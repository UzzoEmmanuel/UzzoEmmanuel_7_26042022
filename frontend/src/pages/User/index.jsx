import Header from '../../components/Header'
import Underline from '../../components/Underline'
import Card from '../../components/Card'
import Update from '../../components/Forms/Update'
import DeleteButton from '../../components/DeleteButton'
import Footer from '../../components/Footer'
import { useAuth } from '../../utils/context'
import { GetUser } from '../../utils/context/AuthAction'
import { useEffect } from 'react'

export default function User() {
  const { user } = useAuth()

  useEffect(() => {
    GetUser(user.id).then((response) => response.data)
  }, [user])

  return (
    <>
      <Header />
      <main>
        <div className="mt-10 after:mb-32 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h1 className="w-auto mx-10 text-3xl text-primary font-bold tracking-widest">
              MON PROFIL
            </h1>
          </div>
          <Underline />
        </div>
        <section className="flex items-center h-auto w-full justify-center">
          <Card
            key={user.id}
            username={user.username}
            description={user.description}
          />
        </section>
        <div className="my-32 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h2 className="w-auto mx-10 text-2xl text-primary font-bold tracking-widest">
              MODIFIER MON PROFIL
            </h2>
          </div>
          <Underline />
        </div>
        <section className="flex md:flex-row flex-wrap justify-around my-20">
          <Update />
        </section>
        <div className="my-32 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h2 className="w-auto mx-10 text-2xl text-primary font-bold tracking-widest">
              SUPPRIMER MON PROFIL
            </h2>
          </div>
          <Underline />
        </div>
        <section className="flex md:flex-row flex-wrap justify-around my-20">
          <DeleteButton />
        </section>
        <Footer />
      </main>
    </>
  )
}
