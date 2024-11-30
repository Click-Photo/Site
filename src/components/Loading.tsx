import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black-click/90 md:flex-row">
      <FontAwesomeIcon icon={faSpinner} className="h-9 w-9 animate-spin" />
      <p className="text-xl font-bold text-white">Carregando...</p>
    </div>
  )
}
