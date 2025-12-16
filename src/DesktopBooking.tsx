import { Search, MapPin, Star, Clock, User, Home, FileText, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function DesktopBooking() {
  const handymen = [
    {
      id: 1,
      name: 'Anas Bahri',
      specialty: 'Tukang Bangunan',
      experience: '1 tahun pengalaman',
      rating: 4.6,
      reviews: 105,
      status: 'Online sekarang',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU2MDQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Sino Mahud',
      specialty: 'Tukang listrik',
      experience: '3 tahun pengalaman',
      rating: 4.5,
      reviews: 243,
      status: 'Online sekarang',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYxNzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOnline: true,
    },
    {
      id: 3,
      name: 'Santo Yamin',
      specialty: 'Tukang keramik',
      experience: '5 tahun pengalaman',
      rating: 4.9,
      reviews: 189,
      status: 'Online sekarang',
      price: 100000,
      image: 'https://images.unsplash.com/photo-1744893611327-d9d27f19c0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwd29ya2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1NjE3MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOnline: true,
    },
    {
      id: 4,
      name: 'Mike Sani',
      specialty: 'Tukang Atap',
      experience: '4 tahun pengalaman',
      rating: 4.8,
      reviews: 201,
      status: 'Response < 1 jam',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1697181775774-c87e11b0a521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mZXIlMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU2MTcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOnline: false,
      responseTime: true,
    },
    {
      id: 5,
      name: 'Anas Maulid',
      specialty: 'Tukang Taman',
      experience: '2 tahun pengalaman',
      rating: 4.7,
      reviews: 178,
      status: 'Response < 2 jam',
      price: 60000,
      image: 'https://images.unsplash.com/photo-1758524055098-071470ae15b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5lciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYxNzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isOnline: false,
      responseTime: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-[1280px] h-[832px] mx-auto bg-white flex flex-col relative overflow-hidden">
      {/* Header Section */}
      <div className="px-8 pt-6 pb-5 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[#002A45] text-2xl">Booking Tukangmu Sekarang</h1>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm text-[#002A45]">Sania R</p>
              <p className="text-xs text-gray-500">User</p>
            </div>
            <div className="w-10 h-10 bg-[#002A45] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search tukang dengan nama"
              className="w-full bg-[#002A45] text-white placeholder:text-white/70 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB915]"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-3 overflow-x-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6BA3D0] text-white rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="3" height="3" fill="white" opacity="0.8"/>
              <rect x="7" y="3" width="3" height="3" fill="white" opacity="0.8"/>
              <rect x="12" y="3" width="2" height="3" fill="white" opacity="0.8"/>
              <rect x="2" y="8" width="3" height="3" fill="white"/>
              <rect x="7" y="8" width="3" height="3" fill="white"/>
              <rect x="12" y="8" width="2" height="3" fill="white" opacity="0.8"/>
            </svg>
            <span>Rekomendasi</span>
          </button>
          <button className="px-4 py-2 bg-[#6BA3D0] text-white rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-opacity">
            Rentang Harga
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6BA3D0] text-white rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-opacity">
            <MapPin className="w-4 h-4" />
            <span>Lokasi</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6BA3D0] text-white rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-opacity">
            <Star className="w-4 h-4" />
            <span>Rating 4.5</span>
          </button>
        </div>
      </div>

      {/* Handymen List */}
      <div className="flex-1 overflow-y-auto px-8 py-5">
        <div className="space-y-4">
          {handymen.map((handyman) => (
            <div key={handyman.id} className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              {/* Profile Image */}
              <ImageWithFallback
                src={handyman.image}
                alt={handyman.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              {/* Info Section */}
              <div className="flex-1">
                <h3 className="text-[#002A45] text-lg mb-1">{handyman.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{handyman.specialty}</p>
                <p className="text-xs text-gray-500 mb-2">{handyman.experience}</p>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FFB915] text-[#FFB915]" />
                    <span className="text-sm text-[#002A45]">{handyman.rating}/5 ({handyman.reviews} review)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {handyman.isOnline ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">{handyman.status}</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-xs text-gray-600">{handyman.status}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex flex-col items-end gap-3">
                <p className="text-lg text-[#002A45]">{formatPrice(handyman.price)}</p>
                <button className="bg-[#FFB915] text-white px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity">
                  Lihat detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#002A45] px-8 py-4">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1.5 text-white hover:text-[#FFB915] transition-colors">
            <Home className="w-6 h-6" />
            <span className="text-xs">Beranda</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-white hover:text-[#FFB915] transition-colors">
            <FileText className="w-6 h-6" />
            <span className="text-xs">Aktivitas</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-white hover:text-[#FFB915] transition-colors">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">Pesan</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-white hover:text-[#FFB915] transition-colors">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
