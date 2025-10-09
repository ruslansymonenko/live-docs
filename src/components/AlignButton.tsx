import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  HighlighterIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const AlignButton: React.FC = () => {
  const { editor } = useEditorStore();

  const alignments = [
    { label: "Left", value: "left", icon: AlignLeftIcon },
    { label: "Center", value: "center", icon: AlignCenterIcon },
    { label: "Right", value: "right", icon: AlignRightIcon },
    { label: "Justify", value: "justify", icon: AlignJustifyIcon },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
          <AlignCenterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex p-1 flex-col gap-y-1">
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center text-sm px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
            )}
          >
            <Icon className="size-4 mr-2" />
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
