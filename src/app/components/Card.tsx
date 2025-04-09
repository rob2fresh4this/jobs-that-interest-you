import React from "react";

interface JobDetailsCardProps {
    position: string;
    company: string;
    location: string;
    salary: string;
    link: string;  // Add the link prop
    theme?: {
        bg?: string;
        text?: string;
        box?: string;
        button?: string;
        buttonHover?: string;
    };
    children?: React.ReactNode;
}

const JobDetailsCard: React.FC<JobDetailsCardProps> = ({
    position,
    company,
    location,
    salary,
    link,  // Destructure the link prop
    theme = {
        bg: "bg-white",
        text: "text-gray-700",
        box: "bg-gray-200",
        button: "bg-blue-500",
        buttonHover: "hover:bg-blue-600",
    },
    children,
}) => {
    return (
        <div className={`mt-2 text-lg ${theme.text} flex flex-col p-4 ${theme.bg} shadow-md rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl`}>
            <div className={`flex flex-col items-center justify-between p-4 ${theme.box} rounded-lg w-full`}>
                <div className="flex flex-row justify-between w-full">
                    <div className="text-2xl sm:text-3xl md:text-4xl">{position}</div> {/* Adjusted text size for responsiveness */}
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full mt-1">
                    <div className={`text-lg ${theme.text} w-[25%] md:w-[100%]`}>{company}</div> {/* Adjusted widths for responsiveness */}
                    <div className={`text-lg ${theme.text} w-[39%] md:w-fit md:text-center`}>{location}</div>
                    <div className={`text-lg ${theme.text} w-[25%] md:w-[100%] md:text-right`}>{salary}</div>
                </div>
            </div>
            <div className={`mt-4 text-sm ${theme.text} flex flex-col p-4 ${theme.box} rounded-lg w-full`}>
                {children}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className={`mt-4 px-4 py-2 w-[30%] sm:w-[40%] md:w-[30%] text-sm ${theme.button} text-white rounded-lg ${theme.buttonHover} transition duration-200`}>
                    More Details
                </button>
            </a>
        </div>

    );
};

export default JobDetailsCard;
