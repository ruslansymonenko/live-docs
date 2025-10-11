import DocumentInput from "@/components/DocumentInput";
import { MenuBar } from "@/components/MenuBar";
import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <MenuBar />
        </div>
      </div>
    </nav>
  );
};
