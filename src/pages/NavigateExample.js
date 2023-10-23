import { useNavigate } from "react-router-dom";

const NavigateExample = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
        <h1>This is the NavigateExample Page</h1>
        <button onClick={handleClick}>Click to Navigate</button>
        </>
    );
}

export default NavigateExample;