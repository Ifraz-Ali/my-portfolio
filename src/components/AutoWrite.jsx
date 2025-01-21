import React from 'react'
import { useState, useEffect } from 'react';
const AutoWriteText = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const textArray = [
        "Computer Science Student",
        "Aspiring Front End Developer",
        "Passionate About Coding",
    ];

    const typingEffect = (text, i = 0) => {
        if (i <= text.length) {
            setDisplayedText(text.slice(0, i));
            setTimeout(() => typingEffect(text, i + 1), 100);
        } else {
            setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % textArray.length), 1000);
        }
    };
    useEffect(() => {
        typingEffect(textArray[index]);
    }, [index]);
    return (
        <div>{displayedText}</div>
    )
}

export default AutoWriteText;