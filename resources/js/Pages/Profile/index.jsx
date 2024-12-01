import React from "react";
import { toCurrency } from "../../utils/format";
import BottomMenu from "../../components/molecules/BottomMenu";
import Button from "../../components/atoms/Button";
import { router, usePage } from "@inertiajs/react";

export default function ProfilePage() {
    const { user } = usePage().props;

    const handleLogout = () => {
        router.post("/logout");
    };

    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col items-center">
            <div className="max-w-[480px] w-full bg-white py-4 px-6 min-h-screen flex flex-col">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-base font-bold">
                            Pak {user?.fullname}
                        </h1>
                        <div className="text-base font-bold">{user?.phone}</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold">Alamat</div>
                        <div className="text-base">Jalan Raya Indonesia</div>
                    </div>
                    <div>
                        <div className="text-sm font-bold">
                            Emergency Contact
                        </div>
                        <div className="text-base">081987654321</div>
                    </div>
                </div>
                <Button
                    onClick={handleLogout}
                    type="button"
                    className="mt-8"
                    bgColor="bg-black"
                    label="Keluar"
                />
            </div>
            <BottomMenu />
        </div>
    );
}
