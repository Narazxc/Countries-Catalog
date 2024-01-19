import { useEffect, useState } from "react";

export function useCountries(query) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

          if (!res.ok)
            throw new Error(`No country found with the name: ${query}`);

          const data = await res.json();
          if (data.Response === "False")
            throw new Error(`No country found with the name: ${query}`);
          setCountries(data);
          // console.log(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            // console.log(err.message);
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
    [query]
  );

  return { countries, isLoading, error };
}
