import { useState, useEffect } from 'react';

const ChangingText = () => {
    const texts = ["Software Engineer", "Frontend Developer", "Backend Developer", "Mobile Application Developer",];
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentText = texts[index];

        const timeout = setTimeout(() => {
            if (isTyping) {
                if (charIndex < currentText.length) {
                    setCharIndex((prev) => prev + 1);
                } else {
                    setIsTyping(false);
                    setTimeout(() => { }, 1000);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsTyping(true);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, 150);

        return () => clearTimeout(timeout);
    }, [charIndex, isTyping, index, texts]);

    return <span className='text-text-color dark:text-text-color-dark border-r-[0.5rem] border-r-main-color pr-1'>{texts[index].slice(0, charIndex)}</span>;
};

export default ChangingText;
