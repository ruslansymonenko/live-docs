"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  FileIcon,
  FileJson,
  FilePenIcon,
  FilePlusIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  Text,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

export const MenuBar: React.FC = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    const table = editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);

    a.click();

    window.URL.revokeObjectURL(url);
  };

  const saveAsJson = (filename: string) => {
    if (!editor) return;

    const data = editor.getJSON();
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    onDownload(blob, filename);
  };

  const saveAsHtml = (filename: string) => {
    if (!editor) return;

    const data = editor.getHTML();
    const blob = new Blob([data], { type: "text/html" });
    onDownload(blob, filename);
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain" });
    onDownload(blob, "document.txt");
  };

  return (
    <div className="flex">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            File
          </MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger>
                <FileIcon className="size-4 mr-2" />
                Save File
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={() => saveAsJson("document.json")}>
                  <FileJson className="size-4 mr-2" />
                  JSON
                </MenubarItem>
                <MenubarItem onClick={() => saveAsHtml("document.html")}>
                  <GlobeIcon className="size-4 mr-2" />
                  HTML
                </MenubarItem>
                <MenubarItem onClick={() => window.print()}>
                  <BsFilePdf className="size-4 mr-2" />
                  PDF
                </MenubarItem>
                <MenubarItem onClick={onSaveText}>
                  <Text className="size-4 mr-2" />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              <FilePlusIcon className="size-4 mr-2" />
              New Document
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <FilePenIcon className="size-4 mr-2" />
              Rename
            </MenubarItem>
            <MenubarItem>
              <TrashIcon className="size-4 mr-2" />
              Remove
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => window.print()}>
              <PrinterIcon className="size-4 mr-2" />
              Print
              <MenubarShortcut>Ctrl+P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2Icon className="size-4 mr-2" />
              Undo
              <MenubarShortcut>Ctrl+Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Redo2Icon className="size-4 mr-2" />
              Redo
              <MenubarShortcut>Ctrl+Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Table</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                  1 x 1
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                  2 x 2
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                  3 x 3
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                  4 x 4
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 5, cols: 5 })}>
                  5 x 5
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Format
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <TextIcon className="size-4 mr-2" />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <BoldIcon className="size-4 mr-2" />
                  Bold
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <ItalicIcon className="size-4 mr-2" />
                  Italic
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    editor?.chain().focus().toggleUnderline().run()
                  }
                >
                  <UnderlineIcon className="size-4 mr-2" />
                  Underline
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                >
                  <StrikethroughIcon className="size-4 mr-2" />
                  Strikethrough
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem
              onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            >
              <RemoveFormattingIcon className="size-4 mr-2" />
              Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
