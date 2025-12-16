import { ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/f516109695caed1ff7070be1e517868d921ccfa2.png';

interface SignUpFormProps {
  onSignUpSuccess: () => void;
}

export default function SignUpForm({ onSignUpSuccess }: SignUpFormProps) {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUpSuccess();
  };

  return (
    <div className="w-full min-h-screen bg-[#FCFDDD] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-y-auto">
      {/* Main Content Container */}
      <div className="w-full max-w-[450px] flex flex-col items-center py-8 sm:py-12">
        {/* Logo and Brand Section */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img src={logoImage} alt="TemanTukang Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
          <h1 className="text-[#FFB915] text-2xl sm:text-3xl">TemanTukang</h1>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSignUp} className="w-full px-4 sm:px-0">
          {/* Registrasi Heading */}
          <h2 className="text-[#002A45] text-2xl sm:text-3xl mb-5 sm:mb-6 text-center">
            Registrasi
          </h2>

          {/* Email Field */}
          <div className="mb-3 sm:mb-4">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukan email anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Telepon Field */}
          <div className="mb-3 sm:mb-4">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Telepon
            </label>
            <input
              type="tel"
              placeholder="Masukan nomor telepon anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Username Field */}
          <div className="mb-3 sm:mb-4">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukan username anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Password Field */}
          <div className="mb-3 sm:mb-4">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan password anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Konfirmasi Password Field */}
          <div className="mb-3 sm:mb-4">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Masukan ulang password anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Peran Dropdown */}
          <div className="mb-5 sm:mb-6">
            <label className="text-[#002A45] block mb-2 text-sm sm:text-base">
              Peran
            </label>
            <div className="relative">
              <select
                className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-gray-400 appearance-none focus:outline-none focus:border-[#FFB915] transition-colors cursor-pointer text-sm sm:text-base"
                defaultValue=""
              >
                <option value="" disabled>Pilih peran</option>
                <option value="customer" className="text-[#002A45]">Customer</option>
                <option value="tukang" className="text-[#002A45]">Tukang</option>
              </select>
              <ChevronDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Buat Akun Button */}
          <button 
            type="submit"
            className="w-full bg-[#002A45] text-white py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Buat akun
          </button>
        </form>
      </div>
    </div>
  );
}