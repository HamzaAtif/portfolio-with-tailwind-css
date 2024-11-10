import Image from "next/image"; // Import Image component from Next.js for optimized images.
import Link from "next/link"; // Import Link to create links that won't reload the page.

const Footer = () => {
    return (
        <div className="bg-blue-50"> {/* Apply a light blue background */}
            <footer className="text-gray-600 body-font"> {/* Set text to gray */}
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    {/* This is a container that has padding (px and py) and uses flexbox layout */}

                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        {/* This is a clickable link with text and an image */}
                        <Image
                            src="data:image/jpeg;base64,..."
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-[50px]" // Make the image width 50px
                        />
                        <span className="ml-3 text-xl">Hamza Atif</span> {/* Display text beside the logo */}
                    </a>

                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        {/* Small text with some margin and border */}
                        Hamza Atif
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* Create a link to YouTube */}
                        <Link target="_blank" href="https://www.youtube.com/@itmatepakistan" className="text-gray-500">
                            {/* Link text */}
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
