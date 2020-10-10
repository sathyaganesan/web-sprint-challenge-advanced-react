// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialvalue) => {
    const [values, setValues] = useLocalStorage("contactFormHook", initialvalue);
   
    return [values, setValues];
}