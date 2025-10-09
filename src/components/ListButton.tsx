import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { AlignCenterIcon, ListIcon, ListOrderedIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ListButton: React.FC = () => {
  const { editor } = useEditorStore();

  const lists = [
    {
      label: "Bullet List",
      value: "bulletList",
      icon: ListIcon,
      isActive: editor?.isActive("bulletList"),
      onClick: () => {
        editor?.chain().focus().toggleBulletList().run();
      },
    },
    {
      label: "Ordered List",
      value: "orderedList",
      icon: ListOrderedIcon,
      isActive: editor?.isActive("orderedList"),
      onClick: () => {
        editor?.chain().focus().toggleOrderedList().run();
      },
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
          <AlignCenterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex p-1 flex-col gap-y-1">
        {lists.map(({ label, icon: Icon, isActive, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn(
              "flex items-center text-sm px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              isActive && "bg-neutral-200/80"
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
