import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font border-b-2 mb-5">
        <div className="container mx-auto flex flex-wrap justify-center p-5 px-10 flex-col md:flex-row items-center">
          <Link to="/">
            <a className="flex title-font font-medium justify-center gap-2 items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-14 h-14" src="/icons.png" alt="ex-currency" />
              <span className="text-xl">EX-CURRENCY</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5 font-semibold">
            <Link to="/">
              <a className="hover:text-blue-700 cursor-pointer">Главное</a>
            </Link>
            <Link to="/currency">
              <a className="hover:text-blue-700 cursor-pointer">Валюта</a>
            </Link>
            <Link to="/course">
              <a className="hover:text-blue-700 cursor-pointer">Курс</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
