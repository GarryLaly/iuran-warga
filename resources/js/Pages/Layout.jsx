import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Layout({ children }) {
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            if (flash.type === "error") {
                toast.error(flash.message);
            } else {
                toast.success(flash.message);
            }
        }
    }, [flash]);

    return (
        <>
            <Head title="Iuran Warga" />
            <div>
                <Toaster />
            </div>
            {children}
        </>
    );
}
