

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font flex flex-col justify-center items-center mb-5">
  <div className="container px-5 pt-8 mx-auto flex flex-col justify-center items-center">
    <a
      href="https://t.me/komilovsg"
      className="text-gray-600 ml-1"
      rel="noopener noreferrer"
      target="_blank"
    >
      @komilovsg
    </a>
  </div>
    <span className="flex justify-center items-center gap-2 mt-4">
      <a href="https://www.facebook.com/ksgk11?locale=ru_RU" className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5 text-[#4267b2] hover:scale-110 transition-all"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a href="https://twitter.com/komilovsg" className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5 text-[#38A1F3] hover:scale-110 transition-all"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a href="https://www.instagram.com/komilovsg?igsh=b2tvZjk0dGJnNjBu" className="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5 text-[#f06d6d] hover:scale-110 transition-all"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/komilovsg/" className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5 text-[#0077B5] hover:scale-110 transition-all"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
</footer>
    </div>
  )
}
