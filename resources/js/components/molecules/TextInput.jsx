import React from "react";
import Label from "../atoms/Label";

export default function TextInput({ name, label, placeholder }) {
    return (
        <div className="flex flex-col">
            <Label name={name} label={label} />
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                className="rounded border px-4 py-2"
            />
        </div>
    );
}
