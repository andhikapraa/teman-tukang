import { ArrowRight, Shield, Clock, Star, Users, CheckCircle, Wrench, MapPin, Quote } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImage from 'figma:asset/f516109695caed1ff7070be1e517868d921ccfa2.png';

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

export default function LandingPage({ onNavigateToLogin }: LandingPageProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logoImage} alt="TemanTukang Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover" />
              <h1 className="text-[#002A45] text-base sm:text-lg lg:text-xl">TemanTukang</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <a href="#features" className="text-[#002A45] hover:text-[#FFB915] transition-colors text-sm lg:text-base">Keunggulan</a>
              <a href="#how-it-works" className="text-[#002A45] hover:text-[#FFB915] transition-colors text-sm lg:text-base">Cara Kerja</a>
              <a href="#testimonials" className="text-[#002A45] hover:text-[#FFB915] transition-colors text-sm lg:text-base">Testimoni</a>
              <button className="bg-[#FFB915] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm lg:text-base">
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#002A45]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#FCFDDD] via-white to-[#FCFDDD]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="bg-[#FFB915]/10 text-[#FFB915] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[#FFB915]/20">
                  ✨ Platform Terpercaya untuk Jasa Tukang
                </span>
              </div>
              
              <h1 className="text-[#002A45] text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Temukan Tukang <br />
                <span className="text-[#FFB915]">Terpercaya</span> untuk <br />
                Setiap Kebutuhan
              </h1>
              
              <p className="text-[#002A45] text-base sm:text-lg leading-relaxed opacity-80">
                TemanTukang menghubungkan Anda dengan tukang profesional yang terverifikasi. 
                Mudah, cepat, dan terpercaya untuk semua kebutuhan perbaikan rumah Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button onClick={onNavigateToLogin} className="bg-[#002A45] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group text-sm sm:text-base">
                  <span>Mulai Sekarang</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-[#002A45] px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-[#002A45] hover:bg-[#002A45] hover:text-white transition-all text-sm sm:text-base">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8">
                <div>
                  <p className="text-2xl sm:text-3xl text-[#FFB915]">1000+</p>
                  <p className="text-xs sm:text-sm text-[#002A45] opacity-60">Tukang Terdaftar</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl text-[#FFB915]">5000+</p>
                  <p className="text-xs sm:text-sm text-[#002A45] opacity-60">Proyek Selesai</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl text-[#FFB915]">4.8/5</p>
                  <p className="text-xs sm:text-sm text-[#002A45] opacity-60">Rating Rata-rata</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative hidden md:block">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFB915] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#002A45] rounded-full opacity-10 blur-3xl"></div>
              
              {/* Phone Mockup Placeholder */}
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto bg-gradient-to-br from-[#002A45] to-[#003d66] rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                  {/* App Preview */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="bg-[#002A45] px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={logoImage} alt="TemanTukang" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-white text-sm">TemanTukang</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div className="bg-[#FCFDDD] rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#FFB915] rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-[#002A45]/20 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-[#002A45]/10 rounded w-32"></div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-8 bg-[#002A45] rounded-lg"></div>
                          <div className="flex-1 h-8 bg-[#FFB915] rounded-lg"></div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Booking Success</p>
                      <p className="text-sm text-[#002A45]">Anas Bahri</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
                    <Star className="w-8 h-8 fill-[#FFB915] text-[#FFB915]" />
                    <div>
                      <p className="text-lg text-[#002A45]">4.8</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#002A45] text-3xl sm:text-4xl mb-3 sm:mb-4">
              Kenapa Memilih <span className="text-[#FFB915]">TemanTukang</span>?
            </h2>
            <p className="text-[#002A45] opacity-70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Kami menyediakan solusi terbaik untuk menghubungkan Anda dengan tukang profesional
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB915] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3">Terverifikasi</h3>
              <p className="text-[#002A45] opacity-70 text-sm leading-relaxed">
                Semua tukang telah melalui proses verifikasi ketat untuk menjamin kualitas layanan
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB915] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3">Cepat & Mudah</h3>
              <p className="text-[#002A45] opacity-70 text-sm leading-relaxed">
                Booking tukang dalam hitungan menit dengan proses yang simple dan user-friendly
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB915] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3">Rating & Review</h3>
              <p className="text-[#002A45] opacity-70 text-sm leading-relaxed">
                Lihat rating dan ulasan dari pengguna lain untuk memilih tukang terbaik
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB915] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3">Live Tracking</h3>
              <p className="text-[#002A45] opacity-70 text-sm leading-relaxed">
                Pantau lokasi tukang secara real-time dan estimasi waktu kedatangan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FCFDDD] via-white to-[#FCFDDD]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#002A45] text-3xl sm:text-4xl mb-3 sm:mb-4">
              Cara Kerja <span className="text-[#FFB915]">TemanTukang</span>
            </h2>
            <p className="text-[#002A45] opacity-70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Hanya 3 langkah mudah untuk mendapatkan tukang terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#FFB915]/20 hover:border-[#FFB915] transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FFB915] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3 text-center">Pilih Layanan</h3>
                <p className="text-[#002A45] opacity-70 text-center text-sm sm:text-base">
                  Pilih jenis layanan yang Anda butuhkan dari berbagai kategori tukang
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFB915]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#FFB915]/20 hover:border-[#FFB915] transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FFB915] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3 text-center">Booking Tukang</h3>
                <p className="text-[#002A45] opacity-70 text-center text-sm sm:text-base">
                  Lihat profil, rating, dan harga. Pilih tukang yang sesuai kebutuhan Anda
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFB915]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#FFB915]/20 hover:border-[#FFB915] transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FFB915] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6 mx-auto">
                3
              </div>
              <h3 className="text-[#002A45] text-lg sm:text-xl mb-2 sm:mb-3 text-center">Lacak & Nikmati</h3>
              <p className="text-[#002A45] opacity-70 text-center text-sm sm:text-base">
                Lacak kedatangan tukang secara real-time dan nikmati layanan profesional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#002A45] text-3xl sm:text-4xl mb-3 sm:mb-4">
              Apa Kata Mereka Tentang <span className="text-[#FFB915]">Kami</span>?
            </h2>
            <p className="text-[#002A45] opacity-70 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Ribuan pengguna telah mempercayai TemanTukang untuk kebutuhan perbaikan rumah mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758523671139-33fd9913e456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhvbWVvd25lciUyMHNtaWxpbmd8ZW58MXx8fHwxNzY1NTMzODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Budi Santoso"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-[#002A45] text-sm sm:text-base">Budi Santoso</h4>
                  <p className="text-xs text-gray-500">Jakarta Selatan</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB915] text-[#FFB915]" />
                  ))}
                </div>
              </div>
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB915] opacity-30 mb-2" />
              <p className="text-[#002A45] opacity-80 leading-relaxed mb-3 text-sm sm:text-base">
                "Sangat membantu! Tukang listrik yang datang profesional dan harganya transparan. 
                Sistem tracking-nya juga keren, jadi tahu kapan tukangnya datang."
              </p>
              <p className="text-xs text-gray-500">Service Listrik • 2 minggu lalu</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTU5NTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Siti Nurhaliza"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-[#002A45] text-sm sm:text-base">Siti Nurhaliza</h4>
                  <p className="text-xs text-gray-500">Tangerang</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB915] text-[#FFB915]" />
                  ))}
                </div>
              </div>
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB915] opacity-30 mb-2" />
              <p className="text-[#002A45] opacity-80 leading-relaxed mb-3 text-sm sm:text-base">
                "Aplikasi yang sangat memudahkan! Tidak perlu ribet cari tukang lagi. 
                Rating dan review-nya membantu banget untuk pilih tukang yang tepat."
              </p>
              <p className="text-xs text-gray-500">Pasang Keramik • 1 bulan lalu</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#FCFDDD] to-white rounded-2xl p-5 sm:p-6 border border-[#FFB915]/20 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjBjdXN0b21lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYwNjAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ahmad Rizki"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-[#002A45] text-sm sm:text-base">Ahmad Rizki</h4>
                  <p className="text-xs text-gray-500">Depok</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB915] text-[#FFB915]" />
                  ))}
                </div>
              </div>
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB915] opacity-30 mb-2" />
              <p className="text-[#002A45] opacity-80 leading-relaxed mb-3 text-sm sm:text-base">
                "Proteksi asuransi dari TemanTukang bikin tenang! Hasil kerjanya juga rapi 
                dan sesuai ekspektasi. Highly recommended untuk yang butuh jasa tukang!"
              </p>
              <p className="text-xs text-gray-500">Renovasi Rumah • 3 minggu lalu</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFB915] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-xl sm:text-2xl text-[#002A45] mb-1">10,000+</p>
              <p className="text-xs sm:text-sm text-gray-600">Pengguna Aktif</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFB915] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-xl sm:text-2xl text-[#002A45] mb-1">98%</p>
              <p className="text-xs sm:text-sm text-gray-600">Tingkat Kepuasan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFB915] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Wrench className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-xl sm:text-2xl text-[#002A45] mb-1">15+</p>
              <p className="text-xs sm:text-sm text-gray-600">Kategori Layanan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFB915] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-xl sm:text-2xl text-[#002A45] mb-1">4.8/5</p>
              <p className="text-xs sm:text-sm text-gray-600">Rating Aplikasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#002A45] to-[#003d66]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4">
            Siap Menemukan Tukang Terpercaya?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Download TemanTukang sekarang dan dapatkan akses ke ribuan tukang profesional di sekitar Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-[#FFB915] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Download untuk Android</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="bg-white text-[#002A45] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Download untuk iOS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 bg-[#002A45] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img src={logoImage} alt="TemanTukang" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                <h3 className="text-white text-base sm:text-lg">TemanTukang</h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">
                Platform terpercaya untuk menghubungkan Anda dengan tukang profesional
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Produk</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
                <li><a href="#features" className="hover:text-[#FFB915] transition-colors">Fitur</a></li>
                <li><a href="#how-it-works" className="hover:text-[#FFB915] transition-colors">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Perusahaan</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-[#FFB915] transition-colors">Keamanan</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <p className="text-white/60 text-xs sm:text-sm text-center">
              © 2024 TemanTukang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}