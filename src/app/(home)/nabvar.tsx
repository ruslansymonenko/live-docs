import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { SearchInput } from "@/components/SearchInput";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full shadow-sm">
      <div className="flex items-center gap-3 shrink-0 pr-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          <h3 className="text-xl">Live Docs</h3>
        </Link>
      </div>
      <SearchInput />
      <div></div>
    </nav>
  );
};

export default Navbar;
