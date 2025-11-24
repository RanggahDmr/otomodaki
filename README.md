# 🔧 Otomodaki — Nearby Workshop Finder (Telegram Bot + Supabase + n8n)

Otomodaki adalah aplikasi bot Telegram yang membantu pengguna menemukan bengkel terdekat berdasarkan lokasi secara otomatis. Sistem memanfaatkan **Supabase** sebagai database, **n8n** sebagai workflow automation, dan integrasi **AI** untuk memberikan rekomendasi bengkel yang relevan. Cocok untuk pengguna umum dan juga pemilik bengkel yang ingin mengelola data mereka sendiri.



---


# 📸 Screenshots

<img width="1240" height="810" alt="otomodaki" src="https://github.com/user-attachments/assets/546c7e90-e12f-428b-b4a5-f1c6dc475884" />

---
**Live Demo (Landing Page):** https://otomodaki.vercel.app

---

# ✨ Fitur Utama

### 🛰️ Cari Bengkel Terdekat
- User kirim lokasi → sistem otomatis mendeteksi latitude & longitude.  
- Menampilkan daftar bengkel terdekat berdasarkan radius.  
- Menggunakan operasi geolokasi di Supabase.

### 🧭 Parsing Lokasi & Cek Detail Area
- Parsing data lokasi dari Telegram (lat/lon).  
- Menggunakan API publik untuk mengetahui nama jalan / area.  
- Akurasi lokasi lebih baik sebelum menampilkan rekomendasi.

### 🧠 Rekomendasi AI
- Jika bengkel tidak ditemukan → AI membantu mencarikan lokasi alternatif.  
- Pesan output lebih ramah & informatif.

### 🔧 Role Owner (Pemilik Bengkel)
- Pemilik bengkel bisa mendaftarkan toko/bengkel.  
- Update data bengkel melalui Telegram Bot.  
- Tersimpan otomatis di Supabase.

### 🗃 Database Terpusat (Supabase)
- Menyimpan data bengkel, owner, dan lokasi.  
- Auto Timestamp & Row Level Security sesuai kebutuhan.


### 📱 Responsive Landing Page
- Dibuat dengan Next.js  
- Menjelaskan fitur aplikasi  
- UI clean dan mobile-friendly

---

# 🧱 Tech Stack

- **Frontend:** Next.js + Tailwind CSS  
- **Backend:** Supabase  
- **Automation:** n8n Workflow  
- **Bot API:** Telegram Bot API  
- **AI:** OpenAI / Gemini  
- **Database:** Supabase PostgreSQL  

---

