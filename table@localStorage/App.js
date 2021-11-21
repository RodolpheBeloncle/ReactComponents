import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TotalCommand from './TotalCommand';
import Formular from './Formular';
import App2 from './App2';



function App() {
 
   
 // get localstorage data + components check state with useEffect
    // get localstorage data + components check state with useEffect
    const getLocalStorage = () => {

      let allStoredProducts = localStorage.getItem("productList")
      
     
      if (allStoredProducts){
       
        return (allStoredProducts = JSON.parse(localStorage.getItem("productList")))
       
      }else{
        return [];
      }
    }     
      



  // ====================================================
     
   const handleProductQuantityChange = (id, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (quantity === 0) {
      if (window.confirm('Etes vous sûr de vouloir supprimer cet item ?')) {
        // function for app
        setProductList((prevList) => prevList.filter((p) => p.id !== id))
        // function for localstorage
        localStorage.setItem("productList",JSON.stringify(productList.filter((p) => p.id !== id)))
      }
      
    } else {
      setProductList((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, quantity } : product
        )

      );
      localStorage.setItem("productList",JSON.stringify(productList.map((product) => product.id === id ? { ...product, quantity } : product)))
      
    }
  };

  const handleOnChangeCheckBox = (id,newState) => {
      const state = JSON.parse(!newState)
      console.log(state)
    
      if (state === false){
        
        setProductList((prevState)=> 
          prevState.map((product)=> 
            product.id === id ? { ...product, state:true} : product  
          )

        );
      
        localStorage.setItem("productList",JSON.stringify(productList.map((product) => product.id === id ? { ...product, state:true} : product)))

      }else if (state === true){
        setProductList((prevState)=> 
        prevState.map((product)=> 
          product.id === id ? { ...product, state:false} : product  
        )

      );
    
      localStorage.setItem("productList",JSON.stringify(productList.map((product) => product.id === id ? { ...product, state:false} : product)))



      }
      console.log("newState",productList)
      
   

  }
  
  // Hooks state
  const [productList, setProductList] = useState(getLocalStorage());
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState(0);
 

  // functions change state
  const cartTotal = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  const handleNewProductNameChange = (event) => {
    setNewProductName(event.target.value);
  };

  const handleNewProductPriceChange = (event) => {
    setNewProductPrice(event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    setProductList((prevList) => [
      ...prevList,
      {
        id: uuidv4(),
        name: newProductName,
        price: parseFloat(newProductPrice),
        quantity: 1,
        state: false
      },
    ]);

    // record products in local storage
    localStorage.setItem("productList",JSON.stringify(productList.concat([
    {
      id: uuidv4(),
      name: newProductName,
      price: parseFloat(newProductPrice),
      quantity: 1,
      state: false
    },
  ])))

    setNewProductName("");
    setNewProductPrice(0);
  };

  
  

  return (
    <>
    {/* Table 1 */}
    <div className='App'>
      <h1>Laurence</h1>
      <table>
        <thead>
          <tr>
            <th>Date / Intitulé</th>
            <th>Coût</th>
            <th>Nombre Factures</th>
            <th>Coût Total</th>
            <th>Payé ?</th>
          </tr>
        </thead>
        <tbody>
    {productList.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price} €</td>
          <td>
            <input
              type='number'
              min='0'
              value={product.quantity}
              onChange={(event) =>
              handleProductQuantityChange(
                  product.id,
                  event.target.value
                )
              }
            />
          </td>
          <td>{product.price * product.quantity} €</td>
          <td>
          <input
            type="checkbox"
            checked={product.state}
            onChange={(event) => 
              handleOnChangeCheckBox(
              product.id,
              event.target.checked
           
            )
            }
            />
          </td>
        </tr>
      );
    })}

  </tbody>
      </table>
        <TotalCommand cartTotal={cartTotal}/>
    <Formular
    addNewProductLine={handleAddProduct}
    onChangeProductName={handleNewProductNameChange}
    valueName={newProductName}
    onChangeProductPrice={handleNewProductPriceChange}
    ValuePrice={newProductPrice}
    />

    </div>
    <App2/>
   
    </>
   

    

    
  );
  
}

export default App;

