import { useState } from 'react';
export const useFormInput = () => {
    const [value, setValue] = useState('');
    const [valid, setValiity] = useState(false);

    const inputChangehandler = event => {
        setValue(event.target.value);
        if (event.target.value && event.target.value.trim() === '') {
            setValiity(false);
        }
        else {
            setValiity(true);
        }
    }

    return { value: value, onChange: inputChangehandler, valid: valid };
}
