import React from "react";
import { toCurrency } from "../../utils/format";
import BottomMenu from "../../components/molecules/BottomMenu";
import { usePage } from "@inertiajs/react";

export default function HomePage() {
    const { user } = usePage().props;
    const pembayaranTerakhir = [
        {
            nama: "Warga 1",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 2",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 3",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 4",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 5",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 6",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 7",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 8",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 9",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Warga 10",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
    ];

    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col items-center">
            <div className="max-w-[480px] w-full bg-white py-4 px-6 min-h-screen flex flex-col">
                <h1 className="text-lg font-bold">
                    Malam Pak {user?.fullname}
                </h1>
                <div className="bg-gray-300 my-2 text-sm p-2 rounded-md">
                    Pengumuman perayaan Agustus
                </div>
                <div className="flex flex-col gap-4 bg-gray-300 p-4 rounded-md">
                    <div>
                        <div className="text-sm">Total Saldo</div>
                        <div className="text-lg font-bold">
                            {toCurrency(90000)}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                        <div>
                            <div className="text-sm">Total Pemasukan</div>
                            <div className="text-lg font-bold">
                                {toCurrency(100000)}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm">Total Pengeluaran</div>
                            <div className="text-lg font-bold">
                                {toCurrency(10000)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-lg font-bold mt-4 mb-2">
                    Pembayaran Terakhir
                </div>
                <div className="flex flex-col gap-2">
                    {pembayaranTerakhir.map((item, index) => (
                        <div className="flex flex-row justify-between border-b pb-2">
                            <div>
                                <div className="text-base font-bold">
                                    {item.nama}
                                </div>
                                <div>{toCurrency(item.nominal)}</div>
                            </div>
                            <div>
                                <div className="text-xs text-right">
                                    Tanggal
                                </div>
                                <div>{item.tanggal}</div>
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
