import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Navbar from "./nabvar";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="fixed top-0 left-0 right-0 z-10 h-24 bg-white p-4">
        <Navbar />
      </div>
      <Button variant="outline" className="mt-32 w-48">
        <Link href="/documents/1">Go to Document</Link>
      </Button>
    </div>
  );
};

export default Home;
