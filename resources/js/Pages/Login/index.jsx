import React from "react";
import { Head } from "@inertiajs/react";

export default function LoginPage() {
    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
            <form className="max-w-[500px] bg-white p-10 rounded-xl flex flex-col">
                <Head title="Welcome" />
                <h1 className="underline text-center">Aplikasi Iuran Warga</h1>
                <p className="text-center">
                    Saling koneksi dan transparan antar warga
                </p>
                <div className="my-6 flex flex-col">
                    <label className="text-sm mb-1" for="phone">
                        No. WhatsApp
                    </label>
                    <input
                        name="phone"
                        id="phone"
                        placeholder="Ketik nomor WA"
                        className="rounded border px-4 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-600 rounded px-6 text-white py-2 self-center"
                >
                    Masuk
                </button>
            </form>
        </div>
    );
}
