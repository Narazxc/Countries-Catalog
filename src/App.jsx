import { useState } from "react";
import CountryList from "./features/country/CountryList";
import Search from "./ui/Search";
import SortBy from "./ui/SortBy";
import { BrowserRouter } from "react-router-dom";
import Pagination from "./ui/Pagination";
import AppLayout from "./ui/AppLayout";

// https://restcountries.com/v3.1/all
function App() {
  // const [query, setQuery] = useState("");

  return (
    <BrowserRouter>
      {/* <div className="flex flex-col items-center justify-center"> */}
      {/* <Search query={query} setQuery={setQuery} />
        <SortBy
          options={[
            { value: "asc", label: "Sort by name (A-Z)" },
            { value: "desc", label: "Sort by name (Z-A)" },
          ]}
        />
        <CountryList query={query} />
        <Pagination />
        <Footer /> */}
      <AppLayout />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
