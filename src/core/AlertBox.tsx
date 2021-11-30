import { Alert } from "react-bootstrap";

const AlertBox = ({message} : any)=>{    
    return (
        <Alert variant="danger" className="error-message">
            {message}
        </Alert>
    );    
}

export default AlertBox;