interface ButtonProps {
    text: string;
    color: string; 
}

function Button({ text, color }: ButtonProps) {
    const bgColorClass = color === "green" ? "bg-[#008734] hover:bg-[#01732D]" : "bg-[#545F65] hover:bg-[#444D52]"; 

    return (
        <button className={`font-bold rounded-xl py-[6px] px-[12px] ${bgColorClass}`}>
            {text}
        </button>
    );
}


export default Button;
