import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Clock() {
    const [date, setDate] = useState(new Date());
    const { language } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval); 
    }, []);

    const getCurrentTimeMessage = () => {
        switch (language) {
            case "it": 
                return "Ora attuale";
            case "es":
                return "Hora actual";
            case "fr":
                return "Heure actuelle";
            case "en":
            default:
                return "Current time";
        }
    };

    return (
        <div>
            <h2>{getCurrentTimeMessage()}: {date.toLocaleTimeString()}</h2>
        </div>
    );
}
