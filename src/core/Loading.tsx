import { Spinner } from "react-bootstrap";

const Loading = ({loading} : any)=>{
    return (
        <div className={`loading ${loading ? "loading":"hidden"}`}>
            <Spinner animation="border" />
        </div>
    );
}

export default Loading;