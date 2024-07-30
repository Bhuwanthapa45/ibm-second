import { useState } from "react";

function Course({ image, title, desc, link }) {
    const [full, setFull] = useState(false);

    const handleClick = () => {
        setFull(prevState => !prevState);
        console.log(link);  // Remove this in production
    };

    return (
        <div className="h-96 w-[40%] md:w-[30%] flex flex-col gap-5 rounded-lg bg-slate-300">
            {!full && (
                <img
                    src={image}
                    alt={title}
                    className="h-[55%] w-full rounded-lg"
                    onError={(e) => { e.target.src = "fallback-image-url"; }}
                />
            )}
            <div className="m-3">
                <h2 className="text-lg font-semibold mb-3">{title}</h2>
                <p
                    style={full ? { height: "auto" } : { height: "25px" }}
                    className="text-gray-500 overflow-hidden"
                >
                    {desc}
                </p>
                <button
                    className="hover:text-gray-500"
                    onClick={handleClick}
                >
                    {full ? <p>less</p> : <p>more...</p>}
                </button>
                {full && (
                    <button className="mt-5 h-10 w-full bg-red-400 rounded-lg hover:bg-red-500 hover:text-white">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Go to the Course
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Course;
