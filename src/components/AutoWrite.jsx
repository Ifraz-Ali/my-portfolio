import React, { useState, useEffect } from "react";

const AutoWriteText = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const textArray = [
        "Computer Science Student",
        "Aspiring Front-End Developer",
        "Passionate About Coding",
    ];

    useEffect(() => {
        const currentText = textArray[index];
        let typingSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && displayedText === currentText) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        } else {
            setTimeout(() => {
                setDisplayedText((prev) =>
                    isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
                );
            }, typingSpeed);
        }
    }, [displayedText, isDeleting, index]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="font-mono text-3xl">
            {displayedText}
            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </div>
    );
};

export default AutoWriteText;
