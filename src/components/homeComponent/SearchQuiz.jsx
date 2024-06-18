import { FaSearch } from "react-icons/fa";

const SearchQuiz = () => {
  return (
    <div className="flex items-center w-full mx-auto justify-stretch">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-max">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaSearch />
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search branch name..." required />
      </div>
      <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 w-fit">
      
        <span >Start Quiz</span>
      </button>
    </div>
  )
}

export default SearchQuiz