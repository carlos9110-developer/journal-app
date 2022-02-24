import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState<any>(initialState);

    const reset = (  newFormState = initialState  ) => {
        setValues( newFormState );
    }


    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        const  {target} = e; 
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}