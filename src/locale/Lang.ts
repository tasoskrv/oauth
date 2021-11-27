abstract class Lang {
    translations : any;

    loc(value : string):string {
        if(!value)
            return "";

        let vals      = value.split("."),
            parentKey = vals[0],
            childKey  = vals[1];

        if(parentKey && childKey){
            return this.translations[parentKey][childKey];
        }

        return "";
    }    
}

export default Lang;