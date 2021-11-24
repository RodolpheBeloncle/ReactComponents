import Header from "./component/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GameList from "./component/store/GameList";
import "tailwindcss/tailwind.css"
import CartShopGame from "./component/cart/CartShopGame"



function App() {
  return (
  
      
        <>
       
       <Router>
       <Header name={"Your GameShop Rodolphe"}/>
       
      
        <Routes>
        {/* <Route exact path="/" component={<Home/>}/> */}
        <Route path="/Games" element={<GameList/>}/>
        <Route path="/Cart" element={<CartShopGame/>}/>
         

        </Routes>

       </Router>
      </>
    
  );
}

export default App;
