Main features:
- Login (pake no HP dan OTP dikirim ke WA)
- Home (menu-menu utama, pengumuman, banner promosi)
- List Tagihan Iuran (Yang belum dibayar)
- List Rekap Iuran (Lunas/Belum Lunas)
- Bayar Iuran (Pilih periode bulan apa aja, Munculin QR)
- Lihat Saldo dari Bendahara
- Lihat Pengeluaran dan Pemasukan (agar lebih transparan)
- Profile (Nama, Nomor HP, Alamat Rumah)

Flow Login:
1. Request OTP pakai nomor HP
  - generate OTP (6 digit)
  - simpan ke table otps
  - update otp ke field `password` encrypted di table users
  - kirim OTP ke WA
2. Verifikasi OTP di web aplikasi
  - cek OTP di table otps, apakah OTP nya valid/sama
  - cek apakah status OTP `new` atau `used`
  - cek apakah OTP expired
  - cek table users dengan `phone` dan `password`
  - update status OTP menjadi `used`
  - return response berhasil

Flow Bayar Tagihan:
1. Pilih tagihan jenis iuran apa yang mau dibayar
2. Pilih periode bulan apa aja yang mau dibayar
3. Klik Bayar dan Munculin QR dengan total nominal sesuai periode yang dipilih

Example Data:
bills,
[
  {
    id: 1,
    wallet_id: 1,
    name: "Iuran Bulanan 2024",
    amount: 10000,
    status: "active",
    period: 12,
    start_at: "2024-01-01",
    end_at: "2024-12-31"
  },
  {
    id: 2,
    wallet_id: 1,
    name: "Iuran 17an 2024",
    amount: 5000,
    status: "active",
    period: 1,
    start_at: "2024-08-01",
    end_at: "2024-08-31"
  }
]

Apakah perlu menyimpan 1 tagihan per periode atau simpan semua periode yang dibayar?

bill_users,
[
  {
    id: 1,
    bill_id: 1,
    bill_name: "Iuran Bulanan 2024",
    bill_amount: 10000,
    user_id: 1,
    payment_id: 1,
    status: "paid",
    period: 8,
    start_at: "2024-08-01",
    end_at: "2024-08-31"
  },
  {
    id: 2,
    bill_id: 1,
    bill_name: "Iuran Bulanan 2024",
    bill_amount: 10000,
    user_id: 1,
    payment_id: 1,
    status: "paid",
    period: 9,
    start_at: "2024-09-01",
    end_at: "2024-09-30"
  },
]
-----
payments,
[
  {
    id: 1,
    user_id: 1,
    qr: "https://qr.com/123",
    total_amount: 20000,
    status: "paid",
    notes: "Iuran Bulanan 2024 period 8,9",
    requested_at: "2024-11-09 08:50:00",
    paid_at: "2024-11-09 08:57:00",
    expired_at: "2024-11-10 09:00:00"
  },
  {
    id: 2,
    bill_id: 1,
    bill_name: "Iuran Bulanan 2024",
    bill_amount: 10000,
    user_id: 1,
    payment_id: 1,
    status: "paid",
    period: 9,
    start_at: "2024-09-01",
    end_at: "2024-09-30"
  },
]

Tech stack:
- Laravel 11 (PHP Framework) = Core & Logic System (Back-end)
- MySQL = Database
- InertiaJS + ReactJS = Front-end
- TailwindCSS = Styling CSS

Actions:
- [x] Schema Database
- [ ] Prototype UI
- [ ] Slicing UI
- [ ] Integration Database
- [ ] Testing