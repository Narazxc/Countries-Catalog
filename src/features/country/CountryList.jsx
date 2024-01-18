import { useEffect, useState } from "react";
import Country from "./Country";
import { useCountries } from "./useCountries";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../../ui/ErrorMessage";

function CountryList({ query }) {
  // const { countries, isLoading, error } = useCountries(query);
  const [searchParams, setSearchParams] = useSearchParams();

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const url = !query
    ? "https://restcountries.com/v3.1/all"
    : `https://restcountries.com/v3.1/name/`;

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountries() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            !query
              ? "https://restcountries.com/v3.1/all"
              : `https://restcountries.com/v3.1/name/${query}`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok) throw new Error("Countries not found");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Countries not found");
          setCountries(data);
          // console.log(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchCountries();

      return function () {
        controller.abort();
      };
    },
    [url, query]
  );

  if (isLoading) return <div>Loading...</div>;

  // SORT
  const sortBy = searchParams.get("sortBy") || "asc";
  const modifier = sortBy === "asc" ? 1 : -1;
  const sortedCountries = countries.sort(
    (a, b) => a.name?.common.localeCompare(b.name?.common) * modifier
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      {!isLoading &&
        !error &&
        sortedCountries.map((country) => (
          <Country country={country} key={country.name.official} />
        ))}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default CountryList;
