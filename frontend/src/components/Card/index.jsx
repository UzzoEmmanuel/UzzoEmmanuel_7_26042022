import GenericProfilPicture from '../../assets/profil.png'

export default function Card({ username, description }) {
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
              {username}
            </h3>
            <div className="text-xs w-full my-3">
              <p className="text-center px-2 py-2 text-primary font-semibold">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
