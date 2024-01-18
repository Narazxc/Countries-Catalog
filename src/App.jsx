import { useState, useEffect } from "react";
import "./App.css";

// https://restcountries.com/v3.1/all
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://restcountries.com/v3.1/all`, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something when wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Countries not found");
        setCountries(data);
        console.log(data);
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
  }, []);

  return <div>{isLoading && <div>Loading...</div>}</div>;
}

export default App;
