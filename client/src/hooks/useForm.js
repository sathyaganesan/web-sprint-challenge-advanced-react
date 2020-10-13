// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialvalues) => {
    const [values, setValues] = useLocalStorage(key, initialvalues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(true);
  };

    return [values, handleChanges, handleSubmit];
}