import { useRef } from "react";
import { useKey } from "../hooks/useKey";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="w-full justify-self-center rounded-lg bg-slate-200 px-[1rem] py-[0.5rem] outline-none outline-offset-2 hover:shadow-lg focus:outline-pink-500"
      // focus:border-purple-500
      type="text"
      placeholder="Search countries..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
