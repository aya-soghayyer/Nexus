import  { useState, useEffect } from 'react';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : false;
    });

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [darkMode]);

    return (
        <button onClick={toggleTheme}>
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default DarkMode;
