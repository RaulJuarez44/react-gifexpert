import { useState } from "react";


    export const AddCategory = ({ onNewCategory }) => {
        
        const [InputValue, setInputValue] = useState('');
        
        const onInputChange = (event) => {
            setInputValue( event.target.value);
        }

        const onSubmit= (event) => {
            event.preventDefault();
            if( InputValue.trim().length <=1) return;
            
            //setcategories( categories => [InputValue, ...categories]);
            onNewCategory( InputValue.trim() )
            setInputValue('');
        }

        return (
            <form onSubmit={ onSubmit }>
                <input 
                type="text"
                placeholder="Buscar gifs"
                value={ InputValue }
                onChange={ (event ) => onInputChange(event) }
                />
            </form>
            
        )
    }