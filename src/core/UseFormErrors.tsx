export type ErrorProps = {    
    e            : any,    
    hasErrors    : string[],
    setHasErrors : any,
    type         : string,
    message      : string
}


const useFormErrors = (er:ErrorProps)=>{
    const setError = ()=>{        
        const value = er.e?.currentTarget?.value,
            index = er.hasErrors.indexOf(er.type);

        if(!value){
            if(index === -1)
                er.setHasErrors([...er.hasErrors, er.type]);
        } else {
            er.setHasErrors([...er.hasErrors.slice(0, index), ...er.hasErrors.slice(index + 1)]);
        }        
    }

    const isValid = ()=>{
        if(er.hasErrors.length>0){
           return false;
        }
        return true;
    };

    return {
        isValid,
        setError
    };


};

export default useFormErrors;