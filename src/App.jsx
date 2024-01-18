import { useState } from "react";
import CountryList from "./features/country/CountryList";
import Search from "./ui/Search";

// https://restcountries.com/v3.1/all
function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <Search query={query} setQuery={setQuery} />
      <CountryList query={query} />
    </div>
  );
}

export default App;
