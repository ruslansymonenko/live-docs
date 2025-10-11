import { BsCloudCheck } from "react-icons/bs";

const DocumentInput: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck className="text-blue-500" />
    </div>
  );
};

export default DocumentInput;
