import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logoipsum.svg" alt="Logo" width={100} height={30} />
          <span className="ml-2 text-sm text-gray-600">.com</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            HOME
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            PROPERTIES
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            AGENTS
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            BLOG
          </Link>
        </div>

        {/* Login Button */}
        <div>
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium">
            LOG IN
          </button>
        </div>
      </nav>
    </header>
  );
}
