import React from "react";
import { Link } from "@inertiajs/react";

export default function BottomMenu({}) {
    return (
        <div className="bg-gray-100 fixed bottom-0 max-w-[480px] w-full flex flex-row justify-around p-4 underline">
            <Link href="/home">Beranda</Link>
            <Link href="/members">Daftar Warga</Link>
            <Link href="/payment">Bayar Iuran</Link>
            <Link href="/report">Laporan</Link>
            <Link href="/profile">Profil</Link>
        </div>
    );
}
