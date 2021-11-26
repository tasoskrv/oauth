import { useState } from "react";

export type ErrorProps = {    
    e       : any,
    type    : string,
    message : string
}

const useFormErrors = ()=>{
    const [hasErrors, setHasErrors] = useState<string[]>([]);
    
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

    return {
        isValid,
        applyErrors,
        applyValidators
    };
};

export default useFormErrors;