import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="">
      <Button variant="outline">
        <Link href="/documents/1">Go to Document</Link>
      </Button>
    </div>
  );
};

export default Home;
