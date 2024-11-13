import React from "react";
import { Head } from "@inertiajs/react";
import TextInput from "../../components/molecules/TextInput";
import Button from "../../components/atoms/Button";

export default function LoginOtpPage() {
    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
            <form
                action="/home"
                className="max-w-[500px] bg-white p-10 rounded-xl flex flex-col"
            >
                <Head title="Welcome" />
                <h1 className="underline text-center">Aplikasi Iuran Warga</h1>
                <p className="text-center">
                    Saling koneksi dan transparan antar warga
                </p>
                <div className="my-6">
                    <TextInput
                        name="otp"
                        label="Masukkan Kode OTP"
                        placeholder="Ketik kode OTP"
                    />
                </div>
                <Button label="Konfirmasi" />
            </form>
        </div>
    );
}
