import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <form action="" className="relative max-w-[720px] w-full">
        <Input
          placeholder="Search..."
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65, 69, 73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="submit"
          variant={"ghost"}
          size={"icon"}
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
