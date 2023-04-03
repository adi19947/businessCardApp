import { useState } from "react";

export default function useAlert() {
    const [alert, setAlert] = useState(false);
    const handleAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false), 3000;
        })
    }
    return [handleAlert, alert]
}
