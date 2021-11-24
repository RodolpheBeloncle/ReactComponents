
import {Link} from "react-router-dom"
import { useCart } from '../hooks/useCart'

const Header = ({name}) => {
    const {cartItems} = useCart();
  
    return (
        <>
        <div>
            Welcome to {name}


            
            
        </div>

        <ul>
            <li>
            <Link to='/Cart'> Favorite list ({cartItems.length})</Link>

            </li>
            <li>
            <Link to={"/Games"}><h1 className="text-4xl">Store Games</h1></Link> 

            </li>
        
        </ul>
        
        </>
    );
};



export default Header;