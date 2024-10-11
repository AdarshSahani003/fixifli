import React, { useState, useEffect } from 'react';

const NotificationBar = ({ message }) => {
    const [visible, setVisible] = useState(false); // Manage visibility state

    // Effect to handle showing the notification
    useEffect(() => {
        if (message) {
            setVisible(true); // Show notification when there's a message
            const timer = setTimeout(() => {
                setVisible(false); // Hide notification after 3 seconds
            }, 3000);
            return () => clearTimeout(timer); // Clean up timer on unmount
        } else {
            setVisible(false); // Hide notification if no message
        }
    }, [message]);

    const handleClose = () => {
        setVisible(false); // Close notification when button is clicked
    };

    // Do not render if not visible
    if (!visible) return null;

    return (
        <div
            id="toast-default"
            className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 flex items-center w-full max-w-xs p-4 text-gray-700 bg-sky-500 rounded-lg shadow-lg z-50"
            role="alert"
        >
            <div className="ms-3 text-sm font-normal text-white">{message}</div>
            <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-sky-600 text-white hover:text-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-sky-700 inline-flex items-center justify-center h-8 w-8"
                onClick={handleClose} // Attach close handler
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
        </div>
    );
};

export default NotificationBar;
