const SearchGlobal = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4 px-2">
      <form className="w-full md:w-3/4 lg:w-1/2 flex bg-white rounded-md p-1">
        <input
          type="text"
          className="w-4/5 md:w-11/12 px-4 py-3 text-sm text-slate-700 outline-none"
          placeholder="چه چیزی دوست داری یادبگیری ؟"
        />
        <button
          className="w-1/5 md:w-1/12 bg-blue-500 text-white rounded-lg transition-all duration-150 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            className="w-7 h-7 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchGlobal;
