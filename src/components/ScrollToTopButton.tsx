import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [buttonStyle, setButtonStyle] = useState({});

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const adjustPosition = () => {
        const footer = document.querySelector("footer");
        if (footer) {
            const footerTop = footer.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (footerTop < viewportHeight) {
                setButtonStyle({ bottom: `${viewportHeight - footerTop + 20}px` });
            } else {
               
                setButtonStyle({ bottom: "20px" });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("scroll", adjustPosition);
        window.addEventListener("resize", adjustPosition);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("scroll", adjustPosition);
            window.removeEventListener("resize", adjustPosition);
        };
    }, []);

    return (
        <button
        onClick={scrollToTop}
        className={`fixed right-5 z-50 p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-700 transition-all ${
            isVisible ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
        style={buttonStyle}
        aria-label="Scroll to Top"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
            />
        </svg>
    </button>
    
    );
};

export default ScrollToTopButton;
