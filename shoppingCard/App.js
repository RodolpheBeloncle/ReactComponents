import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";

function App() {
  // profil perso One Page with it's component Nav/cart/homescreen
  // Nav = shop icon + number
  // Cart = shopping list with mapped CartItem
  // HomeScreen = Duplicated nutripaged with mapped productCard
  return (
    <div className='App'>
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;
