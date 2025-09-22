import React from "react";
import { Editor } from "./editor";

interface Props {
  params: Promise<{ documentId: string }>;
}

const DocumentPage: React.FC<Props> = async (props) => {
  const { documentId } = await props.params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentPage;
