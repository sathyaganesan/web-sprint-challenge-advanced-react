// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = ([]) => {
    const [cart, setCart] = useLocalStorage("cartValue", []);

    const addToCart = (plant) => {
        setCart([...cart, plant]);
    };
    
    const removeFromCart = (plant) => {
        setCart(cart.filter((p) => p.id !== plant.id));
    };
    
    return [cart, addToCart, removeFromCart];
}