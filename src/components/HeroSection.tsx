export function HeroSection() {
  return (
    <div className="bg-[#FEFFAF] px-6 py-8">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <ShieldIllustration />
        </div>
        <div className="flex-1">
          <h2 className="text-[#002A45] mb-1">Kerja Tenang, Hasil Aman</h2>
          <p className="text-sm text-[#002A45] opacity-75">
            Lindungi perbaikanmu dari risiko kerusakan.
          </p>
        </div>
      </div>
    </div>
  );
}

function ShieldIllustration() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield background */}
      <path
        d="M36 10L14 19V32C14 45.5 23 56.5 36 64C49 56.5 58 45.5 58 32V19L36 10Z"
        fill="#002A45"
        opacity="0.95"
      />
      {/* Shield border */}
      <path
        d="M36 10L14 19V32C14 45.5 23 56.5 36 64C49 56.5 58 45.5 58 32V19L36 10Z"
        stroke="#FFB915"
        strokeWidth="2.5"
        fill="none"
      />
      {/* House shape inside */}
      <path
        d="M36 26L26 32V42C26 45 29 48 36 50C43 48 46 45 46 42V32L36 26Z"
        fill="#003A5D"
      />
      {/* Roof of house */}
      <path
        d="M36 22L23 30L36 26L49 30L36 22Z"
        fill="#FFB915"
        opacity="0.8"
      />
      {/* Checkmark */}
      <path
        d="M30 37L34 41L44 31"
        stroke="#FFB915"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}