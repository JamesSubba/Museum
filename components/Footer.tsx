import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black z-[100] sticky ease-in duration-300">
        <div className="w-full max-w-screen-xl z-10 mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl pt-3 pb-3">Let's Connect</h1>
            <div className="border-white w-32 border-2 my-3"></div>
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ul className="flex flex-wrap items-center text-sm font-medium text-white-500  dark:text-white-400">
                <li >
                    <div className="border-solid  border-white border-2 rounded-full w-64 h-10 flex  items-center justify-center ">
                     <a href="https://www.facebook.com" className="">Facebook</a>
                    </div>  
                </li>
                <li>
                <div className="border-solid  border-white border-2 rounded-full w-64 h-10 flex  items-center justify-center mx-8">
                     <a href="https://www.instagram.com" className="">Instagram</a>
                    </div>
                </li>
                <li>
                <div className="border-solid  border-white border-2 rounded-full w-64 h-10 flex  items-center justify-center  ">
                     <a href="https://www.youtube.com" className="">Youtube</a>
                    </div>
                </li>
            </ul>
        </div>
        
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Virtual Museum™</a>. All Rights Reserved.</span>
    </div>
    </footer>
  );
};

export default Footer;
