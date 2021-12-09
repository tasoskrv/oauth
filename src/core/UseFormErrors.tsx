import { useState } from "react";

export type ErrorProps = {    
    e    : any,
    type : string
}

const useFormErrors = (fields:any)=>{
    const [hasErrors, setHasErrors] = useState<string[]>(fields);
    
    const applyErrors = (er:ErrorProps)=>{        
        const value = er.e?.currentTarget?.value,              
              index = hasErrors.indexOf(er.type);

        if(!value){
            if(index === -1)
                setHasErrors([...hasErrors, er.type]);
        } else {
            setHasErrors([...hasErrors.slice(0, index), ...hasErrors.slice(index + 1)]);
        }
    }

    const isValid = ()=>{
        if(hasErrors.length>0){
           return false;
        }
        return true;
    };

    const applyValidators = (validators:string[])=>{
        setHasErrors(validators);
    }

    const emailValidation = (value:string)=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regex.test(value) === false){
            return false;
        }
        return true;
    }

    return {
        isValid,
        applyErrors,
        applyValidators,
        emailValidation
    };
};

export default useFormErrors;