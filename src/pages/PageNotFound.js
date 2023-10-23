import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    let location = useLocation();
    
    return(
        <>
        <div>
            <h2>Sorry!</h2>
            <h3>404 Page {location.pathname} Not Found</h3>
        </div>
        </>
    )
};

export default PageNotFound;