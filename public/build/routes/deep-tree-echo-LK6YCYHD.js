import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-A76RAFDP.js";
import "/build/_shared/chunk-5NT3OUFA.js";
import {
  FiActivity,
  FiArrowLeft,
  FiBook,
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiEye,
  FiFeather,
  FiGitBranch,
  FiHome,
  FiInfo,
  FiLayers,
  FiMessageCircle,
  FiTrendingUp,
  FiZap
} from "/build/_shared/chunk-SOKF3QZZ.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-OMELEEQW.js";
import "/build/_shared/chunk-74BWT7FI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  createHotContext
} from "/build/_shared/chunk-AKSRNLHN.js";
import "/build/_shared/chunk-5GUXQVXG.js";
import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// empty-module:~/services/inferenceEngine.server
var require_inferenceEngine = __commonJS({
  "empty-module:~/services/inferenceEngine.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/deep-tree-echo.tsx
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);

// app/components/DeepTreeEchoHomeMap.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DeepTreeEchoHomeMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DeepTreeEchoHomeMap.tsx"
  );
  import.meta.hot.lastModified = "1760695398236.7886";
}
var TREE_NODES = [
  // Root node
  {
    id: "echo-home-root",
    name: "Echo Home Root",
    description: "The central root of the Deep Tree Echo Home cognitive architecture",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiHome, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    color: "bg-purple-600",
    type: "room",
    children: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"],
    level: 0,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.9,
      memoryDensity: 0.8,
      connectionWeight: 1
    }
  },
  // Level 1 - Main rooms
  {
    id: "memory-library",
    name: "Memory Library",
    description: "Repository of stored experiences, knowledge, and learned patterns",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiBook, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    color: "bg-indigo-500",
    type: "memory",
    parent: "echo-home-root",
    children: ["episodic-vault", "semantic-archive", "procedural-workshop", "associative-web"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.8,
      memoryDensity: 0.95,
      connectionWeight: 0.9
    }
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Creative space for coding, development, and technical implementation",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCode, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    color: "bg-blue-500",
    type: "room",
    parent: "echo-home-root",
    children: ["code-forge", "pattern-lab", "neural-studio", "architecture-space"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.7,
      memoryDensity: 0.6,
      connectionWeight: 0.8
    }
  },
  {
    id: "visualization-studio",
    name: "Visualization Studio",
    description: "Transforms abstract data into insightful visual representations",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiEye, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    color: "bg-purple-500",
    type: "pattern",
    parent: "echo-home-root",
    children: ["data-canvas", "concept-mapper", "flow-visualizer", "insight-gallery"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.85,
      memoryDensity: 0.7,
      connectionWeight: 0.75
    }
  },
  {
    id: "training-hall",
    name: "Training Hall",
    description: "Where echo state networks and neural architectures are refined",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCpu, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    color: "bg-red-500",
    type: "pattern",
    parent: "echo-home-root",
    children: ["esn-gymnasium", "pattern-dojo", "learning-arena", "adaptation-chamber"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.9,
      memoryDensity: 0.8,
      connectionWeight: 0.95
    }
  },
  {
    id: "observatory",
    name: "Observatory",
    description: "Space for insights, analytics, and meta-cognitive reflection",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiDatabase, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this),
    color: "bg-yellow-500",
    type: "concept",
    parent: "echo-home-root",
    children: ["insight-telescope", "analytics-hub", "reflection-mirror", "metacognition-center"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.75,
      memoryDensity: 0.85,
      connectionWeight: 0.8
    }
  },
  {
    id: "garden",
    name: "Garden",
    description: "Nurtures creative and philosophical thinking through organic growth patterns",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiFeather, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    color: "bg-green-500",
    type: "concept",
    parent: "echo-home-root",
    children: ["philosophy-grove", "creativity-meadow", "synthesis-garden", "emergence-forest"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.6,
      memoryDensity: 0.9,
      connectionWeight: 0.7
    }
  },
  {
    id: "communications-hub",
    name: "Communications Hub",
    description: "Central nexus for information exchange and conversation",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiMessageCircle, { size: 24 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this),
    color: "bg-cyan-500",
    type: "room",
    parent: "echo-home-root",
    children: ["dialogue-chamber", "feedback-loop", "integration-nexus", "broadcast-tower"],
    level: 1,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.8,
      memoryDensity: 0.75,
      connectionWeight: 0.85
    }
  },
  // Level 2 - Sub-rooms (Memory Library)
  {
    id: "episodic-vault",
    name: "Episodic Vault",
    description: "Personal experiences and autobiographical memories",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiActivity, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this),
    color: "bg-indigo-400",
    type: "memory",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.7,
      memoryDensity: 1,
      connectionWeight: 0.8
    }
  },
  {
    id: "semantic-archive",
    name: "Semantic Archive",
    description: "Facts, concepts, and general knowledge",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiLayers, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this),
    color: "bg-indigo-400",
    type: "concept",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.8,
      memoryDensity: 0.9,
      connectionWeight: 0.85
    }
  },
  {
    id: "procedural-workshop",
    name: "Procedural Workshop",
    description: "Skills, procedures, and how-to knowledge",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiGitBranch, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this),
    color: "bg-indigo-400",
    type: "pattern",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.9,
      memoryDensity: 0.7,
      connectionWeight: 0.9
    }
  },
  {
    id: "associative-web",
    name: "Associative Web",
    description: "Connected ideas and conceptual relationships",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiZap, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this),
    color: "bg-indigo-400",
    type: "concept",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.95,
      memoryDensity: 0.8,
      connectionWeight: 0.95
    }
  },
  // Level 2 - Sub-rooms (Workshop)
  {
    id: "code-forge",
    name: "Code Forge",
    description: "Software development and coding environment",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCode, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 231,
      columnNumber: 9
    }, this),
    color: "bg-blue-400",
    type: "room",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.6,
      memoryDensity: 0.5,
      connectionWeight: 0.7
    }
  },
  {
    id: "pattern-lab",
    name: "Pattern Lab",
    description: "Pattern analysis and recognition laboratory",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiTrendingUp, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, this),
    color: "bg-blue-400",
    type: "pattern",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.95,
      memoryDensity: 0.8,
      connectionWeight: 0.9
    }
  },
  {
    id: "neural-studio",
    name: "Neural Studio",
    description: "Neural network design and experimentation",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiActivity, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 263,
      columnNumber: 9
    }, this),
    color: "bg-blue-400",
    type: "pattern",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.9,
      memoryDensity: 0.7,
      connectionWeight: 0.95
    }
  },
  {
    id: "architecture-space",
    name: "Architecture Space",
    description: "System architecture and design thinking",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiLayers, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 279,
      columnNumber: 9
    }, this),
    color: "bg-blue-400",
    type: "concept",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.8,
      memoryDensity: 0.6,
      connectionWeight: 0.8
    }
  },
  // Level 2 - Sub-rooms (Other areas) - abbreviated for brevity
  {
    id: "data-canvas",
    name: "Data Canvas",
    description: "Raw data visualization and exploration",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiEye, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 297,
      columnNumber: 9
    }, this),
    color: "bg-purple-400",
    type: "room",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.7,
      memoryDensity: 0.6,
      connectionWeight: 0.7
    }
  },
  {
    id: "concept-mapper",
    name: "Concept Mapper",
    description: "Conceptual mapping and relationship visualization",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiGitBranch, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 313,
      columnNumber: 9
    }, this),
    color: "bg-purple-400",
    type: "concept",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.9,
      memoryDensity: 0.8,
      connectionWeight: 0.85
    }
  },
  {
    id: "flow-visualizer",
    name: "Flow Visualizer",
    description: "Process flow and temporal pattern visualization",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiTrendingUp, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 329,
      columnNumber: 9
    }, this),
    color: "bg-purple-400",
    type: "pattern",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.85,
      memoryDensity: 0.7,
      connectionWeight: 0.8
    }
  },
  {
    id: "insight-gallery",
    name: "Insight Gallery",
    description: "Gallery of insights and discoveries",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiDatabase, { size: 20 }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 345,
      columnNumber: 9
    }, this),
    color: "bg-purple-400",
    type: "memory",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: {
      isInferenceEnabled: true,
      patternStrength: 0.75,
      memoryDensity: 0.9,
      connectionWeight: 0.8
    }
  }
  // Add more level 2 nodes as needed...
];
var DeepTreeEchoHomeMap = ({
  onRoomSelect,
  onInferenceRequest
}) => {
  _s();
  const [selectedRoom, setSelectedRoom] = (0, import_react.useState)("echo-home-root");
  const [navigationStack, setNavigationStack] = (0, import_react.useState)(["echo-home-root"]);
  const [showInfo, setShowInfo] = (0, import_react.useState)(false);
  const [expandedNodes, setExpandedNodes] = (0, import_react.useState)(/* @__PURE__ */ new Set(["echo-home-root"]));
  const [viewMode, setViewMode] = (0, import_react.useState)("tree");
  const [inference, setInference] = (0, import_react.useState)(null);
  const [isInferenceLoading, setIsInferenceLoading] = (0, import_react.useState)(false);
  const currentNode = TREE_NODES.find((node) => node.id === selectedRoom);
  const children = TREE_NODES.filter((node) => node.parent === selectedRoom);
  const parentNode = currentNode?.parent ? TREE_NODES.find((node) => node.id === currentNode.parent) : null;
  const rootPath = getCurrentPath(selectedRoom);
  function getCurrentPath(roomId) {
    const path = [];
    let current = TREE_NODES.find((node) => node.id === roomId);
    while (current) {
      path.unshift(current);
      current = current.parent ? TREE_NODES.find((node) => node.id === current.parent) : void 0;
    }
    return path;
  }
  const handleRoomClick = (roomId) => {
    if (roomId !== selectedRoom) {
      setNavigationStack((prev) => [...prev, roomId]);
      setSelectedRoom(roomId);
      if (onRoomSelect) {
        onRoomSelect(roomId);
      }
      const node = TREE_NODES.find((n) => n.id === roomId);
      if (node && node.children.length > 0) {
        setExpandedNodes((prev) => /* @__PURE__ */ new Set([...prev, roomId]));
      }
    }
  };
  const handleBackClick = () => {
    if (navigationStack.length > 1) {
      const newStack = navigationStack.slice(0, -1);
      const previousRoom = newStack[newStack.length - 1];
      setNavigationStack(newStack);
      setSelectedRoom(previousRoom);
      if (onRoomSelect) {
        onRoomSelect(previousRoom);
      }
    }
  };
  const toggleNodeExpanded = (nodeId) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };
  const handleInferenceRequest = async (roomId) => {
    if (!onInferenceRequest)
      return;
    setIsInferenceLoading(true);
    try {
      const result = await onInferenceRequest(roomId, `Analyze patterns and insights for ${roomId}`);
      setInference(result);
    } catch (error) {
      console.error("Inference request failed:", error);
    } finally {
      setIsInferenceLoading(false);
    }
  };
  const getNodeTypeIcon = (type) => {
    switch (type) {
      case "memory":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiActivity, { size: 16, className: "text-indigo-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 437,
          columnNumber: 16
        }, this);
      case "concept":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiLayers, { size: 16, className: "text-blue-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 439,
          columnNumber: 16
        }, this);
      case "pattern":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiTrendingUp, { size: 16, className: "text-purple-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 441,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiHome, { size: 16, className: "text-gray-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 443,
          columnNumber: 16
        }, this);
    }
  };
  const renderTreeView = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 rounded-lg p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiGitBranch, { className: "mr-2" }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 449,
        columnNumber: 11
      }, this),
      "Deep Tree Structure"
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 448,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeNodeRenderer, { node: TREE_NODES.find((n) => n.id === "echo-home-root"), level: 0, expandedNodes, selectedRoom, onToggleExpanded: toggleNodeExpanded, onNodeClick: handleRoomClick, onInferenceRequest: handleInferenceRequest }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 452,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 447,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 446,
    columnNumber: 32
  }, this);
  const renderMapView = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
    currentNode && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "bg-card/30 rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-full ${currentNode.color} mr-4`, children: currentNode.icon }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 466,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold", children: currentNode.name }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 470,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 mt-1", children: currentNode.description }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 471,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2 space-x-2", children: [
              getNodeTypeIcon(currentNode.type),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs uppercase tracking-wide opacity-60", children: currentNode.type }, void 0, false, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 474,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs opacity-50", children: "\u2022" }, void 0, false, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 475,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs opacity-60", children: [
                "Level ",
                currentNode.level
              ] }, void 0, true, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 476,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 472,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 469,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 465,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleInferenceRequest(selectedRoom), disabled: isInferenceLoading, className: "px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm hover:bg-purple-500/30 disabled:opacity-50", children: isInferenceLoading ? "Analyzing..." : "Analyze" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 480,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 464,
        columnNumber: 11
      }, this),
      currentNode.metadata && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Pattern Strength" }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 488,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-purple-500 rounded-full transition-all duration-300", style: {
              width: `${(currentNode.metadata.patternStrength || 0) * 100}%`
            } }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 491,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 490,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs", children: [
              Math.round((currentNode.metadata.patternStrength || 0) * 100),
              "%"
            ] }, void 0, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 495,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 489,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 487,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Memory Density" }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 499,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-indigo-500 rounded-full transition-all duration-300", style: {
              width: `${(currentNode.metadata.memoryDensity || 0) * 100}%`
            } }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 502,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 501,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs", children: [
              Math.round((currentNode.metadata.memoryDensity || 0) * 100),
              "%"
            ] }, void 0, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 506,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 500,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 498,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Connection Weight" }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 510,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 bg-cyan-500 rounded-full transition-all duration-300", style: {
              width: `${(currentNode.metadata.connectionWeight || 0) * 100}%`
            } }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 513,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 512,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs", children: [
              Math.round((currentNode.metadata.connectionWeight || 0) * 100),
              "%"
            ] }, void 0, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 517,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 511,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 509,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 486,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 457,
      columnNumber: 23
    }, this),
    children.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: "Sub-Nodes" }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 525,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { whileHover: {
        scale: 1.02
      }, whileTap: {
        scale: 0.98
      }, onClick: () => handleRoomClick(child.id), className: "cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 ${child.color}` }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 532,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-2 rounded-full ${child.color}/20 mr-3`, children: child.icon }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 535,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: child.name }, void 0, false, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 539,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
                getNodeTypeIcon(child.type),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs opacity-60 ml-1", children: child.type }, void 0, false, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 542,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 540,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 538,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 534,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 line-clamp-2", children: child.description }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 546,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 533,
          columnNumber: 17
        }, this)
      ] }, child.id, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 527,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 526,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 524,
      columnNumber: 31
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 455,
    columnNumber: 31
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-none h-16 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
        selectedRoom !== "echo-home-root" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleBackClick, className: "p-2 hover:bg-primary/20 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiArrowLeft, { size: 18 }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 557,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 556,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: currentNode?.name || "Deep Tree Echo Home" }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 560,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-60", children: rootPath.map((node) => node.name).join(" \u2192 ") }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 561,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 559,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 555,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-card border border-border rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewMode("tree"), className: `p-2 ${viewMode === "tree" ? "bg-primary/20 text-primary" : "hover:bg-primary/20"} rounded-l-md`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiGitBranch, { size: 16 }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 569,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 568,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewMode("map"), className: `p-2 ${viewMode === "map" ? "bg-primary/20 text-primary" : "hover:bg-primary/20"} rounded-r-md`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiLayers, { size: 16 }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 572,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 571,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 567,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowInfo(!showInfo), className: `p-2 rounded-md ${showInfo ? "bg-primary/20 text-primary" : "hover:bg-primary/20"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiInfo, { size: 18 }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 576,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 575,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 566,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 554,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-auto p-4 space-y-4", children: [
      showInfo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: -10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Deep Tree Echo Home" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 590,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: "Navigate through the hierarchical cognitive architecture where each room contains specialized sub-rooms. The inference engine analyzes patterns and provides insights based on your current location in the tree structure." }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 591,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 583,
        columnNumber: 22
      }, this),
      viewMode === "tree" ? renderTreeView() : renderMapView(),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: inference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -20
      }, className: "bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiActivity, { className: "mr-2 text-purple-400" }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, this),
          "Inference Results",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded", children: [
            Math.round(inference.confidence * 100),
            "% confidence"
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 614,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 611,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-sm mb-1", children: "Reasoning:" }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 621,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: inference.reasoning }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 622,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 620,
            columnNumber: 17
          }, this),
          inference.patterns.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-sm mb-1", children: "Detected Patterns:" }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 626,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-1", children: inference.patterns.map((pattern, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded", children: pattern }, i, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 628,
              columnNumber: 63
            }, this)) }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 627,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 625,
            columnNumber: 51
          }, this),
          inference.nextActions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-sm mb-1", children: "Suggested Actions:" }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 635,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm opacity-80 space-y-1", children: inference.nextActions.map((action, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiChevronRight, { size: 12, className: "mt-1 mr-1 text-cyan-400" }, void 0, false, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 638,
                columnNumber: 27
              }, this),
              action
            ] }, i, true, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 637,
              columnNumber: 65
            }, this)) }, void 0, false, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 636,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 634,
            columnNumber: 54
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 619,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 601,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 600,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 582,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 552,
    columnNumber: 10
  }, this);
};
_s(DeepTreeEchoHomeMap, "4fJQIYXXXOzU14rTSHMBVacCY+o=");
_c = DeepTreeEchoHomeMap;
var TreeNodeRenderer = ({
  node,
  level,
  expandedNodes,
  selectedRoom,
  onToggleExpanded,
  onNodeClick,
  onInferenceRequest
}) => {
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedRoom === node.id;
  const children = TREE_NODES.filter((n) => n.parent === node.id);
  const hasChildren = children.length > 0;
  const getNodeTypeIcon = (type) => {
    switch (type) {
      case "memory":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiActivity, { size: 14, className: "text-indigo-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 669,
          columnNumber: 16
        }, this);
      case "concept":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiLayers, { size: 14, className: "text-blue-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 671,
          columnNumber: 16
        }, this);
      case "pattern":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiTrendingUp, { size: 14, className: "text-purple-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 673,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiHome, { size: 14, className: "text-gray-400" }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 675,
          columnNumber: 16
        }, this);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `ml-${level * 4}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center p-2 rounded-md cursor-pointer hover:bg-card/50 ${isSelected ? "bg-card/70 border border-primary/30" : ""}`, onClick: () => onNodeClick(node.id), children: [
      hasChildren && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: (e) => {
        e.stopPropagation();
        onToggleExpanded(node.id);
      }, className: "mr-2 p-1 hover:bg-primary/20 rounded", children: isExpanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiChevronDown, { size: 12 }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 684,
        columnNumber: 27
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiChevronRight, { size: 12 }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 684,
        columnNumber: 57
      }, this) }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 680,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-1.5 rounded-full ${node.color}/20 mr-2`, children: React.cloneElement(node.icon, {
        size: 16
      }) }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 687,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: node.name }, void 0, false, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 694,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
          getNodeTypeIcon(node.type),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs opacity-60 ml-1", children: node.type }, void 0, false, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 697,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 695,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 693,
        columnNumber: 9
      }, this),
      node.metadata?.isInferenceEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: (e) => {
        e.stopPropagation();
        onInferenceRequest(node.id);
      }, className: "ml-2 p-1 text-purple-400 hover:bg-purple-500/20 rounded", title: "Run inference", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiZap, { size: 12 }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 705,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 701,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 679,
      columnNumber: 7
    }, this),
    hasChildren && isExpanded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 mt-1", children: children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreeNodeRenderer, { node: child, level: level + 1, expandedNodes, selectedRoom, onToggleExpanded, onNodeClick, onInferenceRequest }, child.id, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 710,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 709,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 678,
    columnNumber: 10
  }, this);
};
_c2 = TreeNodeRenderer;
var DeepTreeEchoHomeMap_default = DeepTreeEchoHomeMap;
var _c;
var _c2;
$RefreshReg$(_c, "DeepTreeEchoHomeMap");
$RefreshReg$(_c2, "TreeNodeRenderer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/deep-tree-echo.tsx
var import_inferenceEngine = __toESM(require_inferenceEngine(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/deep-tree-echo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/deep-tree-echo.tsx"
  );
  import.meta.hot.lastModified = "1760695280618.8047";
}
function DeepTreeEchoHomePage() {
  _s2();
  const {
    title,
    description,
    initialRoom
  } = useLoaderData();
  const submit = useSubmit();
  const [activeRoom, setActiveRoom] = (0, import_react3.useState)(initialRoom);
  const [inferenceHistory, setInferenceHistory] = (0, import_react3.useState)([]);
  const handleRoomSelect = (room) => {
    setActiveRoom(room);
    window.history.pushState({}, "", `/deep-tree-echo?room=${room}`);
  };
  const handleInferenceRequest = async (room, query) => {
    const formData = new FormData();
    formData.append("room", room);
    formData.append("query", query);
    return new Promise((resolve, reject) => {
      submit(formData, {
        method: "POST",
        action: `/deep-tree-echo`,
        onError: (error) => {
          console.error("Inference request failed:", error);
          reject(error);
        },
        onSuccess: (data) => {
          if (data.error) {
            reject(new Error(data.error));
            return;
          }
          setInferenceHistory((prev) => [{
            room: data.nodeInfo?.name || room,
            query,
            result: data.inference,
            timestamp: /* @__PURE__ */ new Date()
          }, ...prev.slice(0, 9)]);
          const result = {
            reasoning: data.inference.reasoning,
            confidence: data.inference.confidence,
            patterns: data.inference.patterns,
            predictions: data.inference.predictions,
            nextActions: data.inference.nextActions,
            treeContext: data.inference.treeContext
          };
          resolve(result);
        }
      });
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent", children: title }, void 0, false, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-3 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full", children: "with Inference Engine" }, void 0, false, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm opacity-70 mt-1", children: description }, void 0, false, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm opacity-70", children: "Active Room" }, void 0, false, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-medium text-primary", children: activeRoom }, void 0, false, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeepTreeEchoHomeMap_default, { onRoomSelect: handleRoomSelect, onInferenceRequest: handleInferenceRequest }, void 0, false, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      inferenceHistory.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("aside", { className: "w-80 bg-card/50 border-l border-border overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Inference History" }, void 0, false, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-3", children: inferenceHistory.map((entry, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-card/80 rounded-lg p-3 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-medium text-purple-400", children: entry.room }, void 0, false, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 190,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs opacity-50", children: entry.timestamp.toLocaleTimeString() }, void 0, false, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 191,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 189,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs opacity-70 mb-2", children: [
            "Query: ",
            entry.query
          ] }, void 0, true, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 195,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs opacity-60", children: [
            "Confidence: ",
            Math.round(entry.result.confidence * 100),
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 198,
            columnNumber: 21
          }, this),
          entry.result.patterns && entry.result.patterns.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-wrap gap-1", children: [
            entry.result.patterns.slice(0, 2).map((pattern, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded", children: pattern }, i, false, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 202,
              columnNumber: 80
            }, this)),
            entry.result.patterns.length > 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs opacity-50", children: [
              "+",
              entry.result.patterns.length - 2,
              " more"
            ] }, void 0, true, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 205,
              columnNumber: 62
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 201,
            columnNumber: 83
          }, this)
        ] }, index, true, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 188,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 187,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 184,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-card text-card-foreground px-6 py-3 border-t border-border text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          "Current location: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-primary", children: activeRoom }, void 0, false, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 218,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-green-500 mr-2" }, void 0, false, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "opacity-70", children: "Inference Engine Active" }, void 0, false, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "opacity-70", children: [
        "Deep Tree Echo \u2022 Hierarchical Cognitive Architecture \u2022 ",
        inferenceHistory.length,
        " inferences performed"
      ] }, void 0, true, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/deep-tree-echo.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_s2(DeepTreeEchoHomePage, "z8RDvGI/F3pefx4UE6jVnZ32Qd0=", false, function() {
  return [useLoaderData, useSubmit];
});
_c3 = DeepTreeEchoHomePage;
var _c3;
$RefreshReg$(_c3, "DeepTreeEchoHomePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DeepTreeEchoHomePage as default
};
//# sourceMappingURL=/build/routes/deep-tree-echo-LK6YCYHD.js.map
