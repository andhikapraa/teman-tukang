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
    </div>
  );
}