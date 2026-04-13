
// import './App.css';
// import Navbar from './components/Navbar';
// import NewsPage from './components/NewsPage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [country, setCountry] = useState("in"); // default country

//   return (
//     <BrowserRouter>
//       <Navbar onCountryChange={setCountry} selectedCountry={country} />
//       <header className="App-header">
//         <Routes>
//           {/* Home route */}
//           <Route
//             path="/"
//             element={<NewsPage key={`${country}-general`} country={country} category="general" lang="en" />}
//           />

//           {/* Category routes */}
//           <Route
//             path="/home"
//             element={<NewsPage key={`${country}-general`} country={country} category="general" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/business"
//             element={<NewsPage key={`${country}-business`} country={country} category="business" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/entertainment"
//             element={<NewsPage key={`${country}-entertainment`} country={country} category="entertainment" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/health"
//             element={<NewsPage key={`${country}-health`} country={country} category="health" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/science"
//             element={<NewsPage key={`${country}-science`} country={country} category="science" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/technology"
//             element={<NewsPage key={`${country}-technology`} country={country} category="technology" lang="en" pageSize={8} />}
//           />
//           <Route
//             path="/sports"
//             element={<NewsPage key={`${country}-sports`} country={country} category="sports" lang="en" pageSize={8} />}
//           />
//         </Routes>
//       </header>
//     </BrowserRouter>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const [country, setCountry] = useState("in"); // default country
  const { theme } = useContext(ThemeContext);


  


  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <BrowserRouter>
        <Navbar onCountryChange={setCountry} selectedCountry={country} />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={<NewsPage key={`${country}-general`} country={country} category="general" lang="en" />}
            />
            <Route
              path="/home"
              element={<NewsPage key={`${country}-general`} country={country} category="general" lang="en" pageSize={8} />}
            />
            <Route
              path="/business"
              element={<NewsPage key={`${country}-business`} country={country} category="business" lang="en" pageSize={8} />}
            />
            <Route
              path="/entertainment"
              element={<NewsPage key={`${country}-entertainment`} country={country} category="entertainment" lang="en" pageSize={8} />}
            />
            <Route
              path="/health"
              element={<NewsPage key={`${country}-health`} country={country} category="health" lang="en" pageSize={8} />}
            />
            <Route
              path="/science"
              element={<NewsPage key={`${country}-science`} country={country} category="science" lang="en" pageSize={8} />}
            />
            <Route
              path="/technology"
              element={<NewsPage key={`${country}-technology`} country={country} category="technology" lang="en" pageSize={8} />}
            />
            <Route
              path="/sports"
              element={<NewsPage key={`${country}-sports`} country={country} category="sports" lang="en" pageSize={8} />}
            />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
