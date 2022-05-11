import GenericProfilPicture from '../../assets/profil.png'
import Header from '../../components/Header'

export default function Users() {
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
          <span className="after:content-[''] after:mx-10 after:mt-2 after:h-2.5 after:block after:bg-secondary"></span>
        </div>
        <div className="flex flex-wrap justify-around h-auto w-full">
          <div className="max-w-xs mx-10 mb-10">
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
          <div className="max-w-xs mx-10 mb-10">
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
          <div className="max-w-xs mx-10 mb-10">
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
      </main>
    </>
  )
}
