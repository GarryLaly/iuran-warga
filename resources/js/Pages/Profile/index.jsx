import React from "react";
import { toCurrency } from "../../utils/format";
import BottomMenu from "../../components/molecules/BottomMenu";
import Button from "../../components/atoms/Button";

export default function ProfilePage() {
    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col items-center">
            <div className="max-w-[480px] w-full bg-white py-4 px-6 min-h-screen flex flex-col">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-base font-bold">Pak Bagus</h1>
                        <div className="text-base font-bold">08123456789</div>
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
                    url="/login"
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
