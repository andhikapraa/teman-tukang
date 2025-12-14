import logoImage from 'figma:asset/f516109695caed1ff7070be1e517868d921ccfa2.png';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="w-full min-h-screen bg-[#FCFDDD] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <div className="w-full max-w-[450px] flex flex-col items-center py-8 sm:py-12">
        {/* Logo and Brand Section */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img src={logoImage} alt="TemanTukang Logo" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
          <h1 className="text-[#FFB915] text-3xl sm:text-4xl">TemanTukang</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full px-4 sm:px-0">
          {/* Login Heading */}
          <h2 className="text-[#002A45] text-2xl sm:text-3xl mb-6 sm:mb-8 text-center">
            Login
          </h2>

          {/* Username Field */}
          <div className="mb-5 sm:mb-6">
            <label className="text-[#002A45] block mb-2 sm:mb-3 text-sm sm:text-base">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukan username anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 sm:mb-8">
            <label className="text-[#002A45] block mb-2 sm:mb-3 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan password anda"
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-[#002A45] placeholder:text-gray-400 focus:outline-none focus:border-[#FFB915] transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-[#002A45] text-white py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Login
          </button>
        </form>
      </div>

      {/* Status Bar Elements */}
      <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 py-2 flex items-center justify-between text-[#002A45] text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span>21:00</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="3" height="8" fill="currentColor" opacity="0.3"/>
            <rect x="6" y="4" width="3" height="10" fill="currentColor" opacity="0.5"/>
            <rect x="10" y="2" width="3" height="12" fill="currentColor" opacity="0.7"/>
            <rect x="14" y="1" width="3" height="13" fill="currentColor"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8C2 6.89543 2.89543 6 4 6H16C17.1046 6 18 6.89543 18 8V12C18 13.1046 17.1046 14 16 14H4C2.89543 14 2 13.1046 2 12V8Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18V9Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
}