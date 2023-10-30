interface ButtonProps {
    text: string;
    link: string;
    color: string;
    children?: React.ReactNode; // Add children property to ButtonProps interface
}

function Button({ text, color, link, children }: ButtonProps) {
    const bgColorClass = color === "green" ? "bg-[#008734] hover:bg-[#01732D]" : "bg-[#545F65] hover:bg-[#444D52]";

    return (
        <a href={link} className={`font-bold rounded-xl py-[6px] px-[12px] ${bgColorClass}`}>
            {text}
            {children}
        </a>
    );
}


export default Button;
