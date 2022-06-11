import { TrashIcon } from '@heroicons/react/outline'
import { deleteProfil } from '../../utils/context/AuthAction'

export default function DeleteButton() {
  function refreshPage() {
    return window.location.reload(false)
  }

  const handleSubmit = async () => {
    await deleteProfil()
    localStorage.clear()
    refreshPage()
  }
  return (
    <>
      <button
        type="submit"
        onClick={handleSubmit}
        className="group relative w-80 flex justify-center py-2 px-4 border-2 border-primary text-sm font-bold rounded-md text-primary bg-transparent_background hover:border-white hover:text-white hover:bg-transparent_secondary"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <TrashIcon
            className="h-5 w-5 text-primary group-hover:text-white"
            aria-hidden="true"
          />
        </span>
        Delete
      </button>
    </>
  )
}
