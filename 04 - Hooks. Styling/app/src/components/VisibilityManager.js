import Counter from "./Counter";
import {useState} from "react";

const VisibilityManager = () => {
    const [isVisible, setIsVisible] = useState(false);

    console.log('Visibility rendered');

    return (
        <div>
            <button onClick={() => setIsVisible(true)}>Show</button>
            <button onClick={() => setIsVisible(false)}>Hide</button>
            {isVisible && <Counter/>}
        </div>
    );
};

export default VisibilityManager;