import LightLogo from '../../assets/light-logo.png'
import { LockClosedIcon } from '@heroicons/react/solid'

export default function Connexion() {
  return (
    <>
      <div>
        <header className="flex justify-center h-100 w-100 bg-transparentBlue">
          <img
            src={LightLogo}
            alt="logo groupomania"
            className="object-cover max-w-full h-auto my-10 px-20"
          />
        </header>
        <main className="flex md:flex-row flex-wrap justify-around my-20">
          <div className="h-96 w-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20 border-4 border-blue rounded-lg bg-transparentGrey">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-blue">
                  Log in
                </h2>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="shadow-sm -space-y-px">
                  <div className="mb-5">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border-2 border-blue text-sm font-bold rounded-md text-blue hover:border-white hover:text-white "
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-blue group-hover:text-white"
                        aria-hidden="true"
                      />
                    </span>
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="min-h-full md:w-auto w-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20 border-4 border-blue rounded-lg bg-transparentGrey">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-blue">
                  Sign up
                </h2>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
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
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Username"
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
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Description"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue">
                      Profile picture
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-blue"
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
                            className="relative cursor-pointer bg-white px-1 rounded-md font-medium text-blue hover:text-white hover:bg-blue focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-white"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 text-blue"> or drag and drop</p>
                        </div>
                        <p className="text-sm text-blue">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border-2 border-blue text-sm font-bold rounded-md text-blue hover:border-white hover:text-white"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-blue group-hover:text-white"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
