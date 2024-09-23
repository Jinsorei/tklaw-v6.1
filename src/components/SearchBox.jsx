import { FaSearch } from 'react-icons/fa';

function SearchBox({ placeholder = "Search...", onSearch }) {
  return (
    <div className="flex items-center border border-white rounded-md py-3 px-4 bg-white text-black shadow-lg">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none w-full text-black placeholder-gray-500 focus:outline-none"
        aria-label="Search"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && onSearch) {
            onSearch(e.target.value);
          }
        }}
      />
      <button
        type="submit"
        className="flex-shrink-0 text-primary ml-3"
        onClick={() => {
          if (onSearch) {
            const input = document.querySelector("input[aria-label='Search']");
            onSearch(input.value);
          }
        }}
      >
        <FaSearch size={20} />
      </button>
    </div>
  );
}

export default SearchBox;
