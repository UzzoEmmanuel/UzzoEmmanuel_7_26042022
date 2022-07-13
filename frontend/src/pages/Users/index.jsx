import Header from '../../components/Header'
import Underline from '../../components/Underline'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { GetUsers } from '../../utils/context/AuthAction'

import { useState, useEffect } from 'react'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    GetUsers().then((response) => setUsers(response.data))
  }, [])

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
          {users.map((user) => (
            <Card
              key={user.id}
              username={user.username}
              description={user.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
