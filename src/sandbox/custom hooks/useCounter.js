import { useState } from "react";


const useCounter = (initialValue = 0, step = 1) => {
    const [value, setValue] = useState(initialValue);

    const increment = () => setValue(e => e + step);
    const decrement = () => setValue(e => e - step);
    const reset = () => setValue(initialValue);

    return { value, increment, decrement, reset };
};

export default useCounter