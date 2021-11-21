import {useContext } from "react";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";
import CartContext from "../context/cart/CartContext";

// Nutripage duplacated as profil perso
const HomeScreen = () => {
  const {filteredBySearchName} = useContext(CartContext)

  return (
    <div className='products__wrapper'>
      {filteredBySearchName.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
