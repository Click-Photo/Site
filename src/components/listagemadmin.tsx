export function ListagemADM({
  title,
  users,
}: {
  title: string
  users: { id: string; name: string; email: string; phone: string }[]
}) {
  return (
    <div className="flex-1 p-6 pl-[100px] pr-[100px] pt-[125px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase">{title}</h2>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full rounded-full bg-black-click px-4 py-2 pl-10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l6-6m0 0l-6-6m6 6H4"
            />
          </svg>
        </div>
      </div>

      <table className="mt-6 w-full table-auto border-collapse bg-black-click text-left">
        <thead>
          <tr className="bg-gray-700 text-gray-300">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-700 hover:bg-gray-700"
            >
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2 text-center">
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 01-1.414 1.414L10 14.414l-2.293 2.293a1 1 0 01-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
