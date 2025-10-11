import React from "react";
import { Editor } from "./editor";
import Toolbar from "./toolbar";
import { Navbar } from "./navbar";

interface Props {
  params: Promise<{ documentId: string }>;
}

const DocumentPage: React.FC<Props> = async (props) => {
  const { documentId } = await props.params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col gap-2 px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 bg-[#FAFBFD] z-10 border-b border-neutral-200 print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentPage;
