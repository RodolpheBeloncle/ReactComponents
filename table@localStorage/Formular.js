import React from 'react';
import "./App"

 


const Formular = ({addNewProductLine,onChangeProductName,valueName,onChangeProductPrice,ValuePrice,}) => {
   // get localstorage data + components check state with useEffect

    return (
        
     
        <form onSubmit={addNewProductLine}>
        <h2>Ajouter nouvelle dépense</h2>
        <label htmlFor='name'>
          Intitulé
          <input
            id='name'
            className='field'
            name='name'
            type='text'
            required
            onChange={onChangeProductName}
            value={valueName}
          />
        </label>
        <br />
        <label htmlFor='price'>
          Coût (€)
          <input
            className='field'
            id='price'
            name='price'
            type='number'
            required
            value={ValuePrice}
            onChange={onChangeProductPrice}
          />
        </label>
        <br />
        <br />
        
        <button type='submit'>Ajouter</button>
      </form>
      
    );
   
};

export default Formular;