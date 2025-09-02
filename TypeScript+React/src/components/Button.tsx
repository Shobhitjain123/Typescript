import React from "react";

interface MyButton {
    text: "Click Me" | "Click me Here";
    onClick?: () => void;
}

interface Book {
    name: string;
    type: "Fictional" | "Sci-fi";
}
const Button: React.FC<MyButton> = (props) => {
    const [value, setValue] = React.useState<Book>({
        name: "XYZ",
        type: "Fictional",
    });
    return (
        <div>
            <h2>{value.name}</h2>
            <h2>{value.type}</h2>
            <button onClick={() => setValue({ name: "ABC", type: "Sci-fi" })}>
                {props.text}
            </button>
        </div>
    );
};

export default Button;
