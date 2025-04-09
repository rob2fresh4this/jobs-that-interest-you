import React from "react";
import JobDetailsCard from "@/app/components/Card";

function Page() {

    // themes.ts

    const microsoftTheme = {
        bg: "bg-[#7cbb00]",
        text: "text-black",
        box: "bg-blue-50",
        button: "bg-blue-600",
        buttonHover: "hover:bg-blue-700",
    };

    const twitchTheme = {
        bg: "bg-[#9146ff]",
        text: "text-black",
        box: "bg-white",
        button: "bg-[#48237d]",
        buttonHover: "hover:bg-[#6531af]",
    };

    const riotGamesTheme = {
        bg: "bg-[#e60012]",
        text: "text-[#380F11]",
        box: "bg-[white]",
        button: "bg-[#a1000c]",
        buttonHover: "hover:bg-[#730009]",
    };

    const openAITTheme = {
        bg: "bg-[#acacac]", // Light gray background
        text: "text-gray-900", // Dark text for readability
        box: "bg-white", // White background for the inner box
        button: "bg-[#34b3a0]", // OpenAI greenish accent button color
        buttonHover: "hover:bg-[#2c8e7a]", // Darker green on hover
    };

    const nvidiaTheme = {
        bg: "bg-[#1a1a1a]", // Dark background to reflect NVIDIA's dark theme
        text: "text-white", // White text for contrast
        box: "bg-[#282828]", // Slightly lighter dark background for inner box
        button: "bg-[#76b900]", // NVIDIA's iconic green button color
        buttonHover: "hover:bg-[#66a300]", // Darker green on hover
    };

    const linkedinTheme = {
        bg: "bg-[#ffffff]", // White background to keep it clean and professional
        text: "text-black", // Black text for contrast and readability
        box: "bg-[#f1f2f5]", // Light gray background for the content box
        button: "bg-[#0073b1]", // LinkedIn's blue color for the button
        buttonHover: "hover:bg-[#005582]", // Darker blue for the button on hover
    };

    const vercelTheme = {
        bg: "bg-[#000000]",
        text: "text-black",
        box: "bg-[white]",
        button: "bg-[grey]",
        buttonHover: "hover:bg-[#313131]",
    };

    const slackTheme = {
        bg: "bg-[#4A154B]", // Slack's dark purple background
        text: "text-white", // White text for contrast
        box: "bg-[#36C5F0]", // Slack's signature blue for the content box
        button: "bg-[#522962]", // Dark purple button to match the background
        buttonHover: "hover:bg-[#2c0c38]", // Slightly darker purple for hover effect
    };

    const githubTheme = {
        bg: "bg-[#24292F]", // GitHub's dark background
        text: "text-white", // White text for contrast
        box: "bg-[#2c2f3d]", // Slightly lighter gray for the content box
        button: "bg-[#0366d6]", // GitHub's blue for the button
        buttonHover: "hover:bg-[#0256b2]", // Darker blue for the hover effect
    };

    const digitalOceanTheme = {
        bg: "bg-[#1d3557]", // DigitalOcean's dark blue background
        text: "text-white", // White text for contrast
        box: "bg-[#457b9d]", // A lighter blue for the content box
        button: "bg-[#2a9d8f]", // DigitalOcean's teal for the button
        buttonHover: "hover:bg-[#264653]", // Darker teal for the hover effect
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="text-2xl text-center md:text-4xl lg:text-5xl">
                Jobs that Interest Robert G
            </div>
            <div className="text-lg text-gray-500 text-center md:text-xl lg:text-2xl mt-4">
                Click on to view <span className="font-bold">document </span>
                <a
                    href="/Professional Development Job Research Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-blue-500"> copy of document</span>
                </a>
            </div>

            <div className="text-lg text-gray-500 text-center md:text-xl lg:text-2xl mt-2">
                Click to view my{" "}
                <a
                    href="/Resume Version 2.2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-blue-500">resume</span>
                </a>
            </div>


            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            <div className="flex flex-col items-center gap-6 p-6 w-full max-w-5xl">
                <JobDetailsCard
                    position="Software Engineer Intern"
                    company="Microsoft"
                    location="Redmond, WA"
                    salary="Competitive"
                    link="https://careers.microsoft.com/v2/global/en/students"
                    theme={microsoftTheme}  // Applying the Microsoft theme
                >
                    <h3 className="text-lg">Job Description:</h3>
                    <p>Contribute to C#/.NET projects, work on scalable systems, participate in Agile sprints.</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Requirements:</h3>
                    <p>Experience with C#, JavaScript</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Familiarity with Azure, Git, CI/CD</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Passion for learning and collaboration</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Why I'm Interested:</h3>
                    <p>Microsoft has a strong culture of mentorship, hybrid opportunities, and an emphasis on growth. As a C# developer, it aligns perfectly with my current training.</p>
                </JobDetailsCard>
                <JobDetailsCard
                    position="Frontend Engineer (React/TypeScript)"
                    company="Twitch"
                    location="San Francisco, CA"
                    salary="Competitive"
                    link="https://www.twitch.tv/jobs/en/"
                    theme={twitchTheme}  // Applying the Twitch theme
                >
                    <h3 className="text-lg">Job Description:</h3>
                    <p>Build user-facing features with React and TypeScript for Twitch's creator tools.</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Requirements:</h3>
                    <p>1+ year React/TypeScript</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Understanding of accessibility, performance optimization</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>GitHub and teamwork experience</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Why I'm Interested:</h3>
                    <p>Twitch is known for its tech-forward culture and creative platform. It’s a place I’d grow both technically and creatively.</p>
                </JobDetailsCard>
                <JobDetailsCard
                    position="Web Developer"
                    company="Riot Games"
                    location="Los Angeles, CA"
                    salary="Competitive"
                    link="https://www.riotgames.com/en/work-with-us/jobs"
                    theme={riotGamesTheme}  // Applying the Riot Games theme
                >
                    <h3 className="text-lg">Job Description:</h3>
                    <p>Collaborate on internal tools and dashboards for game teams using React.</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Requirements:</h3>
                    <p>React.js and strong JS/TS fundamentals</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Tailwind or CSS proficiency</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Bonus: familiarity with gaming culture</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Why I'm Interested:</h3>
                    <p>Combining my technical interests with gaming is a dream role. Riot supports creativity and innovation.</p>
                </JobDetailsCard>
                <JobDetailsCard
                    position="Frontend Engineer"
                    company="OpenAI"
                    location="San Francisco, CA"
                    salary="Competitive"
                    link="https://openai.com/careers"
                    theme={openAITTheme}  // Applying the OpenAI theme
                >
                    <h3 className="text-lg">Job Description:</h3>
                    <p>Build intuitive interfaces for AI tools using modern frontend stacks.</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Requirements:</h3>
                    <p>React, TypeScript</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Strong UX thinking</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Bonus: Next.js or Tailwind experience</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Why I'm Interested:</h3>
                    <p>OpenAI’s mission and the chance to build meaningful products at the edge of innovation is motivating.</p>
                </JobDetailsCard>
                <JobDetailsCard
                    position="Software Engineering Intern"
                    company="NVIDIA"
                    location="Santa Clara, CA"
                    salary="Competitive"
                    link="https://www.nvidia.com/en-us/about-nvidia/careers/"
                    theme={nvidiaTheme}  // Applying the NVIDIA theme
                >
                    <h3 className="text-lg">Job Description:</h3>
                    <p>Contribute to high-performance computing systems, AI research, or graphics technology. Collaborate with expert engineers on cutting-edge tech.</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Requirements:</h3>
                    <p>Solid foundation in programming (C++, Python, or JavaScript)</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Familiarity with machine learning, graphics, or system software is a plus</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <p>Strong problem-solving skills</p>
                    <div className="pt-0.5 pb-0.5"></div>
                    <h3 className="text-lg">Why I'm Interested:</h3>
                    <p>NVIDIA is at the forefront of innovation in AI, gaming, and GPUs. I admire their bold mission and would love to grow technically by working alongside the minds behind today’s most advanced tech.</p>
                </JobDetailsCard>
            </div>
        </div>

    );
}

export default Page;