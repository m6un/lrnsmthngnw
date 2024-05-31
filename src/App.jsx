import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  SelectionMode,
} from "reactflow";

import "reactflow/dist/style.css";
import { getRandomEntities } from "./constants";
import { CustomNode } from "./components/Node";

const randomEntities = getRandomEntities(3);

const panOnDrag = [1, 2];

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: window.innerWidth / 6, y: 100 },
    data: {
      label: randomEntities[0].name,
      description: randomEntities[0].description,
      emoji: randomEntities[0].emoji,
    },
  },
  {
    id: "2",
    type: "customNode",
    position: { x: (window.innerWidth * 2.5) / 6, y: 100 },
    data: {
      label: randomEntities[1].name,
      description: randomEntities[1].description,
      emoji: randomEntities[1].emoji,
    },
  },
  {
    id: "3",
    type: "customNode",
    position: { x: (window.innerWidth * 4) / 6, y: 100 },
    data: {
      label: randomEntities[2].name,
      description: randomEntities[2].description,
      emoji: randomEntities[2].emoji,
    },
  },
];
const initialEdges = [{}];

// add node types
const nodeTypes = {
  customNode: CustomNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((node) => node.id === params.source);
      const targetNode = nodes.find((node) => node.id === params.target);

      if (sourceNode && targetNode) {
        const sourceLabel = sourceNode.data.label;
        const targetLabel = targetNode.data.label;

        console.log(`Connected ${sourceLabel} to ${targetLabel}`);

        // Create a new node with the label "new"
        const newNodeId = `new-${Date.now()}`;
        const newNode = {
          id: newNodeId,
          data: { label: "new" },
          type: "customNode",
          position: {
            x: (sourceNode.position.x + targetNode.position.x) / 2,
            y: (sourceNode.position.y + targetNode.position.y) / 2,
          },
        };

        // Add the new node to the nodes array
        setNodes((nds) => nds.concat(newNode));

        // Create edges to connect the new node to the source and target nodes
        const newEdges = [
          {
            id: `${params.source}-${newNodeId}`,
            source: params.source,
            target: newNodeId,
          },
          {
            id: `${newNodeId}-${params.target}`,
            source: newNodeId,
            target: params.target,
          },
        ];

        // Add the new edges to the edges array
        setEdges((eds) => eds.concat(newEdges));
      }
    },
    [nodes, setEdges, setNodes]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        nodeTypes={nodeTypes}
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
      >
        <Controls />
        <Background
          variant="dots"
          gap={24}
          size={1}
          style={{ backgroundColor: "white" }}
        />
      </ReactFlow>
    </div>
  );
}
