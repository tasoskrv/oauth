import { Alert } from "react-bootstrap";

const MessageBox = ({message, type} : any)=>{    
debugger;
    let toast : any = null;

    if(type === "success"){
        toast =
            <Alert variant="success" className="messagebox">
                {message}
            </Alert>;
    } else if(type === "error"){
        toast =
            <Alert variant="danger" className="messagebox">
                {message}
            </Alert>;        
    }

    return toast;    
}

export default MessageBox;