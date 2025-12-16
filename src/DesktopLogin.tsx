import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logoImage from "figma:asset/f516109695caed1ff7070be1e517868d921ccfa2.png";

interface DesktopLoginProps {
  onNavigateToLoginForm: () => void;
  onNavigateToSignUpForm: () => void;
}

export default function DesktopLogin({
  onNavigateToLoginForm,
  onNavigateToSignUpForm,
}: DesktopLoginProps) {
  return (
    <div className="w-full min-h-screen bg-[#FCFDDD] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <div className="w-full max-w-[500px] flex flex-col items-center px-4 sm:px-8 py-8">
        {/* Logo and Brand Section */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          {/* Logo Mascot Circle */}
          <img
            src={logoImage}
            alt="TemanTukang Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg"
          />

          {/* Brand Name */}
          <h1 className="text-[#FFB915] text-3xl sm:text-4xl lg:text-5xl">
            TemanTukang
          </h1>
        </div>

        {/* Welcome Section */}
        <div className="w-full mb-8 sm:mb-10 text-center">
          <h2 className="text-[#002A45] text-2xl sm:text-3xl mb-3 sm:mb-4">
            Selamat datang di TemanTukang !
          </h2>
          <p className="text-[#002A45] text-sm sm:text-base leading-relaxed">
            Aplikasi untuk menemukan tukang yang tepat sesuai
            kebutuhan, lengkap dengan profil, keahlian, tarif,
            dan ulasan pengguna lain sehingga menjadi lebih
            cepat, praktis, dan terpercaya.
          </p>
        </div>

        {/* Masuk Button */}
        <button
          className="w-full bg-[#002A45] text-white py-3 sm:py-4 rounded-2xl mb-4 sm:mb-6 hover:opacity-90 transition-opacity"
          onClick={onNavigateToLoginForm}
        >
          Masuk
        </button>

        {/* Sign Up Link */}
        <div className="text-center text-sm sm:text-base">
          <span className="text-[#002A45]">
            Belum punya akun?{" "}
          </span>
          <button
            className="text-[#002A45] underline hover:text-[#FFB915] transition-colors"
            onClick={onNavigateToSignUpForm}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}