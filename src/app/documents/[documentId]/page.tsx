import React from "react";
import { Editor } from "./editor";
import Toolbar from "./toolbar";

interface Props {
  params: Promise<{ documentId: string }>;
}

const DocumentPage: React.FC<Props> = async (props) => {
  const { documentId } = await props.params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentPage;
