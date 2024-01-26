import Country from "./Country";
import { useCountries } from "./useCountries";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../../ui/ErrorMessage";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

function CountryList({ query }) {
  const { countries, isLoading, error } = useCountries(query);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(countries);

  // if there any query return back to page 1
  useEffect(
    function () {
      if (query) {
        // modify page param in url
        searchParams.set("page", 1);
        setSearchParams(searchParams);
      }
    },
    [query, setSearchParams, searchParams],
  );

  // const url = !query
  //   ? "https://restcountries.com/v3.1/all"
  //   : `https://restcountries.com/v3.1/name/`;

  if (isLoading) return <div>Loading...</div>;

  // SORT
  const sortBy = searchParams.get("sortBy") || "asc";
  const modifier = sortBy === "asc" ? 1 : -1;
  const sortedCountries = countries.sort(
    (a, b) => a.name?.common.localeCompare(b.name?.common) * modifier,
  );

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // PAGINATION
  let paginatedCountries;
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;

    paginatedCountries = sortedCountries.slice(from, to);
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-10 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {!isLoading &&
        !error &&
        paginatedCountries.map((country) => (
          <Country country={country} key={country.name.official} />
        ))}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default CountryList;
