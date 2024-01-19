import { BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

// https://restcountries.com/v3.1/all
function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
