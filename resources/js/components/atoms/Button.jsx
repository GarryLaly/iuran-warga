import React from "react";

export default function Button({ label, type = "submit" }) {
    return (
        <button
            type={type}
            className="bg-green-600 rounded px-6 text-white py-2 self-center"
        >
            {label}
        </button>
    );
}
