import GenericProfilPicture from '../../assets/profil.png'
import { getUser } from '../../utils/context/AuthAction'

export default function Card() {
  const Username = async () => {
    await getUser().then((res) => {
      console.log(res.username)
      return res.username
    })
  }
  Username()
  const Description = async () => {
    await getUser().then((res) => {
      console.log(res.description)
      return res.description
    })
  }
  Description()

  return (
    <>
      <div className="w-80 mx-10 mb-10">
        <div className="bg-transparent_background border-4 border-primary rounded-lg shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 border-2 border-primary rounded-full mx-auto"
              src={GenericProfilPicture}
              alt="profil"
            ></img>
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-primary font-bold leading-8">
              username
            </h3>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-primary font-semibold">
                    Description
                  </td>
                  <td className="px-2 py-2 text-white font-medium">...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
