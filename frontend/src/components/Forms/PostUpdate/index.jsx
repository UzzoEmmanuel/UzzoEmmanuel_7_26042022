import React, { useState } from 'react'
import { UploadIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/outline'
import { UpdatePost } from '../../../utils/services/PostAction'
//import { DeletePost } from '../../../utils/services/PostAction'

export default function PostUpdate() {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [category, setCategory] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    UpdatePost({
      title,
      content,
      category,
    })
  }
  return (
    <div className="flex md:justify-around justify-start h-auto mb-10 mt-20 mx-10 bg-transparent_background rounded-md">
      <div className="p-5 md:w-9/12 max-w-9/12 w-full">
        <h1 className="text-xl font-bold text-primary">Fait le: </h1>
        <form
          className="mt-10"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <div className="border-0 w-fit rounded-md mb-5 shadow-sm">
              <button
                type="button"
                onClick={() => setCategory('TEXT')}
                className="px-4 py-2 border-r border-primary rounded-l-md text-primary m-0 bg-white hover:bg-primary hover:text-white active:bg-primary active:text-white"
              >
                Texte
              </button>
              <button
                type="button"
                onClick={() => setCategory('MEDIA')}
                className="px-4 py-2 rounded-r-md text-primary m-0 bg-white hover:bg-primary hover:text-white active:bg-primary active:text-white"
              >
                Média
              </button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                name="post title"
                type="text"
                required
                className="peer block w-full rounded-md appearance-none border-0 border-b py-2.5 px-5 text-lg text-primary focus:outline-none focus:ring-0"
                placeholder="titre"
              />
              <label htmlFor="post title" className="sr-only">
                Post title
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                id="title"
                onChange={(e) => setContent(e.target.value)}
                name="Post content"
                rows="4"
                required
                className="peer block w-full rounded-md appearance-none border-0 border-b py-2.5 px-5 text-lg text-primary focus:outline-none focus:ring-0"
                placeholder="message"
              ></textarea>
              <label htmlFor="post content" className="sr-only">
                Post content
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:flex-row sm:justify-between">
            <button
              type="submit"
              className="flex flex-row justify-center mt-5 rounded-md bg-background_transparent font-bold border-2 border-primary px-10 py-2 text-primary hover:border-white hover:text-white"
            >
              <UploadIcon className="h-5 w-5 mr-5" aria-hidden="true" />
              MODIFIER
            </button>
            <button
              type="submit"
              className="flex flex-row justify-center mt-5 rounded-md bg-background_transparent font-bold border-2 border-primary px-10 py-2 text-primary hover:border-white hover:text-white hover:bg-transparent_secondary"
            >
              <TrashIcon className="h-5 w-5 mr-5" aria-hidden="true" />
              SUPPRIMER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
