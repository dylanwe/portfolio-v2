import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg p-4 my-12 flex flex-row items-center">
            <div className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0 flex items-center justify-center">
            <StaticImage
                className="bio-avatar h-auto w-full"
                layout="fixed"
                objectFit="cover"
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic.jpg"
                width={70}
                height={70}
                quality={95}
                objectPosition="50% 50%"
                placeholder="blurred"
                imgClassName="rounded-full border-2 border-gray-200 dark:border-gray-600"
                alt="Profile picture"
            />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-medium dark:text-white">Dylan Weijgertze</h3>
                <p className="text-gray-600 dark:text-gray-300">A Software Engineer student with a passion for solving problems with code. Check me out on <a href="https://www.linkedin.com/in/dylan-weijgertze/" target="_blank" rel="noreferrer" className="underline font-medium dark:text-gray-50">LinkedIn</a> or have a look at my code on <a href="https://github.com/dylanwe" target="_blank" rel="noreferrer" className="underline font-medium dark:text-gray-50">Github</a>.</p>
            </div>
        </div>
    );
};

export default Bio;