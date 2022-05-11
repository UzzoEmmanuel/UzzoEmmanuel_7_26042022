import GenericProfilPicture from '../../assets/profil.png'
import { UploadIcon } from '@heroicons/react/solid'
import Header from '../../components/Header'

export default function User() {
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
          <span className="after:content-[''] after:mx-10 after:mt-2 after:h-2.5 after:block after:bg-secondary"></span>
        </div>
        <div className="flex items-center h-auto w-full justify-center">
          <div className="max-w-xs">
            <div className="bg-transparent_background border-4 border-primary rounded-lg shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 border-2 border-primary rounded-full mx-auto"
                  src={GenericProfilPicture}
                  alt="John Doe"
                ></img>
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-primary font-bold leading-8">
                  Username
                </h3>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-primary font-semibold">
                        Description
                      </td>
                      <td className="px-2 py-2 text-white font-medium">...</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-primary font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2 text-white font-medium">
                        john@exmaple.com
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="my-32 flex flex-col">
          <div className="flex md:justify-start justify-center">
            <h2 className="w-auto mx-10 text-2xl text-primary font-bold tracking-widest">
              MODIFIER MON PROFIL
            </h2>
          </div>
          <span className="after:content-[''] after:mx-10 after:my-2 after:h-2.5 after:block after:bg-secondary"></span>
        </div>
        <div className="flex md:flex-row flex-wrap justify-around my-20">
          <div className="min-h-full md:w-auto w-80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20 border-4 border-primary rounded-lg bg-transparent_background">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
                  Upload
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
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Description"
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
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
