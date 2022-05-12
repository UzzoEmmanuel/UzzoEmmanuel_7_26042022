import LightLogo from '../../assets/light-logo.png'

export default function Banner() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-68 w-100 bg-transparent_primary">
        <img
          src={LightLogo}
          alt="logo groupomania"
          className="object-cover w-full max-w-3xl h-auto my-10 px-20"
        />
      </div>
    </>
  )
}
