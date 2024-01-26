import { useSearchParams } from "react-router-dom";

function SortBy({ options, value }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      className=" rounded-lg outline-none outline-offset-2 hover:shadow-lg focus:outline-pink-500"
      value={sortBy}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
