
import './App.css';
import {Routes,Route} from "react-router-dom" ;
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import AddEditProduct from "./components/AddEditProduct";
import NotFound from './components/NotFound'
function App() {
  return (
    <div className="App">
      <NavBar />
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route  path="/products" element={<Products/>}/>
         <Route path="/productCard" element={<ProductCard/>}/>
         <Route path="/AddEditproduct" element={<AddEditProduct/>}/>
         <Route path='*' element={<NotFound/>} /> 
       </Routes>
    </div>
  );
}

export default App;
