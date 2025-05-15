
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;




// import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;



