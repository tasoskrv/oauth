import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({loading} : any)=>{
    console.log('loading');
    return (
        <div className={`loading ${loading ? "loading":"hidden"}`}>
            <Spinner animation="border" />
        </div>
    );
}

export const LoadingMemo = React.memo(Loading);
// export default Loading;