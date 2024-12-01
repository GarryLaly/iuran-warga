import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Button from "../../components/atoms/Button";
import TextInput from "../../components/molecules/TextInput";
import Layout from "../Layout";

export default function LoginPage() {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/login", { phone });
    };

    return (
        <Layout>
            <div className="bg-slate-300 h-screen w-full flex flex-col justify-center items-center">
                <form
                    action="/login"
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
                            name="phone"
                            label="No. WhatsApp"
                            placeholder="Ketik nomor WA"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <Button label="Konfirmasi" />
                </form>
            </div>
        </Layout>
    );
}
