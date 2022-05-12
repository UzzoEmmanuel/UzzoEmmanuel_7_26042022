import GenericProfilPicture from '../../assets/profil.png'

export default function Card() {
  return (
    <>
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
    </>
  )
}
