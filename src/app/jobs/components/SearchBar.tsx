import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar: React.FC = () => (
  <div className="mt-6 flex gap-4 rounded-[30px] bg-neutral-900 px-6 py-2.5 text-xl max-md:px-5">
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="self-center text-lg text-white"
    />

    <input
      type="text"
      className="w-full bg-transparent text-white focus:outline-none"
      placeholder="Pesquisa"
      aria-label="Pesquisa"
    />
  </div>
)

export default SearchBar
