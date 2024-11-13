import React from "react";
import { Link } from "@inertiajs/react";

export default function Button({
    label,
    url,
    bgColor = "bg-green-600",
    type = "submit",
}) {
    return url ? (
        <Link
            href={url}
            type={type}
            className={`${bgColor} rounded px-6 text-white py-2 self-center`}
        >
            {label}
        </Link>
    ) : (
        <button
            type={type}
            className={`${bgColor} rounded px-6 text-white py-2 self-center`}
        >
            {label}
        </button>
    );
}
