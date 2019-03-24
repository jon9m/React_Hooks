    useState
    -------------------------------------------------------------
    const [stateName, updateStateFn] = useState('initialState')

    useEffect
    -------------------------------------------------------------
    useEffect(() => {
      //Async 
      //update state after async completion
    }, [ArrayOfStateValues]);

    useContext
    -------------------------------------------------------------
      //Use Context API in functional components to set the state and use 'useContext' to access the state in other functional components

    useReducer hook
    -------------------------------------------------------------
    const [stateReturned, dispatch] = useReducer(reducerFunction, initialState); 
    Eg: 
      const [todoList, dispatch] = useReducer((state, action) =>{
        switch(action.type){
          case 'ADD':
            return state.concat(action.payload);
          'dafault':
            return state;
        }	
      }), []); 

    useRef hook
    -------------------------------------------------------------

    useMemo hook
    -------------------------------------------------------------
    For Optimization - memoization

    {useMemo(()=><List items{todoLits} onLcikc={toDoRemoveHandler}/>, [todoList])}
      will not re-render unless input to the List component changes - defined in the array

    Creating Custom Hooks
    -------------------------------------------------------------
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

    Usage	
      const inputState = useState('');
      <input type="text" placeholder="Todo" 
        onChange={todoInput.onChange} 
        value={todoInput.value} 
        style={{ backgroundColor: todoInput.valid ? 'lightgreen' : 'pink' }} />
