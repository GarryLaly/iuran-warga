import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import TextInput from "../../components/molecules/TextInput";
import Button from "../../components/atoms/Button";
import Layout from "../Layout";

export default function LoginOtpPage() {
    const { phone } = usePage().props;
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/login/otp", { phone, otp });
    };

    return (
        <Layout>
            <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
                <form
                    action="/login/otp"
                    method="post"
                    onSubmit={handleSubmit}
                    className="max-w-[500px] bg-white p-10 rounded-xl flex flex-col"
                >
                    <Head title="Welcome" />
                    <h1 className="underline text-center">
                        Aplikasi Iuran Warga
                    </h1>
                    <p className="text-center">
                        Saling koneksi dan transparan antar warga
                    </p>
                    <div className="my-6">
                        <TextInput
                            name="otp"
                            label="Masukkan Kode OTP"
                            placeholder="Ketik kode OTP"
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                    <Button label="Konfirmasi" />
                </form>
            </div>
        </Layout>
    );
}
