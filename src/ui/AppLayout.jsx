import { useState } from "react";
import Search from "./Search";
import SortBy from "./SortBy";
import CountryList from "../features/country/CountryList";
import Pagination from "./Pagination";
import { useCountries } from "../features/country/useCountries";
import Header from "./Header";

function AppLayout() {
  const [query, setQuery] = useState("");
  const { countries } = useCountries();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Header>
        <Search query={query} setQuery={setQuery} />

        <SortBy
          options={[
            { value: "asc", label: "Sort by name (A-Z)" },
            { value: "desc", label: "Sort by name (Z-A)" },
          ]}
        />
      </Header>

      <div className="max-w-6xl">
        <CountryList query={query} />
      </div>

      <Pagination count={countries.length} />
    </div>
  );
}

export default AppLayout;
