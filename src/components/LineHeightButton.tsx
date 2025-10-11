import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ListCollapseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const LineHeightButton: React.FC = () => {
  const { editor } = useEditorStore();

  const lineHeights = [
    { label: "Normal", value: "normal" },
    { label: "1.5", value: "1.5" },
    { label: "2", value: "2" },
    { label: "2.5", value: "2.5" },
    { label: "3", value: "3" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex p-1 flex-col gap-y-1">
        {lineHeights.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
            className={cn(
              "flex items-center text-sm px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.isActive({ lineHeight: value }) && "bg-neutral-200/80"
            )}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
