// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import { Routes, Route } from "react-router-dom";  
import Home from "./landingpage";
import Categories from "./categori";
import Product from "./products";
import Shopping from "./shopping";
import Contact from "./contact";
import Navbar from "./navbar"; 
import Footer from "./footer";
import Emailsignup from "./emailsignup";
function HomePage() {
  return (
    <>
      <Home />
      <Categories />
      <Product />
      <Emailsignup/>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path="/" element={<Footer />} />  */}
        <Route path="/categories" element={<Categories />} /> 
        <Route path="/product" element={<Product />} />
        <Route path="/Shopping" element={<Shopping />} /> 
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;




// export default nav;

// const genre=()=>{
//   const gener="Romantic";
//   return gener;
// }

// const App=()=>{
//   // const name="Disney Land";
//   // const  rating=" 5.5";
//   // const summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem rem laboriosam fugiat, exercitationem voluptates ab dicta, labore quisquam cum aut maxime, esse sed quos! Suscipit eius veritatis vero rem."

//   return(
//     <Netflix></Netflix>
//   );
// }
// export const App=()=>{
//    h1=React.createElement("h1",null,"welcome hi bhumika sethi");
//   return h1;
// }
// //React.createElement("h1",null,"welcome bhumika sethi");
// console.log(h1);