import React from "react";
import { toCurrency } from "../../utils/format";
import BottomMenu from "../../components/molecules/BottomMenu";

export default function ReportPage() {
    const pembayaranTerakhir = [
        {
            nama: "Iuran Warga 1",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Beli Bendera",
            nominal: -100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 3",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 4",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Ongkos Siram Taman",
            nominal: -100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 6",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 7",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 8",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 9",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
        {
            nama: "Iuran Warga 10",
            nominal: 100000,
            tanggal: "12/12/2024",
        },
    ];

    return (
        <div className="bg-slate-300 h-screen w-full flex flex-col items-center">
            <div className="max-w-[480px] w-full bg-white py-4 px-6 min-h-screen flex flex-col">
                <div className="text-lg">Total Saldo</div>
                <div className="text-2xl font-bold">{toCurrency(90000)}</div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="text-lg font-bold">Laporan Keuangan</div>
                    <div className="text-sm">Semua Periode</div>
                </div>
                <div className="bg-gray-300 p-4 rounded-md flex flex-row justify-between gap-4 my-2">
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
