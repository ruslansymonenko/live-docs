import { Button } from "@/components/ui/button";
import React from "react";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="">
      <Button variant="destructive">Click me</Button>
    </div>
  );
};

export default Home;
