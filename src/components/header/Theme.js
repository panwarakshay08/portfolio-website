import React, { useState } from "react";

const ThemeToggler = () => {
    const [theme, setTheme] = useState("light");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle Theme</button>
            <p>Current theme: {theme}</p>
        </div>
    );
};

export default ThemeToggler;