"use client";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEditorStore } from "@/store/use-editor-store";
import { type Level } from "@tiptap/extension-heading";
import { ChevronDownIcon } from "lucide-react";

export const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "Normal text", level: 0, fontSize: "16px" },
    { label: "Heading 1", level: 1, fontSize: "32px" },
    { label: "Heading 2", level: 2, fontSize: "24px" },
    { label: "Heading 3", level: 3, fontSize: "20px" },
    { label: "Heading 4", level: 4, fontSize: "18px" },
  ];

  const getCurrentHeading = () => {
    for (let level = headings.length - 1; level >= 0; level--) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }

    return "Normal text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
          <span>{getCurrentHeading()}</span>
          <ChevronDownIcon className="size-4 ml-2 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ label, level, fontSize }) => (
          <button
            key={label}
            style={{ fontSize }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              {
                "bg-neutral-200/80":
                  (level === 0 && !editor?.isActive("heading")) ||
                  (editor?.isActive("heading", { level }) &&
                    "bg-neutral-200/80"),
              }
            )}
            onClick={() => {
              if (level === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: level as Level })
                  .run();
              }
            }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
