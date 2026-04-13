
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './static/Navbar.css';
// import { ThemeContext } from './components/ThemeContext';

// export default function Navbar({ onCountryChange }) {
//   const [formattedDate, setFormattedDate] = useState("");
//   const [country, setCountry] = useState("in");

  
//   const { theme, toggleTheme } = useContext(ThemeContext)

//   const navigate = useNavigate();
//   const location = useLocation();

//   const countries = [

//   { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" },
//   { code: "ar", name: "Argentina", flag: "🇦🇷" },
//   { code: "at", name: "Austria", flag: "🇦🇹" },
//   { code: "au", name: "Australia", flag: "🇦🇺" },
//   { code: "be", name: "Belgium", flag: "🇧🇪" },
//   { code: "bg", name: "Bulgaria", flag: "🇧🇬" },
//   { code: "br", name: "Brazil", flag: "🇧🇷" },
//   { code: "ca", name: "Canada", flag: "🇨🇦" },
//   { code: "ch", name: "Switzerland", flag: "🇨🇭" },
//   { code: "cn", name: "China", flag: "🇨🇳" },
//   { code: "co", name: "Colombia", flag: "🇨🇴" },
//   { code: "cu", name: "Cuba", flag: "🇨🇺" },
//   { code: "cz", name: "Czech Republic", flag: "🇨🇿" },
//   { code: "de", name: "Germany", flag: "🇩🇪" },
//   { code: "eg", name: "Egypt", flag: "🇪🇬" },
//   { code: "fr", name: "France", flag: "🇫🇷" },
//   { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
//   { code: "gr", name: "Greece", flag: "🇬🇷" },
//   { code: "hk", name: "Hong Kong", flag: "🇭🇰" },
//   { code: "hu", name: "Hungary", flag: "🇭🇺" },
//   { code: "id", name: "Indonesia", flag: "🇮🇩" },
//   { code: "ie", name: "Ireland", flag: "🇮🇪" },
//   { code: "il", name: "Israel", flag: "🇮🇱" },
//   { code: "in", name: "India", flag: "🇮🇳" },
//   { code: "it", name: "Italy", flag: "🇮🇹" },
//   { code: "jp", name: "Japan", flag: "🇯🇵" },
//   { code: "kr", name: "South Korea", flag: "🇰🇷" },
//   { code: "lt", name: "Lithuania", flag: "🇱🇹" },
//   { code: "lv", name: "Latvia", flag: "🇱🇻" },
//   { code: "ma", name: "Morocco", flag: "🇲🇦" },
//   { code: "mx", name: "Mexico", flag: "🇲🇽" },
//   { code: "my", name: "Malaysia", flag: "🇲🇾" },
//   { code: "ng", name: "Nigeria", flag: "🇳🇬" },
//   { code: "nl", name: "Netherlands", flag: "🇳🇱" },
//   { code: "no", name: "Norway", flag: "🇳🇴" },
//   { code: "nz", name: "New Zealand", flag: "🇳🇿" },
//   { code: "ph", name: "Philippines", flag: "🇵🇭" },
//   { code: "pl", name: "Poland", flag: "🇵🇱" },
//   { code: "pt", name: "Portugal", flag: "🇵🇹" },
//   { code: "ro", name: "Romania", flag: "🇷🇴" },
//   { code: "rs", name: "Serbia", flag: "🇷🇸" },
//   { code: "ru", name: "Russia", flag: "🇷🇺" },
//   { code: "sa", name: "Saudi Arabia", flag: "🇸🇦" },
//   { code: "se", name: "Sweden", flag: "🇸🇪" },
//   { code: "sg", name: "Singapore", flag: "🇸🇬" },
//   { code: "si", name: "Slovenia", flag: "🇸🇮" },
//   { code: "sk", name: "Slovakia", flag: "🇸🇰" },
//   { code: "th", name: "Thailand", flag: "🇹🇭" },
//   { code: "tr", name: "Turkey", flag: "🇹🇷" },
//   { code: "tw", name: "Taiwan", flag: "🇹🇼" },
//   { code: "ua", name: "Ukraine", flag: "🇺🇦" },
//   { code: "us", name: "United States", flag: "🇺🇸" },
//   { code: "ve", name: "Venezuela", flag: "🇻🇪" },
//   { code: "za", name: "South Africa", flag: "🇿🇦" }
// ];

   


//   const categories = ["business", "entertainment", "health", "science", "technology", "sports"];

//   useEffect(() => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const updateDate = () => {
//       setFormattedDate(new Date().toLocaleDateString('en-US', options));
//     };
//     updateDate();
//     const timer = setInterval(updateDate, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleCountryChange = (e) => {
//     const newCountry = e.target.value;
//     setCountry(newCountry);
//     onCountryChange(newCountry);

//     // Preserve category when changing country
//     const currentPath = location.pathname;
//     if (currentPath === "/") {
//       navigate("/"); 
//     } else {
//       navigate(currentPath);
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">News App</div>

//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         {categories.map(cat => (
//           <li key={cat}>
//             <Link to={`/${cat}`}>{cat}</Link>
//           </li>
//         ))}
//       </ul>

//       <div className="navbar-date">
//         <select value={country} onChange={handleCountryChange}>
//           {countries.map(c => (
//             <option key={c.code} value={c.code}>
//               {c.flag} {c.name}
//             </option>
//           ))}
//         </select>
//         {formattedDate}
//       </div>
//     </nav>
//   );
// }



import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './static/Navbar.css';
import { ThemeContext } from '../components/ThemeContext';

export default function Navbar({ onCountryChange }) {
  const [formattedDate, setFormattedDate] = useState("");
  const [country, setCountry] = useState("in");

  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  const countries = [
    { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" },
    { code: "ar", name: "Argentina", flag: "🇦🇷" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "bg", name: "Bulgaria", flag: "🇧🇬" },
    { code: "br", name: "Brazil", flag: "🇧🇷" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "cn", name: "China", flag: "🇨🇳" },
    { code: "co", name: "Colombia", flag: "🇨🇴" },
    { code: "cu", name: "Cuba", flag: "🇨🇺" },
    { code: "cz", name: "Czech Republic", flag: "🇨🇿" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "eg", name: "Egypt", flag: "🇪🇬" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "hk", name: "Hong Kong", flag: "🇭🇰" },
    { code: "hu", name: "Hungary", flag: "🇭🇺" },
    { code: "id", name: "Indonesia", flag: "🇮🇩" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "il", name: "Israel", flag: "🇮🇱" },
    { code: "in", name: "India", flag: "🇮🇳" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "jp", name: "Japan", flag: "🇯🇵" },
    { code: "kr", name: "South Korea", flag: "🇰🇷" },
    { code: "lt", name: "Lithuania", flag: "🇱🇹" },
    { code: "lv", name: "Latvia", flag: "🇱🇻" },
    { code: "ma", name: "Morocco", flag: "🇲🇦" },
    { code: "mx", name: "Mexico", flag: "🇲🇽" },
    { code: "my", name: "Malaysia", flag: "🇲🇾" },
    { code: "ng", name: "Nigeria", flag: "🇳🇬" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "ph", name: "Philippines", flag: "🇵🇭" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "pt", name: "Portugal", flag: "🇵🇹" },
    { code: "ro", name: "Romania", flag: "🇷🇴" },
    { code: "rs", name: "Serbia", flag: "🇷🇸" },
    { code: "ru", name: "Russia", flag: "🇷🇺" },
    { code: "sa", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "sg", name: "Singapore", flag: "🇸🇬" },
    { code: "si", name: "Slovenia", flag: "🇸🇮" },
    { code: "sk", name: "Slovakia", flag: "🇸🇰" },
    { code: "th", name: "Thailand", flag: "🇹🇭" },
    { code: "tr", name: "Turkey", flag: "🇹🇷" },
    { code: "tw", name: "Taiwan", flag: "🇹🇼" },
    { code: "ua", name: "Ukraine", flag: "🇺🇦" },
    { code: "us", name: "United States", flag: "🇺🇸" },
    { code: "ve", name: "Venezuela", flag: "🇻🇪" },
    { code: "za", name: "South Africa", flag: "🇿🇦" }
  ];

  const categories = ["business", "entertainment", "health", "science", "technology", "sports"];

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const updateDate = () => setFormattedDate(new Date().toLocaleDateString('en-US', options));
    updateDate();
    const timer = setInterval(updateDate, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    onCountryChange(newCountry);
    navigate(location.pathname);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">News App</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {categories.map(cat => (
          <li key={cat}><Link to={`/${cat}`}>{cat}</Link></li>
        ))}
      </ul>

      <div className="navbar-date">
        <select value={country} onChange={handleCountryChange}>
          {countries.map(c => (
            <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
          ))}
        </select>

        <span className="date">{formattedDate}</span>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️ "}
        </button>
      </div>
    </nav>
  );
}
