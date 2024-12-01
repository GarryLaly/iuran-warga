import React from "react";
import Label from "../atoms/Label";

export default function TextInput({
    name,
    label,
    placeholder,
    required = false,
    value,
    onChange,
}) {
    return (
        <div className="flex flex-col">
            <Label name={name} label={label} />
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                className="rounded border px-4 py-2"
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
