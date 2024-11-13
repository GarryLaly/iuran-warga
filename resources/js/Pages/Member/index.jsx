import React from "react";
import { toCurrency } from "../../utils/format";
import BottomMenu from "../../components/molecules/BottomMenu";

export default function MemberPage() {
    const members = [
        {
            nama: "Warga 1",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 2",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 3",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 4",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 5",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 6",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 7",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 8",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 9",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
        {
            nama: "Warga 10",
            hp: "081234567890",
            alamat: "Blok C1 No. 1",
        },
    ];

    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col items-center">
            <div className="max-w-[480px] w-full bg-white py-4 px-6 min-h-screen flex flex-col">
                <div className="text-lg font-bold mt-4 mb-2">Daftar Warga</div>
                <div className="flex flex-col gap-2">
                    {members.map((item, index) => (
                        <div className="flex flex-row justify-between border-b pb-2">
                            <div>
                                <div className="text-base font-bold">
                                    {item.nama}
                                </div>
                                <div>{item.hp}</div>
                            </div>
                            <div>
                                <div className="text-xs">{item.alamat}</div>
                            </div>
                        </div>
                    ))}
                    <div className="h-[50px]" />
                </div>
            </div>
            <BottomMenu />
        </div>
    );
}
