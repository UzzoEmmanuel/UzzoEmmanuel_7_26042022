//import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Underline from '../../components/Underline'
import PostUpdate from '../../components/Forms/PostUpdate'

export default function MyPosts() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-around h-auto w-full mt-20 mb-20">
        <h1 className="w-auto mx-10 text-3xl text-primary font-bold tracking-widest">
          MES PUBLICATIONS
        </h1>
        <Underline />
        <PostUpdate />
      </div>
      <Footer />
    </>
  )
}
