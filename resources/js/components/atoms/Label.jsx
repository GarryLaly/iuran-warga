import React from "react";

export default function Label({ name, label }) {
    return (
        <label className="text-sm mb-1" htmlFor={name}>
            {label}
        </label>
    );
}
