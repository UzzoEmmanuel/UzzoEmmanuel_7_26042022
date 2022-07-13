import React, { useState, useEffect } from 'react'
import { UploadIcon } from '@heroicons/react/solid'
import { UpdateUser } from '../../../utils/context/AuthAction'
import { UpdateUserPicture } from '../../../utils/context/AuthAction'
import { useAuth } from '../../../utils/context'

export default function Update() {
  const [username, setUsername] = useState()
  const [description, setDescription] = useState()
  const [picture, setPicture] = useState()

  const { isAuthenticated, user, setUser } = useAuth()

  useEffect(() => {
    setUsername(user.username)
    setDescription(user.description)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isAuthenticated) {
      UpdateUser(user.id, { username, description }).then((data) => {
        setUser({ ...user, username, description })
        console.log(data)
      })
      console.log({ username })
    }
  }

  const handleUpload = (e) => {
    setPicture(e.target.files[0])
    UpdateUserPicture(user.id, { picture })
    console.log({ picture })
  }

  return (
    <>
      <div className="min-h-full md:w-auto w-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20 border-4 border-primary rounded-lg bg-transparent_background">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
              Update
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="PUT"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="shadow-sm">
              <div className="mb-5">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  defaultValue={username}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue={description}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary">
                  Profile picture
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-primary"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white px-1 rounded-md font-medium text-primary hover:text-white hover:bg-primary focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-white"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleUpload}
                        />
                      </label>
                      <p className="pl-1 text-primary"> or drag and drop</p>
                    </div>
                    <p className="text-sm text-primary">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border-2 border-primary text-sm font-bold rounded-md text-primary hover:border-white hover:text-white"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <UploadIcon
                    className="h-5 w-5 text-primary group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
