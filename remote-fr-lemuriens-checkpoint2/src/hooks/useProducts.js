import { useContext } from 'react';
import { GamesContext } from '../context/GamesContext';

export const useProducts = () => {
   
    const ctx = useContext(GamesContext)

    return {
        ...ctx
    }
}