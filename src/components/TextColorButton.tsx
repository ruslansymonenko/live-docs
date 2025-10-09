import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { type ColorResult, SketchPicker } from "react-color";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface Props {}

export const TextColorButton: React.FC<Props> = (props) => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
          <span className="text-xs">A</span>
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: value }}
          ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 bg-white rounded shadow-lg">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
