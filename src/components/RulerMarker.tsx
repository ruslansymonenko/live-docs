import { FaCaretDown } from "react-icons/fa";

interface RulerMarkerProps {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
}

const RulerMarker: React.FC<RulerMarkerProps> = ({
  position,
  isLeft,
  isDragging,
  onMouseDown,
  onDoubleClick,
}) => {
  return (
    <div
      className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
      style={{ [isLeft ? "left" : "right"]: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-400 transform -translate-x-1/2" />
      <div
        className="absolute left-1/2 top-4 transform -translate-x-1/2 transition-opacity duration-150"
        style={{
          height: "100vh",
          width: "1px",
          transform: "scaleX(0.5)",
          backgroundColor: "#3b72f6",
          display: isDragging ? "block" : "none",
        }}
      />
    </div>
  );
};

export default RulerMarker;
