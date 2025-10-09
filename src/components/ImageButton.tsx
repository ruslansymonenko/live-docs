import React, { useState } from "react";
import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ImageIcon, Link2Icon, SearchIcon, UploadIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const ImageButton: React.FC = () => {
  const { editor } = useEditorStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 flex flex-col gap-y-2 cursor-pointer">
          <DropdownMenuItem onClick={onUpload} className="p-1">
            <UploadIcon className="size-4 mr-2" />
            Upload
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsDialogOpen(true)}
            className="p-1"
          >
            <SearchIcon className="size-4 mr-2" />
            Paste image url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Paste Image URL</DialogTitle>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
          <DialogFooter>
            <Button onClick={handleImageUrlSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
