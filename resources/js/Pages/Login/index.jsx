import React from "react";
import { Head } from "@inertiajs/react";
import Button from "../../components/atoms/Button";
import TextInput from "../../components/molecules/TextInput";

export default function LoginPage() {
    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
            <form
                action="/login/otp"
                method="get"
                className="max-w-[500px] bg-white p-10 rounded-xl flex flex-col"
            >
                <Head title="Welcome" />
                <h1 className="underline text-center">Aplikasi Iuran Warga</h1>
                <p className="text-center">
                    Saling koneksi dan transparan antar warga
                </p>
                <div className="my-6">
                    <TextInput
                        name="phone"
                        label="No. WhatsApp"
                        placeholder="Ketik nomor WA"
                    />
                </div>
                <Button label="Konfirmasi" />
            </form>
        </div>
    );
}
