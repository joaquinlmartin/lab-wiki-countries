import './App.css';
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path="/" element={<CountriesList />} /> 
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;