"use client";

import { cn } from "@/lib/utils";
import {
  LucideIcon,
  Undo2Icon,
  Redo2Icon,
  Printer,
  SpellCheck2Icon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  MessageSquarePlusIcon,
  ListTodoIcon,
  RemoveFormattingIcon,
} from "lucide-react";
import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import { FontFamilyButton } from "@/components/FontFamilyButton";
import { HeadingLevelButton } from "@/components/HeadingLevelButton";
import { TextColorButton } from "@/components/TextColorButton";
import { TextHighlightColorButton } from "@/components/TextHighlightColorButton";
import { LinkButton } from "@/components/LinkButton";
import { ImageButton } from "@/components/ImageButton";
import { AlignButton } from "@/components/AlignButton";
import { ListButton } from "@/components/ListButton";
import { FontSizeButton } from "@/components/FontSizeButton";
import { LineHeightButton } from "@/components/LineHeightButton";

interface ToolbarButtonProps {
  onClick?: () => void;
  icon: LucideIcon;
  isActive?: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  icon: Icon,
  isActive,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "hover:bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar: React.FC = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => {
          editor?.chain().focus().undo().run();
        },
        isActive: false,
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => {
          editor?.chain().focus().redo().run();
        },
        isActive: false,
      },
      {
        label: "Print",
        icon: Printer,
        onClick: () => {
          window.print();
        },
        isActive: false,
      },
      {
        label: "Spell Check",
        icon: SpellCheck2Icon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
        isActive: false,
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("Add comment"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <AlignButton />
      <FontSizeButton />
      <LineHeightButton />
      <TextColorButton />
      <TextHighlightColorButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <LinkButton />
      <ImageButton />
      <ListButton />
    </div>
  );
};

export default Toolbar;
