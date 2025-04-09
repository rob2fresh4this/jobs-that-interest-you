import React from "react";

function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="text-3xl">Jobs that Interest Robert G</div>
            <div className="text-lg text-gray-500">Click on to view <span className="font-bold">document</span>  <span className="text-blue-500">copy of document</span></div>
            <div className="text-lg text-gray-500">Click to view my <span className="text-blue-500">resume</span></div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="mt-2 text-lg text-gray-700 flex flex-col p-4 bg-white shadow-md rounded-lg w-full max-w-md">
                <div className="flex flex-col items-center justify-between p-4 bg-gray-200 rounded-lg w-full">
                    <div className="flex flex-row justify-between w-full">
                        <div className="text-2xl">details</div>
                    </div>
                    <div className="flex flex-row justify-between w-full mt-1">
                        <div className="text-lg text-gray-500 w-[25%]">Nvidia</div>
                        <div className="text-lg text-gray-500 w-[39%] text-center">Santa Clara, CA</div>
                        <div className="text-lg text-gray-500 w-[25%] text-right">xxx,xxx</div>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                    <p>why i want to work for them. (culture, benefits, hybrid, location)</p>
                    <p>Does the job require the current stack that you know. Would you have learn new skills?</p>
                    <p>What goals would you like to achieve in the hypothetical position?</p>
                    <p>Do you currently have the skillsets for the job?</p>
                    <p>Stay tuned for more updates.</p>
                </div>
                <button className="mt-4 px-4 py-2 w-[30%] text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                    More Details
                </button>
            </div>

        </div>
    );
}

export default Page;