# TemanTukang

Platform booking tukang profesional di Indonesia. Temukan dan pesan jasa tukang terpercaya untuk kebutuhan rumah Anda.

## About

TemanTukang adalah platform yang menghubungkan pengguna dengan tukang profesional untuk berbagai kebutuhan perbaikan dan renovasi rumah. Proyek ini merupakan tugas untuk mata kuliah **Pengelolaan Produk Digital (PPD)** di Fakultas Ilmu Komputer, Universitas Indonesia.

## Tech Stack

- **React 18** dengan TypeScript
- **Vite** (dengan SWC plugin) untuk build tooling
- **Tailwind CSS v4** untuk styling
- **Radix UI** primitives untuk komponen yang aksesibel

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.3 atau lebih baru)

### Installation

```bash
# Install dependencies
bun install

# Start development server (berjalan di port 3000)
bun run dev

# Build untuk production (output ke /build)
bun run build
```

## Features

- Landing page dengan informasi layanan
- Sistem login dan registrasi pengguna
- UI responsif untuk desktop dan mobile
- Desain modern dengan tema warna khas TemanTukang

## Project Structure

```
src/
├── components/
│   ├── ui/          # Komponen UI reusable (shadcn/ui pattern)
│   └── figma/       # Komponen spesifik Figma
├── imports/         # Auto-generated imports dari Figma
├── assets/          # Aset statis (gambar)
└── App.tsx          # Main app dengan routing
```

## Team

Dibuat untuk mata kuliah PPD - Fasilkom UI
