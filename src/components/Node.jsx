import { Handle, Position } from "reactflow";

export const CustomNode = ({ data }) => {
  const isValidConnection = (connection) => {
    return connection.source !== connection.target;
  };
  return (
    <div
      style={{
        border: "1px solid #d3d1d1",
        padding: "8px 16px",
        borderRadius: "6px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div
        style={{
          padding: "4px",
          color: "black",
          fontSize: "14px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <span>{data?.emoji}</span>
          <span>{data?.label}</span>
        </div>
      </div>
      {data?.description && (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <hr style={{ border: "0.1px solid #d3d1d1", width: "100%" }} />
          <div style={{ padding: "4px", color: "black" }}>
            {data?.description}
          </div>
        </div>
      )}
      <Handle
        id="a"
        isValidConnection={isValidConnection}
        type="source"
        position={Position.Left}
      />
      <Handle
        id="b"
        isValidConnection={isValidConnection}
        type="target"
        position={Position.Right}
      />
      <Handle
        id="c"
        isValidConnection={isValidConnection}
        type="target"
        position={Position.Bottom}
      />
      <Handle
        id="d"
        isValidConnection={isValidConnection}
        type="source"
        position={Position.Top}
      />
    </div>
  );
};
