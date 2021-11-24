
import { useContext } from 'react';
import { CartGameContext } from '../context/CardGameContext';

export const useCart = () => {
   
    const ctx = useContext(CartGameContext)

    return {
        ...ctx
    }
}