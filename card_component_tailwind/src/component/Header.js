
import {Link} from "react-router-dom"
import { useCart } from '../hooks/useCart'

const Header = ({name}) => {
    const {cartItems} = useCart();
  
    return (
        <>
        <div className="text-center text-gray-800 text-2xl font-bold pt-6">
            Welcome to {name}


            
            
        </div>

        <nav className="hidden md:flex items-center space-x-1">

            <ul className="hidden md:flex items-center space-x-1">

            <li className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
            <Link to='/Cart'> Favorite list ({cartItems.length})</Link>

            </li>
            <li>
            <Link to={"/Games"}><h1 className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Stored Games</h1></Link> 

            </li>
            </ul>
        </nav>
        
        </>
    );
};



export default Header;