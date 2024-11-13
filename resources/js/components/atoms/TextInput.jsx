import React from "react";

export default function TextInput({ name, label, placeholder }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm mb-1" for={name}>
                {label}
            </label>
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                className="rounded border px-4 py-2"
            />
        </div>
    );
}
