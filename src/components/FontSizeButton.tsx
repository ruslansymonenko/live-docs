import React, { useState, useEffect } from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { Minus, Plus } from "lucide-react";

export const FontSizeButton: React.FC = () => {
  const { editor } = useEditorStore();
  const [fontSize, setFontSize] = useState("16");
  const [inputValue, setInputValue] = useState("16");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!editor) return;

    const updateFontSize = () => {
      const currentFontSize = editor.getAttributes("textStyle").fontSize;
      if (currentFontSize) {
        const size = currentFontSize.replace("px", "");
        setFontSize(size);
        if (!isEditing) {
          setInputValue(size);
        }
      } else {
        setFontSize("16");
        if (!isEditing) {
          setInputValue("16");
        }
      }
    };

    editor.on("selectionUpdate", updateFontSize);
    editor.on("transaction", updateFontSize);

    // Initial update
    updateFontSize();

    return () => {
      editor.off("selectionUpdate", updateFontSize);
      editor.off("transaction", updateFontSize);
    };
  }, [editor, isEditing]);

  const updatedFontSize = (newSize: string) => {
    const size = parseInt(newSize);

    if (!isNaN(size) && size > 0) {
      editor
        ?.chain()
        .focus()
        .setFontSize(size + "px")
        .run();

      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updatedFontSize(inputValue);
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updatedFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    updatedFontSize(newSize.toString());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updatedFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  return (
    <div className="flex items-center gap-x-0.2">
      <button className="text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80">
        <Minus className="size-4" onClick={decrement} />
      </button>
      {isEditing ? (
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="w-12 text-center border border-neutral-300 rounded-sm focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          className="h-7 w-10 text-sm rounded-sm border border-neutral-300 text-center bg-transparent cursor-text"
          onClick={() => {
            setIsEditing(true);
            setInputValue(fontSize);
          }}
        >
          {fontSize}
        </button>
      )}
      <button className="text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80">
        <Plus className="size-4" onClick={increment} />
      </button>
    </div>
  );
};
