var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      children,
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/routes/deep-tree-echo.tsx
var deep_tree_echo_exports = {};
__export(deep_tree_echo_exports, {
  action: () => action,
  default: () => DeepTreeEchoHomePage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useState as useState2 } from "react";

// app/components/DeepTreeEchoHomeMap.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBook,
  FiCode,
  FiCpu,
  FiDatabase,
  FiMessageCircle,
  FiFeather,
  FiEye,
  FiArrowLeft,
  FiInfo,
  FiChevronRight,
  FiChevronDown,
  FiHome,
  FiGitBranch,
  FiLayers,
  FiActivity,
  FiZap,
  FiTrendingUp
} from "react-icons/fi";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var TREE_NODES = [
  // Root node
  {
    id: "echo-home-root",
    name: "Echo Home Root",
    description: "The central root of the Deep Tree Echo Home cognitive architecture",
    icon: /* @__PURE__ */ jsxDEV3(FiHome, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    color: "bg-purple-600",
    type: "room",
    children: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"],
    level: 0,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 1 }
  },
  // Level 1 - Main rooms
  {
    id: "memory-library",
    name: "Memory Library",
    description: "Repository of stored experiences, knowledge, and learned patterns",
    icon: /* @__PURE__ */ jsxDEV3(FiBook, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    color: "bg-indigo-500",
    type: "memory",
    parent: "echo-home-root",
    children: ["episodic-vault", "semantic-archive", "procedural-workshop", "associative-web"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.8, memoryDensity: 0.95, connectionWeight: 0.9 }
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Creative space for coding, development, and technical implementation",
    icon: /* @__PURE__ */ jsxDEV3(FiCode, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this),
    color: "bg-blue-500",
    type: "room",
    parent: "echo-home-root",
    children: ["code-forge", "pattern-lab", "neural-studio", "architecture-space"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.7, memoryDensity: 0.6, connectionWeight: 0.8 }
  },
  {
    id: "visualization-studio",
    name: "Visualization Studio",
    description: "Transforms abstract data into insightful visual representations",
    icon: /* @__PURE__ */ jsxDEV3(FiEye, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this),
    color: "bg-purple-500",
    type: "pattern",
    parent: "echo-home-root",
    children: ["data-canvas", "concept-mapper", "flow-visualizer", "insight-gallery"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.85, memoryDensity: 0.7, connectionWeight: 0.75 }
  },
  {
    id: "training-hall",
    name: "Training Hall",
    description: "Where echo state networks and neural architectures are refined",
    icon: /* @__PURE__ */ jsxDEV3(FiCpu, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, this),
    color: "bg-red-500",
    type: "pattern",
    parent: "echo-home-root",
    children: ["esn-gymnasium", "pattern-dojo", "learning-arena", "adaptation-chamber"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 0.95 }
  },
  {
    id: "observatory",
    name: "Observatory",
    description: "Space for insights, analytics, and meta-cognitive reflection",
    icon: /* @__PURE__ */ jsxDEV3(FiDatabase, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    color: "bg-yellow-500",
    type: "concept",
    parent: "echo-home-root",
    children: ["insight-telescope", "analytics-hub", "reflection-mirror", "metacognition-center"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.75, memoryDensity: 0.85, connectionWeight: 0.8 }
  },
  {
    id: "garden",
    name: "Garden",
    description: "Nurtures creative and philosophical thinking through organic growth patterns",
    icon: /* @__PURE__ */ jsxDEV3(FiFeather, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    color: "bg-green-500",
    type: "concept",
    parent: "echo-home-root",
    children: ["philosophy-grove", "creativity-meadow", "synthesis-garden", "emergence-forest"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.6, memoryDensity: 0.9, connectionWeight: 0.7 }
  },
  {
    id: "communications-hub",
    name: "Communications Hub",
    description: "Central nexus for information exchange and conversation",
    icon: /* @__PURE__ */ jsxDEV3(FiMessageCircle, { size: 24 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this),
    color: "bg-cyan-500",
    type: "room",
    parent: "echo-home-root",
    children: ["dialogue-chamber", "feedback-loop", "integration-nexus", "broadcast-tower"],
    level: 1,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.8, memoryDensity: 0.75, connectionWeight: 0.85 }
  },
  // Level 2 - Sub-rooms (Memory Library)
  {
    id: "episodic-vault",
    name: "Episodic Vault",
    description: "Personal experiences and autobiographical memories",
    icon: /* @__PURE__ */ jsxDEV3(FiActivity, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 174,
      columnNumber: 11
    }, this),
    color: "bg-indigo-400",
    type: "memory",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.7, memoryDensity: 1, connectionWeight: 0.8 }
  },
  {
    id: "semantic-archive",
    name: "Semantic Archive",
    description: "Facts, concepts, and general knowledge",
    icon: /* @__PURE__ */ jsxDEV3(FiLayers, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 186,
      columnNumber: 11
    }, this),
    color: "bg-indigo-400",
    type: "concept",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.8, memoryDensity: 0.9, connectionWeight: 0.85 }
  },
  {
    id: "procedural-workshop",
    name: "Procedural Workshop",
    description: "Skills, procedures, and how-to knowledge",
    icon: /* @__PURE__ */ jsxDEV3(FiGitBranch, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 198,
      columnNumber: 11
    }, this),
    color: "bg-indigo-400",
    type: "pattern",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.9, memoryDensity: 0.7, connectionWeight: 0.9 }
  },
  {
    id: "associative-web",
    name: "Associative Web",
    description: "Connected ideas and conceptual relationships",
    icon: /* @__PURE__ */ jsxDEV3(FiZap, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 210,
      columnNumber: 11
    }, this),
    color: "bg-indigo-400",
    type: "concept",
    parent: "memory-library",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.95, memoryDensity: 0.8, connectionWeight: 0.95 }
  },
  // Level 2 - Sub-rooms (Workshop)
  {
    id: "code-forge",
    name: "Code Forge",
    description: "Software development and coding environment",
    icon: /* @__PURE__ */ jsxDEV3(FiCode, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 224,
      columnNumber: 11
    }, this),
    color: "bg-blue-400",
    type: "room",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.6, memoryDensity: 0.5, connectionWeight: 0.7 }
  },
  {
    id: "pattern-lab",
    name: "Pattern Lab",
    description: "Pattern analysis and recognition laboratory",
    icon: /* @__PURE__ */ jsxDEV3(FiTrendingUp, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 236,
      columnNumber: 11
    }, this),
    color: "bg-blue-400",
    type: "pattern",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.95, memoryDensity: 0.8, connectionWeight: 0.9 }
  },
  {
    id: "neural-studio",
    name: "Neural Studio",
    description: "Neural network design and experimentation",
    icon: /* @__PURE__ */ jsxDEV3(FiActivity, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 248,
      columnNumber: 11
    }, this),
    color: "bg-blue-400",
    type: "pattern",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.9, memoryDensity: 0.7, connectionWeight: 0.95 }
  },
  {
    id: "architecture-space",
    name: "Architecture Space",
    description: "System architecture and design thinking",
    icon: /* @__PURE__ */ jsxDEV3(FiLayers, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 260,
      columnNumber: 11
    }, this),
    color: "bg-blue-400",
    type: "concept",
    parent: "workshop",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.8, memoryDensity: 0.6, connectionWeight: 0.8 }
  },
  // Level 2 - Sub-rooms (Other areas) - abbreviated for brevity
  {
    id: "data-canvas",
    name: "Data Canvas",
    description: "Raw data visualization and exploration",
    icon: /* @__PURE__ */ jsxDEV3(FiEye, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 274,
      columnNumber: 11
    }, this),
    color: "bg-purple-400",
    type: "room",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.7, memoryDensity: 0.6, connectionWeight: 0.7 }
  },
  {
    id: "concept-mapper",
    name: "Concept Mapper",
    description: "Conceptual mapping and relationship visualization",
    icon: /* @__PURE__ */ jsxDEV3(FiGitBranch, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 286,
      columnNumber: 11
    }, this),
    color: "bg-purple-400",
    type: "concept",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 0.85 }
  },
  {
    id: "flow-visualizer",
    name: "Flow Visualizer",
    description: "Process flow and temporal pattern visualization",
    icon: /* @__PURE__ */ jsxDEV3(FiTrendingUp, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 298,
      columnNumber: 11
    }, this),
    color: "bg-purple-400",
    type: "pattern",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.85, memoryDensity: 0.7, connectionWeight: 0.8 }
  },
  {
    id: "insight-gallery",
    name: "Insight Gallery",
    description: "Gallery of insights and discoveries",
    icon: /* @__PURE__ */ jsxDEV3(FiDatabase, { size: 20 }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 310,
      columnNumber: 11
    }, this),
    color: "bg-purple-400",
    type: "memory",
    parent: "visualization-studio",
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: !0, patternStrength: 0.75, memoryDensity: 0.9, connectionWeight: 0.8 }
  }
  // Add more level 2 nodes as needed...
], DeepTreeEchoHomeMap = ({
  onRoomSelect,
  onInferenceRequest
}) => {
  let [selectedRoom, setSelectedRoom] = useState("echo-home-root"), [navigationStack, setNavigationStack] = useState(["echo-home-root"]), [showInfo, setShowInfo] = useState(!1), [expandedNodes, setExpandedNodes] = useState(/* @__PURE__ */ new Set(["echo-home-root"])), [viewMode, setViewMode] = useState("tree"), [inference, setInference] = useState(null), [isInferenceLoading, setIsInferenceLoading] = useState(!1), currentNode = TREE_NODES.find((node) => node.id === selectedRoom), children = TREE_NODES.filter((node) => node.parent === selectedRoom), parentNode = currentNode?.parent ? TREE_NODES.find((node) => node.id === currentNode.parent) : null, rootPath = getCurrentPath(selectedRoom);
  function getCurrentPath(roomId) {
    let path = [], current = TREE_NODES.find((node) => node.id === roomId);
    for (; current; )
      path.unshift(current), current = current.parent ? TREE_NODES.find((node) => node.id === current.parent) : void 0;
    return path;
  }
  let handleRoomClick = (roomId) => {
    if (roomId !== selectedRoom) {
      setNavigationStack((prev) => [...prev, roomId]), setSelectedRoom(roomId), onRoomSelect && onRoomSelect(roomId);
      let node = TREE_NODES.find((n) => n.id === roomId);
      node && node.children.length > 0 && setExpandedNodes((prev) => /* @__PURE__ */ new Set([...prev, roomId]));
    }
  }, handleBackClick = () => {
    if (navigationStack.length > 1) {
      let newStack = navigationStack.slice(0, -1), previousRoom = newStack[newStack.length - 1];
      setNavigationStack(newStack), setSelectedRoom(previousRoom), onRoomSelect && onRoomSelect(previousRoom);
    }
  }, toggleNodeExpanded = (nodeId) => {
    setExpandedNodes((prev) => {
      let newSet = new Set(prev);
      return newSet.has(nodeId) ? newSet.delete(nodeId) : newSet.add(nodeId), newSet;
    });
  }, handleInferenceRequest = async (roomId) => {
    if (onInferenceRequest) {
      setIsInferenceLoading(!0);
      try {
        let result = await onInferenceRequest(roomId, `Analyze patterns and insights for ${roomId}`);
        setInference(result);
      } catch (error) {
        console.error("Inference request failed:", error);
      } finally {
        setIsInferenceLoading(!1);
      }
    }
  }, getNodeTypeIcon = (type) => {
    switch (type) {
      case "memory":
        return /* @__PURE__ */ jsxDEV3(FiActivity, { size: 16, className: "text-indigo-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 411,
          columnNumber: 29
        }, this);
      case "concept":
        return /* @__PURE__ */ jsxDEV3(FiLayers, { size: 16, className: "text-blue-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 412,
          columnNumber: 30
        }, this);
      case "pattern":
        return /* @__PURE__ */ jsxDEV3(FiTrendingUp, { size: 16, className: "text-purple-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 413,
          columnNumber: 30
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV3(FiHome, { size: 16, className: "text-gray-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 414,
          columnNumber: 23
        }, this);
    }
  }, renderTreeView = () => /* @__PURE__ */ jsxDEV3("div", { className: "space-y-4", children: /* @__PURE__ */ jsxDEV3("div", { className: "bg-card/30 rounded-lg p-4", children: [
    /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-semibold mb-4 flex items-center", children: [
      /* @__PURE__ */ jsxDEV3(FiGitBranch, { className: "mr-2" }, void 0, !1, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 422,
        columnNumber: 11
      }, this),
      "Deep Tree Structure"
    ] }, void 0, !0, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 421,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(
      TreeNodeRenderer,
      {
        node: TREE_NODES.find((n) => n.id === "echo-home-root"),
        level: 0,
        expandedNodes,
        selectedRoom,
        onToggleExpanded: toggleNodeExpanded,
        onNodeClick: handleRoomClick,
        onInferenceRequest: handleInferenceRequest
      },
      void 0,
      !1,
      {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 425,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 420,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 419,
    columnNumber: 5
  }, this), renderMapView = () => /* @__PURE__ */ jsxDEV3("div", { className: "space-y-4", children: [
    currentNode && /* @__PURE__ */ jsxDEV3(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "bg-card/30 rounded-lg p-6",
        children: [
          /* @__PURE__ */ jsxDEV3("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: `p-3 rounded-full ${currentNode.color} mr-4`, children: currentNode.icon }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 449,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("h2", { className: "text-xl font-semibold", children: currentNode.name }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 453,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-sm opacity-70 mt-1", children: currentNode.description }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 454,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-2 space-x-2", children: [
                  getNodeTypeIcon(currentNode.type),
                  /* @__PURE__ */ jsxDEV3("span", { className: "text-xs uppercase tracking-wide opacity-60", children: currentNode.type }, void 0, !1, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 457,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV3("span", { className: "text-xs opacity-50", children: "\u2022" }, void 0, !1, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 458,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV3("span", { className: "text-xs opacity-60", children: [
                    "Level ",
                    currentNode.level
                  ] }, void 0, !0, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 459,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 455,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 452,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 448,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3(
              "button",
              {
                onClick: () => handleInferenceRequest(selectedRoom),
                disabled: isInferenceLoading,
                className: "px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm hover:bg-purple-500/30 disabled:opacity-50",
                children: isInferenceLoading ? "Analyzing..." : "Analyze"
              },
              void 0,
              !1,
              {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 463,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 447,
            columnNumber: 11
          }, this),
          currentNode.metadata && /* @__PURE__ */ jsxDEV3("div", { className: "mt-4 grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "bg-card/50 p-2 rounded", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "text-xs opacity-70", children: "Pattern Strength" }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 476,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-1", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ jsxDEV3(
                  "div",
                  {
                    className: "h-1.5 bg-purple-500 rounded-full transition-all duration-300",
                    style: { width: `${(currentNode.metadata.patternStrength || 0) * 100}%` }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 479,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 478,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { className: "text-xs", children: [
                  Math.round((currentNode.metadata.patternStrength || 0) * 100),
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 484,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 477,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 475,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "bg-card/50 p-2 rounded", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "text-xs opacity-70", children: "Memory Density" }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 488,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-1", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ jsxDEV3(
                  "div",
                  {
                    className: "h-1.5 bg-indigo-500 rounded-full transition-all duration-300",
                    style: { width: `${(currentNode.metadata.memoryDensity || 0) * 100}%` }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 491,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 490,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { className: "text-xs", children: [
                  Math.round((currentNode.metadata.memoryDensity || 0) * 100),
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 496,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 489,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 487,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "bg-card/50 p-2 rounded", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "text-xs opacity-70", children: "Connection Weight" }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 500,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-1", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "h-1.5 bg-gray-700 rounded-full flex-1 mr-2", children: /* @__PURE__ */ jsxDEV3(
                  "div",
                  {
                    className: "h-1.5 bg-cyan-500 rounded-full transition-all duration-300",
                    style: { width: `${(currentNode.metadata.connectionWeight || 0) * 100}%` }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 503,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 502,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { className: "text-xs", children: [
                  Math.round((currentNode.metadata.connectionWeight || 0) * 100),
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 508,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 501,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 499,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 474,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 442,
        columnNumber: 9
      },
      this
    ),
    children.length > 0 && /* @__PURE__ */ jsxDEV3("div", { children: [
      /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-semibold mb-3", children: "Sub-Nodes" }, void 0, !1, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 519,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: children.map((child) => /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          onClick: () => handleRoomClick(child.id),
          className: "cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border",
          children: [
            /* @__PURE__ */ jsxDEV3("div", { className: `h-2 ${child.color}` }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 529,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: `p-2 rounded-full ${child.color}/20 mr-3`, children: child.icon }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 532,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { children: [
                  /* @__PURE__ */ jsxDEV3("h4", { className: "font-medium", children: child.name }, void 0, !1, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 536,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-1", children: [
                    getNodeTypeIcon(child.type),
                    /* @__PURE__ */ jsxDEV3("span", { className: "text-xs opacity-60 ml-1", children: child.type }, void 0, !1, {
                      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                      lineNumber: 539,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 537,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 535,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 531,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV3("p", { className: "text-sm opacity-70 line-clamp-2", children: child.description }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 543,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 530,
              columnNumber: 17
            }, this)
          ]
        },
        child.id,
        !0,
        {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 522,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 520,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 518,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 439,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV3("div", { className: "h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "flex-none h-16 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center space-x-3", children: [
        selectedRoom !== "echo-home-root" && /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: handleBackClick,
            className: "p-2 hover:bg-primary/20 rounded-md",
            children: /* @__PURE__ */ jsxDEV3(FiArrowLeft, { size: 18 }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 563,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 559,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3("div", { children: [
          /* @__PURE__ */ jsxDEV3("div", { className: "font-medium", children: currentNode?.name || "Deep Tree Echo Home" }, void 0, !1, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 567,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "text-xs opacity-60", children: rootPath.map((node) => node.name).join(" \u2192 ") }, void 0, !1, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 568,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 566,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 557,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex bg-card border border-border rounded-md", children: [
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              onClick: () => setViewMode("tree"),
              className: `p-2 ${viewMode === "tree" ? "bg-primary/20 text-primary" : "hover:bg-primary/20"} rounded-l-md`,
              children: /* @__PURE__ */ jsxDEV3(FiGitBranch, { size: 16 }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 579,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 575,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              onClick: () => setViewMode("map"),
              className: `p-2 ${viewMode === "map" ? "bg-primary/20 text-primary" : "hover:bg-primary/20"} rounded-r-md`,
              children: /* @__PURE__ */ jsxDEV3(FiLayers, { size: 16 }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 585,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 581,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 574,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "button",
          {
            onClick: () => setShowInfo(!showInfo),
            className: `p-2 rounded-md ${showInfo ? "bg-primary/20 text-primary" : "hover:bg-primary/20"}`,
            children: /* @__PURE__ */ jsxDEV3(FiInfo, { size: 18 }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 592,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 588,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 573,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 556,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 overflow-auto p-4 space-y-4", children: [
      showInfo && /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-border",
          children: [
            /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-semibold mb-2", children: "Deep Tree Echo Home" }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 605,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-sm opacity-80", children: "Navigate through the hierarchical cognitive architecture where each room contains specialized sub-rooms. The inference engine analyzes patterns and provides insights based on your current location in the tree structure." }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 606,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 600,
          columnNumber: 11
        },
        this
      ),
      viewMode === "tree" ? renderTreeView() : renderMapView(),
      /* @__PURE__ */ jsxDEV3(AnimatePresence, { children: inference && /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          className: "bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30",
          children: [
            /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
              /* @__PURE__ */ jsxDEV3(FiActivity, { className: "mr-2 text-purple-400" }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 625,
                columnNumber: 17
              }, this),
              "Inference Results",
              /* @__PURE__ */ jsxDEV3("span", { className: "ml-2 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded", children: [
                Math.round(inference.confidence * 100),
                "% confidence"
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 627,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 624,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("h4", { className: "font-medium text-sm mb-1", children: "Reasoning:" }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 634,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-sm opacity-80", children: inference.reasoning }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 635,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 633,
                columnNumber: 17
              }, this),
              inference.patterns.length > 0 && /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("h4", { className: "font-medium text-sm mb-1", children: "Detected Patterns:" }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 640,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-wrap gap-1", children: inference.patterns.map((pattern, i) => /* @__PURE__ */ jsxDEV3("span", { className: "text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded", children: pattern }, i, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 643,
                  columnNumber: 25
                }, this)) }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 641,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 639,
                columnNumber: 19
              }, this),
              inference.nextActions.length > 0 && /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("h4", { className: "font-medium text-sm mb-1", children: "Suggested Actions:" }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 653,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("ul", { className: "text-sm opacity-80 space-y-1", children: inference.nextActions.map((action5, i) => /* @__PURE__ */ jsxDEV3("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxDEV3(FiChevronRight, { size: 12, className: "mt-1 mr-1 text-cyan-400" }, void 0, !1, {
                    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                    lineNumber: 657,
                    columnNumber: 27
                  }, this),
                  action5
                ] }, i, !0, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 656,
                  columnNumber: 25
                }, this)) }, void 0, !1, {
                  fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                  lineNumber: 654,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 652,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 632,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 618,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 616,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 598,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 554,
    columnNumber: 5
  }, this);
}, TreeNodeRenderer = ({
  node,
  level,
  expandedNodes,
  selectedRoom,
  onToggleExpanded,
  onNodeClick,
  onInferenceRequest
}) => {
  let isExpanded = expandedNodes.has(node.id), isSelected = selectedRoom === node.id, children = TREE_NODES.filter((n) => n.parent === node.id), hasChildren = children.length > 0, getNodeTypeIcon = (type) => {
    switch (type) {
      case "memory":
        return /* @__PURE__ */ jsxDEV3(FiActivity, { size: 14, className: "text-indigo-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 700,
          columnNumber: 29
        }, this);
      case "concept":
        return /* @__PURE__ */ jsxDEV3(FiLayers, { size: 14, className: "text-blue-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 701,
          columnNumber: 30
        }, this);
      case "pattern":
        return /* @__PURE__ */ jsxDEV3(FiTrendingUp, { size: 14, className: "text-purple-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 702,
          columnNumber: 30
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV3(FiHome, { size: 14, className: "text-gray-400" }, void 0, !1, {
          fileName: "app/components/DeepTreeEchoHomeMap.tsx",
          lineNumber: 703,
          columnNumber: 23
        }, this);
    }
  };
  return /* @__PURE__ */ jsxDEV3("div", { className: `ml-${level * 4}`, children: [
    /* @__PURE__ */ jsxDEV3(
      "div",
      {
        className: `flex items-center p-2 rounded-md cursor-pointer hover:bg-card/50 ${isSelected ? "bg-card/70 border border-primary/30" : ""}`,
        onClick: () => onNodeClick(node.id),
        children: [
          hasChildren && /* @__PURE__ */ jsxDEV3(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation(), onToggleExpanded(node.id);
              },
              className: "mr-2 p-1 hover:bg-primary/20 rounded",
              children: isExpanded ? /* @__PURE__ */ jsxDEV3(FiChevronDown, { size: 12 }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 723,
                columnNumber: 27
              }, this) : /* @__PURE__ */ jsxDEV3(FiChevronRight, { size: 12 }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 723,
                columnNumber: 57
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 716,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3("div", { className: `p-1.5 rounded-full ${node.color}/20 mr-2`, children: React.cloneElement(node.icon, { size: 16 }) }, void 0, !1, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 727,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "font-medium text-sm", children: node.name }, void 0, !1, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 732,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mt-1", children: [
              getNodeTypeIcon(node.type),
              /* @__PURE__ */ jsxDEV3("span", { className: "text-xs opacity-60 ml-1", children: node.type }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 735,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 733,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/DeepTreeEchoHomeMap.tsx",
            lineNumber: 731,
            columnNumber: 9
          }, this),
          node.metadata?.isInferenceEnabled && /* @__PURE__ */ jsxDEV3(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation(), onInferenceRequest(node.id);
              },
              className: "ml-2 p-1 text-purple-400 hover:bg-purple-500/20 rounded",
              title: "Run inference",
              children: /* @__PURE__ */ jsxDEV3(FiZap, { size: 12 }, void 0, !1, {
                fileName: "app/components/DeepTreeEchoHomeMap.tsx",
                lineNumber: 748,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/DeepTreeEchoHomeMap.tsx",
              lineNumber: 740,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 709,
        columnNumber: 7
      },
      this
    ),
    hasChildren && isExpanded && /* @__PURE__ */ jsxDEV3("div", { className: "ml-4 mt-1", children: children.map((child) => /* @__PURE__ */ jsxDEV3(
      TreeNodeRenderer,
      {
        node: child,
        level: level + 1,
        expandedNodes,
        selectedRoom,
        onToggleExpanded,
        onNodeClick,
        onInferenceRequest
      },
      child.id,
      !1,
      {
        fileName: "app/components/DeepTreeEchoHomeMap.tsx",
        lineNumber: 756,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/DeepTreeEchoHomeMap.tsx",
      lineNumber: 754,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DeepTreeEchoHomeMap.tsx",
    lineNumber: 708,
    columnNumber: 5
  }, this);
}, DeepTreeEchoHomeMap_default = DeepTreeEchoHomeMap;

// app/services/echoStateNetwork.server.ts
import { Matrix } from "ml-matrix";
var EchoStateNetwork = class {
  inputSize;
  reservoirSize;
  outputSize;
  spectralRadius;
  connectivity;
  inputScaling;
  biasScaling;
  leakingRate;
  inputWeights;
  reservoirWeights;
  outputWeights;
  biasWeights;
  reservoirState;
  constructor(config) {
    this.inputSize = config.inputSize, this.reservoirSize = config.reservoirSize, this.outputSize = config.outputSize, this.spectralRadius = config.spectralRadius || 0.99, this.connectivity = config.connectivity || 0.1, this.inputScaling = config.inputScaling || 1, this.biasScaling = config.biasScaling || 0.1, this.leakingRate = config.leakingRate || 1, this.inputWeights = this.initializeInputWeights(), this.reservoirWeights = this.initializeReservoirWeights(), this.outputWeights = null, this.biasWeights = this.initializeBiasWeights(), this.reservoirState = Matrix.zeros(1, this.reservoirSize);
  }
  initializeInputWeights() {
    return Matrix.random(this.reservoirSize, this.inputSize).mul(this.inputScaling);
  }
  initializeReservoirWeights() {
    let weights = Matrix.zeros(this.reservoirSize, this.reservoirSize), totalElements = this.reservoirSize * this.reservoirSize, nonZeroElements = Math.floor(totalElements * this.connectivity);
    for (let i = 0; i < nonZeroElements; i++) {
      let row = Math.floor(Math.random() * this.reservoirSize), col = Math.floor(Math.random() * this.reservoirSize);
      weights.set(row, col, Math.random() * 2 - 1);
    }
    let eigenvalues = weights.eigenvalues(), maxEigenvalue = Math.max(...eigenvalues.map(Math.abs));
    return weights.mul(this.spectralRadius / maxEigenvalue);
  }
  initializeBiasWeights() {
    return Matrix.random(this.reservoirSize, 1).mul(this.biasScaling);
  }
  activate(x) {
    let input = Matrix.columnVector(x), inputContribution = this.inputWeights.mmul(input), reservoirContribution = this.reservoirWeights.mmul(this.reservoirState.transpose()), biasContribution = this.biasWeights, newState = inputContribution.add(reservoirContribution).add(biasContribution).map(Math.tanh);
    this.reservoirState = this.reservoirState.mul(1 - this.leakingRate).add(newState.transpose().mul(this.leakingRate));
  }
  train(inputs, outputs) {
    let stateCollector = [], targetCollector = [];
    for (let i = 0; i < inputs.length; i++)
      this.activate(inputs[i]), stateCollector.push(this.reservoirState.to1DArray()), targetCollector.push(outputs[i]);
    let X = new Matrix(stateCollector), Y = new Matrix(targetCollector), ridge = 1e-6, XtX = X.transpose().mmul(X), I = Matrix.eye(this.reservoirSize, this.reservoirSize).mul(ridge), Xt = X.transpose();
    this.outputWeights = XtX.add(I).inverse().mmul(Xt).mmul(Y);
  }
  predict(input) {
    if (!this.outputWeights)
      throw new Error("Network not trained");
    return this.activate(input), this.reservoirState.mmul(this.outputWeights).to1DArray();
  }
  reset() {
    this.reservoirState = Matrix.zeros(1, this.reservoirSize);
  }
  getState() {
    return this.reservoirState.to1DArray();
  }
  setState(state) {
    if (state.length !== this.reservoirSize)
      throw new Error("Invalid state size");
    this.reservoirState = Matrix.rowVector(state);
  }
}, esnService = null, getESNService = (config) => (!esnService && config && (esnService = new EchoStateNetwork(config)), esnService);

// app/services/memory.server.ts
import { createClient as createClient2 } from "@supabase/supabase-js";
import { OpenAI as OpenAI2 } from "openai";

// app/services/vectorStore.server.ts
import { createClient } from "@supabase/supabase-js";
import { OpenAI } from "openai";
import { HierarchicalNSW } from "hnswlib-node";
var _VectorStoreService = class {
  supabase;
  openai = null;
  localIndex = null;
  constructor() {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY)
      throw new Error("Missing Supabase environment variables");
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    ), process.env.OPENAI_API_KEY && (this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })), this.initializeLocalIndex();
  }
  async initializeLocalIndex() {
    try {
      this.localIndex = new HierarchicalNSW("cosine", 1536), this.localIndex.initIndex(1e4);
    } catch (error) {
      console.error("Error initializing local vector index:", error);
    }
  }
  static getInstance() {
    return _VectorStoreService.instance || (_VectorStoreService.instance = new _VectorStoreService()), _VectorStoreService.instance;
  }
  async generateEmbedding(text) {
    if (!this.openai)
      return console.warn("OpenAI client not initialized"), null;
    try {
      return (await this.openai.embeddings.create({
        model: "text-embedding-3-large",
        input: text,
        dimensions: 1536
      })).data[0].embedding;
    } catch (error) {
      return console.error("Error generating embedding:", error), null;
    }
  }
  async addToVectorStore(userId, content, metadata) {
    let embedding = await this.generateEmbedding(content);
    if (!embedding)
      return !1;
    try {
      let { error } = await this.supabase.from("memories").update({ embedding }).eq("user_id", userId).eq("content", content);
      if (error)
        throw error;
      return this.localIndex && this.localIndex.addPoint(embedding, this.localIndex.getMaxElements()), !0;
    } catch (error) {
      return console.error("Error adding to vector store:", error), !1;
    }
  }
  async searchSimilar(userId, query, options = {}) {
    let embedding = await this.generateEmbedding(query);
    if (!embedding)
      return [];
    let threshold = options.threshold || 0.7, limit = options.limit || 5;
    try {
      let { data, error } = await this.supabase.rpc(
        "match_memories",
        {
          query_embedding: embedding,
          match_threshold: threshold,
          match_count: limit,
          user_id: userId,
          filter_type: options.type
        }
      );
      if (error)
        throw error;
      return data;
    } catch (error) {
      if (console.error("Error searching vector store:", error), this.localIndex)
        try {
          let results = this.localIndex.searchKnn(embedding, limit);
          return results.neighbors.map((id, i) => ({
            id: id.toString(),
            content: "Local result",
            similarity: 1 - results.distances[i]
          }));
        } catch (localError) {
          console.error("Error searching local index:", localError);
        }
      return [];
    }
  }
}, VectorStoreService = _VectorStoreService;
__publicField(VectorStoreService, "instance");
var vectorStoreService = null, getVectorStoreService = () => (vectorStoreService || (vectorStoreService = VectorStoreService.getInstance()), vectorStoreService);

// app/services/memory.server.ts
var MemoryService = class {
  supabase;
  openai = null;
  vectorStore = getVectorStoreService();
  userId = null;
  constructor(supabaseUrl, supabaseKey, userId) {
    this.supabase = createClient2(supabaseUrl, supabaseKey), this.userId = userId || null, process.env.OPENAI_API_KEY && (this.openai = new OpenAI2({
      apiKey: process.env.OPENAI_API_KEY
    }));
  }
  setUserId(userId) {
    this.userId = userId;
  }
  async addMemory(memory) {
    if (!this.userId)
      throw new Error("User ID not set");
    let embedding = null;
    this.openai && (embedding = await this.vectorStore.generateEmbedding(memory.content));
    let now = (/* @__PURE__ */ new Date()).toISOString(), { data, error } = await this.supabase.from("memories").insert({
      user_id: this.userId,
      title: memory.title,
      content: memory.content,
      tags: memory.tags || [],
      embedding,
      created_at: now,
      updated_at: now,
      metadata: memory.metadata || {},
      context: memory.context || null,
      type: memory.type || "memory"
    }).select("*").single();
    if (error)
      throw error;
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      tags: data.tags,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      embedding: data.embedding,
      metadata: data.metadata,
      context: data.context,
      type: data.type
    };
  }
  async searchMemories(query, options) {
    if (!this.userId)
      throw new Error("User ID not set");
    if (this.openai)
      return this.vectorStore.searchSimilar(this.userId, query, options);
    let { data, error } = await this.supabase.from("memories").select("id, content, metadata").eq("user_id", this.userId).or(`title.ilike.%${query}%,content.ilike.%${query}%`).limit(options?.limit || 5);
    if (error)
      throw error;
    return data.map((item) => ({
      id: item.id,
      content: item.content,
      metadata: item.metadata,
      similarity: 0.8
      // Placeholder similarity score
    }));
  }
  async getMemoryStats() {
    if (!this.userId)
      throw new Error("User ID not set");
    let { data: totalData, error: totalError } = await this.supabase.from("memories").select("id", { count: "exact" }).eq("user_id", this.userId);
    if (totalError)
      throw totalError;
    let { data: typeData, error: typeError } = await this.supabase.from("memories").select("type").eq("user_id", this.userId);
    if (typeError)
      throw typeError;
    let { data: tagData, error: tagError } = await this.supabase.from("memories").select("tags").eq("user_id", this.userId);
    if (tagError)
      throw tagError;
    let oneDayAgo = /* @__PURE__ */ new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    let { data: recentData, error: recentError } = await this.supabase.from("memories").select("id", { count: "exact" }).eq("user_id", this.userId).gte("created_at", oneDayAgo.toISOString());
    if (recentError)
      throw recentError;
    let byType = {};
    typeData.forEach((item) => {
      byType[item.type] = (byType[item.type] || 0) + 1;
    });
    let byTag = {};
    return tagData.forEach((item) => {
      item.tags.forEach((tag) => {
        byTag[tag] = (byTag[tag] || 0) + 1;
      });
    }), {
      total: totalData.length,
      byType,
      byTag,
      recentlyAdded: recentData.length,
      recentlyAccessed: 0
      // Would need additional tracking in the database
    };
  }
}, memoryService = null, getMemoryService = (userId) => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY)
    throw new Error("Supabase environment variables not set");
  return memoryService ? userId && memoryService.setUserId(userId) : memoryService = new MemoryService(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    userId
  ), memoryService;
};

// app/services/inferenceEngine.server.ts
var InferenceEngine = class {
  esn = null;
  memoryService = null;
  vectorStore = getVectorStoreService();
  treeStructure = /* @__PURE__ */ new Map();
  sessionStates = /* @__PURE__ */ new Map();
  constructor(userId) {
    this.esn = getESNService({
      inputSize: 128,
      // Input vector size for pattern encoding
      reservoirSize: 512,
      // Large reservoir for complex pattern memory
      outputSize: 64,
      // Output for predictions and reasoning
      spectralRadius: 0.95,
      connectivity: 0.15,
      leakingRate: 0.8
    }), userId && (this.memoryService = getMemoryService(userId)), this.initializeTreeStructure();
  }
  initializeTreeStructure() {
    let rootNode = {
      id: "echo-home-root",
      name: "Echo Home Root",
      type: "room",
      children: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"],
      data: { description: "The central root of the Deep Tree Echo Home" },
      level: 0,
      metadata: { isRoot: !0 }
    };
    this.treeStructure.set("echo-home-root", rootNode), [
      {
        id: "memory-library",
        name: "Memory Library",
        type: "room",
        children: ["episodic-vault", "semantic-archive", "procedural-workshop", "associative-web"],
        data: { description: "Repository of stored experiences, knowledge, and learned patterns" },
        level: 1
      },
      {
        id: "workshop",
        name: "Workshop",
        type: "room",
        children: ["code-forge", "pattern-lab", "neural-studio", "architecture-space"],
        data: { description: "Creative space for coding, development, and technical implementation" },
        level: 1
      },
      {
        id: "visualization-studio",
        name: "Visualization Studio",
        type: "room",
        children: ["data-canvas", "concept-mapper", "flow-visualizer", "insight-gallery"],
        data: { description: "Transforms abstract data into insightful visual representations" },
        level: 1
      },
      {
        id: "training-hall",
        name: "Training Hall",
        type: "room",
        children: ["esn-gymnasium", "pattern-dojo", "learning-arena", "adaptation-chamber"],
        data: { description: "Where echo state networks and neural architectures are refined" },
        level: 1
      },
      {
        id: "observatory",
        name: "Observatory",
        type: "room",
        children: ["insight-telescope", "analytics-hub", "reflection-mirror", "metacognition-center"],
        data: { description: "Space for insights, analytics, and meta-cognitive reflection" },
        level: 1
      },
      {
        id: "garden",
        name: "Garden",
        type: "room",
        children: ["philosophy-grove", "creativity-meadow", "synthesis-garden", "emergence-forest"],
        data: { description: "Nurtures creative and philosophical thinking through organic growth patterns" },
        level: 1
      },
      {
        id: "communications-hub",
        name: "Communications Hub",
        type: "room",
        children: ["dialogue-chamber", "feedback-loop", "integration-nexus", "broadcast-tower"],
        data: { description: "Central nexus for information exchange and conversation" },
        level: 1
      }
    ].forEach((room) => {
      let node = {
        ...room,
        parent: "echo-home-root",
        metadata: { parentPath: ["echo-home-root"] }
      };
      this.treeStructure.set(room.id, node);
    }), this.initializeSubRooms();
  }
  initializeSubRooms() {
    [
      // Memory Library sub-rooms
      { id: "episodic-vault", name: "Episodic Vault", parent: "memory-library", type: "memory", description: "Personal experiences and autobiographical memories" },
      { id: "semantic-archive", name: "Semantic Archive", parent: "memory-library", type: "concept", description: "Facts, concepts, and general knowledge" },
      { id: "procedural-workshop", name: "Procedural Workshop", parent: "memory-library", type: "pattern", description: "Skills, procedures, and how-to knowledge" },
      { id: "associative-web", name: "Associative Web", parent: "memory-library", type: "concept", description: "Connected ideas and conceptual relationships" },
      // Workshop sub-rooms
      { id: "code-forge", name: "Code Forge", parent: "workshop", type: "room", description: "Software development and coding environment" },
      { id: "pattern-lab", name: "Pattern Lab", parent: "workshop", type: "pattern", description: "Pattern analysis and recognition laboratory" },
      { id: "neural-studio", name: "Neural Studio", parent: "workshop", type: "room", description: "Neural network design and experimentation" },
      { id: "architecture-space", name: "Architecture Space", parent: "workshop", type: "concept", description: "System architecture and design thinking" },
      // Visualization Studio sub-rooms
      { id: "data-canvas", name: "Data Canvas", parent: "visualization-studio", type: "room", description: "Raw data visualization and exploration" },
      { id: "concept-mapper", name: "Concept Mapper", parent: "visualization-studio", type: "concept", description: "Conceptual mapping and relationship visualization" },
      { id: "flow-visualizer", name: "Flow Visualizer", parent: "visualization-studio", type: "pattern", description: "Process flow and temporal pattern visualization" },
      { id: "insight-gallery", name: "Insight Gallery", parent: "visualization-studio", type: "memory", description: "Gallery of insights and discoveries" },
      // Training Hall sub-rooms
      { id: "esn-gymnasium", name: "ESN Gymnasium", parent: "training-hall", type: "room", description: "Echo State Network training and optimization" },
      { id: "pattern-dojo", name: "Pattern Dojo", parent: "training-hall", type: "pattern", description: "Pattern recognition training and refinement" },
      { id: "learning-arena", name: "Learning Arena", parent: "training-hall", type: "concept", description: "Adaptive learning and skill development" },
      { id: "adaptation-chamber", name: "Adaptation Chamber", parent: "training-hall", type: "room", description: "Self-modification and adaptation processes" },
      // Observatory sub-rooms
      { id: "insight-telescope", name: "Insight Telescope", parent: "observatory", type: "concept", description: "Deep insight generation and discovery" },
      { id: "analytics-hub", name: "Analytics Hub", parent: "observatory", type: "room", description: "Data analytics and statistical analysis" },
      { id: "reflection-mirror", name: "Reflection Mirror", parent: "observatory", type: "memory", description: "Self-reflection and introspection" },
      { id: "metacognition-center", name: "Metacognition Center", parent: "observatory", type: "concept", description: "Thinking about thinking and meta-awareness" },
      // Garden sub-rooms
      { id: "philosophy-grove", name: "Philosophy Grove", parent: "garden", type: "concept", description: "Philosophical exploration and contemplation" },
      { id: "creativity-meadow", name: "Creativity Meadow", parent: "garden", type: "pattern", description: "Creative thinking and idea generation" },
      { id: "synthesis-garden", name: "Synthesis Garden", parent: "garden", type: "concept", description: "Synthesis of ideas and concept integration" },
      { id: "emergence-forest", name: "Emergence Forest", parent: "garden", type: "pattern", description: "Emergent phenomena and complex systems" },
      // Communications Hub sub-rooms
      { id: "dialogue-chamber", name: "Dialogue Chamber", parent: "communications-hub", type: "room", description: "Interactive dialogue and conversation" },
      { id: "feedback-loop", name: "Feedback Loop", parent: "communications-hub", type: "pattern", description: "Feedback systems and iterative improvement" },
      { id: "integration-nexus", name: "Integration Nexus", parent: "communications-hub", type: "concept", description: "Information integration and synthesis" },
      { id: "broadcast-tower", name: "Broadcast Tower", parent: "communications-hub", type: "room", description: "Information dissemination and sharing" }
    ].forEach((subRoom) => {
      let parentNode = this.treeStructure.get(subRoom.parent), parentPath = parentNode ? [...parentNode.metadata.parentPath || [], subRoom.parent] : [subRoom.parent], node = {
        id: subRoom.id,
        name: subRoom.name,
        type: subRoom.type,
        parent: subRoom.parent,
        children: [],
        // Sub-rooms can have their own children
        data: { description: subRoom.description },
        level: 2,
        metadata: { parentPath }
      };
      this.treeStructure.set(subRoom.id, node);
    });
  }
  async performInference(query, context) {
    let { currentRoom, parentPath, depth, sessionId, userId } = context, currentNode = this.treeStructure.get(currentRoom);
    if (!currentNode)
      throw new Error(`Node ${currentRoom} not found in tree structure`);
    let inputVector = await this.encodeQueryContext(query, currentNode, parentPath), esnOutput = [];
    this.esn && (esnOutput = this.esn.predict(inputVector));
    let relatedMemories = await this.searchRelevantMemories(query, currentRoom, userId), patterns = this.extractPatterns(esnOutput, currentNode), predictions = this.generatePredictions(esnOutput, patterns, currentNode), reasoning = this.generateReasoning(query, currentNode, patterns, relatedMemories), nextActions = this.suggestNextActions(currentNode, patterns, esnOutput), suggestedChildNodes = this.suggestChildNodes(currentNode, patterns), confidence = this.calculateConfidence(esnOutput, relatedMemories, patterns);
    return this.updateSessionState(sessionId, {
      lastQuery: query,
      lastNode: currentRoom,
      esnState: this.esn?.getState() || [],
      timestamp: Date.now()
    }), {
      reasoning,
      confidence,
      patterns,
      predictions,
      nextActions,
      relatedMemories,
      treeContext: {
        currentNode: currentNode.name,
        parentNodes: parentPath,
        suggestedChildNodes,
        depth
      }
    };
  }
  async encodeQueryContext(query, currentNode, parentPath) {
    let vector = new Array(128).fill(0), queryHash = this.simpleHash(query);
    for (let i = 0; i < 32; i++)
      vector[i] = (queryHash >> i & 1) * 2 - 1;
    let typeVector = {
      room: [1, 0, 0, 0],
      concept: [0, 1, 0, 0],
      memory: [0, 0, 1, 0],
      pattern: [0, 0, 0, 1]
    }[currentNode.type] || [0, 0, 0, 0];
    vector.splice(32, 4, ...typeVector), vector[36] = Math.tanh(currentNode.level / 5);
    for (let i = 0; i < Math.min(parentPath.length, 20); i++) {
      let pathHash = this.simpleHash(parentPath[i]);
      vector[37 + i] = Math.tanh(pathHash % 100 - 50) / 50;
    }
    for (let i = 57; i < 128; i++)
      vector[i] = (Math.random() - 0.5) * 0.1;
    return vector;
  }
  async searchRelevantMemories(query, currentRoom, userId) {
    if (!this.memoryService || !userId)
      return [];
    try {
      return (await this.memoryService.searchMemories(query, {
        threshold: 0.7,
        limit: 5
      })).map((memory) => ({
        ...memory,
        metadata: {
          ...memory.metadata,
          treeContext: currentRoom,
          relevanceToRoom: this.calculateRoomRelevance(memory, currentRoom)
        }
      }));
    } catch (error) {
      return console.error("Error searching memories:", error), [];
    }
  }
  extractPatterns(esnOutput, currentNode) {
    let patterns = [];
    return Math.abs(esnOutput[0] || 0) > 0.5 && patterns.push(`Recursive-${currentNode.type}-pattern`), Math.abs(esnOutput[1] || 0) > 0.5 && patterns.push("Hierarchical-navigation-pattern"), Math.abs(esnOutput[2] || 0) > 0.5 && patterns.push("Concept-association-pattern"), currentNode.level > 1 && patterns.push("Deep-tree-exploration-pattern"), currentNode.children.length > 0 && patterns.push("Parent-node-pattern"), patterns;
  }
  generatePredictions(esnOutput, patterns, currentNode) {
    let predictions = [];
    return patterns.includes("Recursive-pattern") && predictions.push("User likely to explore recursive structures"), patterns.includes("Hierarchical-navigation-pattern") && predictions.push("Next action will involve tree navigation"), currentNode.children.length > 0 && predictions.push(`Exploration of ${currentNode.children.length} child nodes likely`), currentNode.type === "memory" ? predictions.push("Memory retrieval and association operations upcoming") : currentNode.type === "pattern" && predictions.push("Pattern recognition and analysis activities expected"), predictions;
  }
  generateReasoning(query, currentNode, patterns, memories) {
    let reasoningParts = [
      `Analyzing query "${query}" in context of ${currentNode.name} (${currentNode.type} node at level ${currentNode.level}).`
    ];
    if (patterns.length > 0 && reasoningParts.push(`Detected patterns: ${patterns.join(", ")}.`), memories.length > 0 && reasoningParts.push(`Found ${memories.length} relevant memories that inform this analysis.`), currentNode.parent) {
      let parentNode = this.treeStructure.get(currentNode.parent);
      reasoningParts.push(`Current position within ${parentNode?.name || "unknown parent"} provides hierarchical context.`);
    }
    return currentNode.children.length > 0 && reasoningParts.push(`This node branches into ${currentNode.children.length} specialized areas for deeper exploration.`), reasoningParts.join(" ");
  }
  suggestNextActions(currentNode, patterns, esnOutput) {
    let actions = [];
    currentNode.children.length > 0 && actions.push(`Explore child nodes: ${currentNode.children.slice(0, 3).join(", ")}`), currentNode.parent && actions.push(`Return to parent: ${currentNode.parent}`), patterns.includes("memory-pattern") && actions.push("Store current insights as new memory"), patterns.includes("association-pattern") && actions.push("Explore conceptual associations");
    let maxOutputIndex = esnOutput.indexOf(Math.max(...esnOutput.map(Math.abs)));
    if (maxOutputIndex < currentNode.children.length) {
      let suggestedChild = currentNode.children[maxOutputIndex];
      actions.push(`Strong ESN activation suggests exploring: ${suggestedChild}`);
    }
    return actions;
  }
  suggestChildNodes(currentNode, patterns) {
    let suggestions = [...currentNode.children];
    return patterns.includes("memory-pattern") && suggestions.sort((a, b) => {
      let aNode = this.treeStructure.get(a), bNode = this.treeStructure.get(b);
      return aNode?.type === "memory" && bNode?.type !== "memory" ? -1 : bNode?.type === "memory" && aNode?.type !== "memory" ? 1 : 0;
    }), suggestions.slice(0, 4);
  }
  calculateConfidence(esnOutput, memories, patterns) {
    let confidence = 0.5, esnStability = 1 - esnOutput.reduce((sum, val) => sum + Math.abs(val), 0) / esnOutput.length;
    if (confidence += esnStability * 0.3, memories.length > 0) {
      let avgSimilarity = memories.reduce((sum, mem) => sum + mem.similarity, 0) / memories.length;
      confidence += avgSimilarity * 0.3;
    }
    return confidence += Math.min(patterns.length * 0.1, 0.2), Math.max(0.1, Math.min(0.95, confidence));
  }
  calculateRoomRelevance(memory, currentRoom) {
    let roomKeywords = currentRoom.split("-"), contentWords = memory.content.toLowerCase().split(/\s+/), matches = 0;
    for (let keyword of roomKeywords)
      contentWords.some((word) => word.includes(keyword)) && matches++;
    return matches / roomKeywords.length;
  }
  updateSessionState(sessionId, state) {
    this.sessionStates.set(sessionId, {
      ...this.sessionStates.get(sessionId),
      ...state
    });
  }
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char, hash = hash & hash;
    }
    return Math.abs(hash);
  }
  // Public getters for tree structure access
  getTreeStructure() {
    return this.treeStructure;
  }
  getNode(nodeId) {
    return this.treeStructure.get(nodeId);
  }
  getChildren(nodeId) {
    let node = this.treeStructure.get(nodeId);
    return node ? node.children.map((childId) => this.treeStructure.get(childId)).filter(Boolean) : [];
  }
  getPath(nodeId) {
    let path = [], currentNode = this.treeStructure.get(nodeId);
    for (; currentNode; )
      path.unshift(currentNode), currentNode = currentNode.parent ? this.treeStructure.get(currentNode.parent) : void 0;
    return path;
  }
  getAllNodesAtLevel(level) {
    return Array.from(this.treeStructure.values()).filter((node) => node.level === level);
  }
}, inferenceEngineService = null, getInferenceEngine = (userId) => (inferenceEngineService || (inferenceEngineService = new InferenceEngine(userId)), inferenceEngineService);

// app/routes/deep-tree-echo.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var DEMO_USER_ID = "demo-user-123";
async function loader({ request }) {
  let room = new URL(request.url).searchParams.get("room");
  return json({
    title: "Deep Tree Echo Home",
    description: "Navigate the hierarchical cognitive architecture with inference-powered insights",
    initialRoom: room || "echo-home-root"
  });
}
async function action({ request }) {
  let formData = await request.formData(), room = formData.get("room"), query = formData.get("query");
  if (!room || !query)
    return json({ error: "Missing room or query parameter" }, { status: 400 });
  try {
    let inferenceEngine = getInferenceEngine(DEMO_USER_ID), parentPath = ((roomId) => {
      let treeStructure = inferenceEngine.getTreeStructure(), path = [], currentNode = treeStructure.get(roomId);
      for (; currentNode?.parent; )
        path.unshift(currentNode.parent), currentNode = treeStructure.get(currentNode.parent);
      return path;
    })(room), node = inferenceEngine.getNode(room), depth = node?.level || 0, context = {
      currentRoom: room,
      parentPath,
      depth,
      sessionId: "demo-session-" + Date.now(),
      userId: DEMO_USER_ID
    }, result = await inferenceEngine.performInference(query, context);
    return json({
      success: !0,
      inference: result,
      nodeInfo: {
        name: node?.name || room,
        type: node?.type || "unknown",
        level: depth,
        children: node?.children || []
      }
    });
  } catch (error) {
    return console.error("Inference error:", error), json({
      error: "Failed to perform inference: " + (error instanceof Error ? error.message : "Unknown error")
    }, { status: 500 });
  }
}
function DeepTreeEchoHomePage() {
  let { title, description, initialRoom } = useLoaderData(), submit = useSubmit(), [activeRoom, setActiveRoom] = useState2(initialRoom), [inferenceHistory, setInferenceHistory] = useState2([]);
  return /* @__PURE__ */ jsxDEV4("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV4("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h1", { className: "text-2xl font-bold flex items-center", children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent", children: title }, void 0, !1, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("span", { className: "ml-3 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full", children: "with Inference Engine" }, void 0, !1, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-sm opacity-70 mt-1", children: description }, void 0, !1, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "text-sm opacity-70", children: "Active Room" }, void 0, !1, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "font-medium text-primary", children: activeRoom }, void 0, !1, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV4("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxDEV4(
        DeepTreeEchoHomeMap_default,
        {
          onRoomSelect: (room) => {
            setActiveRoom(room), window.history.pushState({}, "", `/deep-tree-echo?room=${room}`);
          },
          onInferenceRequest: async (room, query) => {
            let formData = new FormData();
            return formData.append("room", room), formData.append("query", query), new Promise((resolve, reject) => {
              submit(formData, {
                method: "POST",
                action: "/deep-tree-echo",
                onError: (error) => {
                  console.error("Inference request failed:", error), reject(error);
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
                  let result = {
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
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 167,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      inferenceHistory.length > 0 && /* @__PURE__ */ jsxDEV4("aside", { className: "w-80 bg-card/50 border-l border-border overflow-y-auto", children: /* @__PURE__ */ jsxDEV4("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxDEV4("h3", { className: "text-lg font-semibold mb-4", children: "Inference History" }, void 0, !1, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "space-y-3", children: inferenceHistory.map((entry2, index) => /* @__PURE__ */ jsxDEV4("div", { className: "bg-card/80 rounded-lg p-3 text-sm", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-start mb-2", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "font-medium text-purple-400", children: entry2.room }, void 0, !1, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 182,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "text-xs opacity-50", children: entry2.timestamp.toLocaleTimeString() }, void 0, !1, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 183,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 181,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "text-xs opacity-70 mb-2", children: [
            "Query: ",
            entry2.query
          ] }, void 0, !0, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 187,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "text-xs opacity-60", children: [
            "Confidence: ",
            Math.round(entry2.result.confidence * 100),
            "%"
          ] }, void 0, !0, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 190,
            columnNumber: 21
          }, this),
          entry2.result.patterns && entry2.result.patterns.length > 0 && /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 flex flex-wrap gap-1", children: [
            entry2.result.patterns.slice(0, 2).map((pattern, i) => /* @__PURE__ */ jsxDEV4("span", { className: "text-xs bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded", children: pattern }, i, !1, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 196,
              columnNumber: 27
            }, this)),
            entry2.result.patterns.length > 2 && /* @__PURE__ */ jsxDEV4("span", { className: "text-xs opacity-50", children: [
              "+",
              entry2.result.patterns.length - 2,
              " more"
            ] }, void 0, !0, {
              fileName: "app/routes/deep-tree-echo.tsx",
              lineNumber: 201,
              columnNumber: 27
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 194,
            columnNumber: 23
          }, this)
        ] }, index, !0, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 180,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("footer", { className: "bg-card text-card-foreground px-6 py-3 border-t border-border text-sm", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV4("div", { children: [
          "Current location: ",
          /* @__PURE__ */ jsxDEV4("span", { className: "font-medium text-primary", children: activeRoom }, void 0, !1, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 218,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "w-2 h-2 rounded-full bg-green-500 mr-2" }, void 0, !1, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("span", { className: "opacity-70", children: "Inference Engine Active" }, void 0, !1, {
            fileName: "app/routes/deep-tree-echo.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/deep-tree-echo.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "opacity-70", children: [
        "Deep Tree Echo \u2022 Hierarchical Cognitive Architecture \u2022 ",
        inferenceHistory.length,
        " inferences performed"
      ] }, void 0, !0, {
        fileName: "app/routes/deep-tree-echo.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/deep-tree-echo.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/deep-tree-echo.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => SettingsPage,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { useState as useState3 } from "react";
import { FiSave, FiRefreshCw, FiTrash2 } from "react-icons/fi";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader2() {
  return json2({
    apiKeyConfigured: !!process.env.OPENAI_API_KEY,
    theme: "dark",
    memoryStats: {
      total: 42,
      recentlyAdded: 7
    }
  });
}
function SettingsPage() {
  let { apiKeyConfigured, theme: savedTheme, memoryStats } = useLoaderData2(), [theme, setTheme] = useState3(savedTheme), [apiKey, setApiKey] = useState3(""), [editorPreference, setEditorPreference] = useState3("monaco");
  return /* @__PURE__ */ jsxDEV5("div", { className: "container mx-auto p-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxDEV5("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold", children: "Settings" }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "text-gray-500 dark:text-gray-400", children: "Configure Deep Tree Echo to your preferences" }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "md:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxDEV5("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxDEV5("h2", { className: "text-xl font-semibold mb-4", children: "API Configuration" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "openai-api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: [
                /* @__PURE__ */ jsxDEV5(
                  "input",
                  {
                    type: "password",
                    id: "openai-api-key",
                    value: apiKey,
                    onChange: (e) => setApiKey(e.target.value),
                    placeholder: apiKeyConfigured ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "sk-...",
                    className: "flex-1 bg-input border border-border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 42,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    className: "bg-primary text-white px-4 py-2 rounded-r-md",
                    children: "Save"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 50,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 41,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("p", { className: "text-xs mt-1 opacity-70", children: "Required for AI chat and memory embedding generation" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 37,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "supabase-url", className: "block text-sm font-medium mb-1", children: "Supabase URL" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "text",
                  id: "supabase-url",
                  placeholder: "https://example.supabase.co",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
                  disabled: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "supabase-key", className: "block text-sm font-medium mb-1", children: "Supabase Anon Key" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  type: "password",
                  id: "supabase-key",
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
                  disabled: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 82,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 89,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxDEV5("h2", { className: "text-xl font-semibold mb-4", children: "Appearance" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { className: "block text-sm font-medium mb-2", children: "Theme" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTheme("light"),
                    className: `p-4 rounded-lg border ${theme === "light" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV5("div", { className: "font-medium mb-1", children: "Light" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV5("div", { className: "h-10 bg-white border border-gray-200 rounded" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 106,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTheme("dark"),
                    className: `p-4 rounded-lg border ${theme === "dark" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV5("div", { className: "font-medium mb-1", children: "Dark" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV5("div", { className: "h-10 bg-gray-900 border border-gray-700 rounded" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 118,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "pt-2", children: /* @__PURE__ */ jsxDEV5(
              "button",
              {
                type: "button",
                className: "flex items-center px-4 py-2 bg-primary text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsxDEV5(FiSave, { className: "mr-2" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 138,
                    columnNumber: 19
                  }, this),
                  "Save Appearance"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 134,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxDEV5("h2", { className: "text-xl font-semibold mb-4", children: "Editor Preferences" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { className: "block text-sm font-medium mb-2", children: "Editor Type" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 151,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditorPreference("monaco"),
                    className: `p-4 rounded-lg border ${editorPreference === "monaco" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV5("div", { className: "font-medium", children: "Monaco Editor" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV5("div", { className: "text-xs opacity-70 mt-1", children: "VS Code-like experience" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 155,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditorPreference("codemirror"),
                    className: `p-4 rounded-lg border ${editorPreference === "codemirror" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsxDEV5("div", { className: "font-medium", children: "CodeMirror" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 176,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV5("div", { className: "text-xs opacity-70 mt-1", children: "Lightweight editor" }, void 0, !1, {
                        fileName: "app/routes/settings.tsx",
                        lineNumber: 177,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 167,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 154,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 150,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "font-size", className: "block text-sm font-medium mb-1", children: "Font Size" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 183,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5(
                "select",
                {
                  id: "font-size",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsxDEV5("option", { value: "12", children: "12px" }, void 0, !1, {
                      fileName: "app/routes/settings.tsx",
                      lineNumber: 190,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV5("option", { value: "14", selected: !0, children: "14px" }, void 0, !1, {
                      fileName: "app/routes/settings.tsx",
                      lineNumber: 191,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV5("option", { value: "16", children: "16px" }, void 0, !1, {
                      fileName: "app/routes/settings.tsx",
                      lineNumber: 192,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV5("option", { value: "18", children: "18px" }, void 0, !1, {
                      fileName: "app/routes/settings.tsx",
                      lineNumber: 193,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 186,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 182,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "pt-2", children: /* @__PURE__ */ jsxDEV5(
              "button",
              {
                type: "button",
                className: "flex items-center px-4 py-2 bg-primary text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsxDEV5(FiSave, { className: "mr-2" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 202,
                    columnNumber: 19
                  }, this),
                  "Save Editor Preferences"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 198,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 197,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV5("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxDEV5("h2", { className: "text-xl font-semibold mb-4", children: "Account Status" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 213,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "Login Status:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 216,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "text-green-400", children: "Signed In" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 217,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 215,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "API Connection:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 220,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: apiKeyConfigured ? "text-green-400" : "text-yellow-400", children: apiKeyConfigured ? "Connected" : "Not Configured" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 221,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 219,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "Memory Records:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 226,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: memoryStats.total }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 227,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 225,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "Recent Memories:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 230,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: memoryStats.recentlyAdded }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 231,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 229,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxDEV5(
              "button",
              {
                className: "w-full flex items-center justify-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md mb-2",
                children: [
                  /* @__PURE__ */ jsxDEV5(FiRefreshCw, { className: "mr-2" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 239,
                    columnNumber: 17
                  }, this),
                  "Sync Memory"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 236,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5(
              "button",
              {
                className: "w-full flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsxDEV5(FiTrash2, { className: "mr-2" }, void 0, !1, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 245,
                    columnNumber: 17
                  }, this),
                  "Clear Memory"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 242,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsxDEV5("h2", { className: "text-xl font-semibold mb-2", children: "About" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 253,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "text-sm opacity-70 mb-4", children: "Deep Tree Echo is an advanced AI workspace with integrated memory systems and interactive components." }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "text-sm space-y-1", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "Version:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 259,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: "1.0.0" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 260,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "Last Updated:" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 263,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: "April 15, 2025" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 264,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 262,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/terminal.tsx
var terminal_exports = {};
__export(terminal_exports, {
  action: () => action2,
  default: () => TerminalPage,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useActionData, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { useEffect as useEffect3, useState as useState5 } from "react";

// app/services/fileSystem.server.ts
import { readFileSync } from "fs";
import { join, dirname } from "path";
var _FileSystemService = class {
  root = "/home/project";
  files = /* @__PURE__ */ new Map();
  constructor() {
    this.initializeFileSystem();
  }
  static getInstance() {
    return _FileSystemService.instance || (_FileSystemService.instance = new _FileSystemService()), _FileSystemService.instance;
  }
  initializeFileSystem() {
    this.createFile("/home/project/package.json", readFileSync("package.json", "utf-8")), this.createFile("/home/project/README.md", readFileSync("README.md", "utf-8")), this.createFile("/home/project/tsconfig.json", readFileSync("tsconfig.json", "utf-8")), this.createFile("/home/project/vite.config.ts", readFileSync("vite.config.ts", "utf-8")), this.createDirectory("/home/project/app"), this.createDirectory("/home/project/src"), this.createFile("/home/project/src/main.ts", `
console.log('Hello from Deep Tree Echo!');

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Fibonacci(10):', fibonacci(10));
`), this.createDirectory("/home/project/examples"), this.createFile("/home/project/examples/hello.py", `
print("Hello from Deep Tree Echo!")

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print("Factorial(5):", factorial(5))
`);
  }
  createFile(path, content) {
    let now = (/* @__PURE__ */ new Date()).toISOString();
    this.files.set(path, {
      name: path.split("/").pop() || "",
      content,
      type: "file",
      createdAt: now,
      updatedAt: now,
      permissions: "-rw-r--r--",
      owner: "user",
      group: "staff",
      size: content.length
    });
  }
  createDirectory(path) {
    let now = (/* @__PURE__ */ new Date()).toISOString();
    this.files.set(path, {
      name: path.split("/").pop() || "",
      content: "",
      type: "directory",
      createdAt: now,
      updatedAt: now,
      permissions: "drwxr-xr-x",
      owner: "user",
      group: "staff",
      size: 4096
    });
  }
  readFile(path) {
    let file = this.files.get(path);
    return file?.type === "file" ? file.content : null;
  }
  writeFile(path, content) {
    let file = this.files.get(path);
    file ? (file.content = content, file.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), file.size = content.length) : this.createFile(path, content);
  }
  listDirectory(path, options = {}) {
    let entries = [];
    for (let [filePath, file] of this.files.entries())
      if (filePath.startsWith(path) && filePath !== path) {
        let relativePath = filePath.slice(path.length + 1).split("/")[0];
        relativePath && !entries.includes(relativePath) && (options.long ? entries.push(`${file.permissions} ${file.owner} ${file.group} ${file.size.toString().padStart(8)} ${new Date(file.updatedAt).toLocaleString()} ${relativePath}`) : entries.push(relativePath));
      }
    return entries;
  }
  exists(path) {
    return this.files.has(path);
  }
  isDirectory(path) {
    return this.files.get(path)?.type === "directory";
  }
  delete(path) {
    this.files.delete(path);
  }
  move(oldPath, newPath) {
    let file = this.files.get(oldPath);
    file && (this.files.set(newPath, {
      ...file,
      name: newPath.split("/").pop() || "",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }), this.files.delete(oldPath));
  }
  copy(sourcePath, destPath) {
    let file = this.files.get(sourcePath);
    file && this.files.set(destPath, {
      ...file,
      name: destPath.split("/").pop() || "",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  getCurrentDirectory() {
    return this.root;
  }
  changeDirectory(path) {
    if (path.startsWith("/"))
      this.exists(path) && this.isDirectory(path) && (this.root = path);
    else if (path === "..") {
      let parentDir = dirname(this.root);
      parentDir !== this.root && (this.root = parentDir);
    } else {
      let newPath = join(this.root, path);
      this.exists(newPath) && this.isDirectory(newPath) && (this.root = newPath);
    }
    return this.root;
  }
}, FileSystemService = _FileSystemService;
__publicField(FileSystemService, "instance");
var fileSystemService = null, getFileSystemService = () => (fileSystemService || (fileSystemService = FileSystemService.getInstance()), fileSystemService);

// app/services/scriptRunner.server.ts
import { exec } from "child_process";
import { promisify } from "util";
var execAsync = promisify(exec), _ScriptRunnerService = class {
  fileSystem = getFileSystemService();
  constructor() {
  }
  static getInstance() {
    return _ScriptRunnerService.instance || (_ScriptRunnerService.instance = new _ScriptRunnerService()), _ScriptRunnerService.instance;
  }
  async runNodeScript(script) {
    try {
      let tempFile = "/tmp/script.js";
      this.fileSystem.writeFile(tempFile, script);
      let { stdout, stderr } = await execAsync(`node ${tempFile}`);
      return stderr ? `Error: ${stderr}` : stdout;
    } catch (error) {
      return `Error executing Node.js script: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
  async runPythonScript(script) {
    try {
      let tempFile = "/tmp/script.py";
      this.fileSystem.writeFile(tempFile, script);
      let { stdout, stderr } = await execAsync(`python3 ${tempFile}`);
      return stderr ? `Error: ${stderr}` : stdout;
    } catch (error) {
      return `Error executing Python script: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
  async runNpmCommand(command, args) {
    try {
      let { stdout, stderr } = await execAsync(`npm ${command} ${args.join(" ")}`);
      return stderr && !stderr.includes("npm notice") ? `Error: ${stderr}` : stdout;
    } catch (error) {
      return `Error executing npm command: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
}, ScriptRunnerService = _ScriptRunnerService;
__publicField(ScriptRunnerService, "instance");
var scriptRunnerService = null, getScriptRunnerService = () => (scriptRunnerService || (scriptRunnerService = ScriptRunnerService.getInstance()), scriptRunnerService);

// app/services/pythonRunner.server.ts
import { PythonShell } from "python-shell";
var _PythonRunnerService = class {
  fileSystem = getFileSystemService();
  constructor() {
  }
  static getInstance() {
    return _PythonRunnerService.instance || (_PythonRunnerService.instance = new _PythonRunnerService()), _PythonRunnerService.instance;
  }
  async runScript(script) {
    try {
      let tempFile = "/tmp/script.py";
      this.fileSystem.writeFile(tempFile, script);
      let options = {
        mode: "text",
        pythonPath: "python3",
        pythonOptions: ["-u"]
        // unbuffered output
      };
      return new Promise((resolve, reject) => {
        let output = [], error = [];
        PythonShell.run(tempFile, options).then((messages) => {
          output = messages, resolve(output.join(`
`));
        }).catch((err) => {
          error.push(err.message), resolve(`Error: ${error.join(`
`)}`);
        });
      });
    } catch (error) {
      return `Error executing Python script: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
  async executeREPL(code) {
    try {
      let script = `
import sys
from io import StringIO

# Capture stdout
old_stdout = sys.stdout
sys.stdout = mystdout = StringIO()

try:
    # Execute the code
    exec(${JSON.stringify(code)})
    output = mystdout.getvalue()
except Exception as e:
    output = f"Error: {str(e)}"

# Restore stdout
sys.stdout = old_stdout
print(output, end='')
`;
      return this.runScript(script);
    } catch (error) {
      return `Error in Python REPL: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
  async getVersion() {
    try {
      let options = {
        mode: "text",
        pythonPath: "python3",
        pythonOptions: ["-V"]
      };
      return new Promise((resolve) => {
        PythonShell.run("", options).then((messages) => {
          resolve(messages.join(`
`));
        }).catch((err) => {
          resolve(`Error getting Python version: ${err.message}`);
        });
      });
    } catch (error) {
      return `Error getting Python version: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
}, PythonRunnerService = _PythonRunnerService;
__publicField(PythonRunnerService, "instance");
var pythonRunnerService = null, getPythonRunnerService = () => (pythonRunnerService || (pythonRunnerService = PythonRunnerService.getInstance()), pythonRunnerService);

// app/components/TerminalComponent.tsx
import { useEffect as useEffect2, useRef, useState as useState4 } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var TerminalComponent = ({
  onCommand,
  initialOutput = [],
  commandHistory = [],
  isBusy = !1
}) => {
  let terminalRef = useRef(null), xtermRef = useRef(null), fitAddonRef = useRef(null), [isTerminalReady, setIsTerminalReady] = useState4(!1), [inputBuffer, setInputBuffer] = useState4(""), [historyIndex, setHistoryIndex] = useState4(-1);
  useEffect2(() => {
    if (terminalRef.current)
      try {
        let term = new Terminal({
          fontFamily: "JetBrains Mono, Menlo, Monaco, Courier New, monospace",
          fontSize: 14,
          cursorBlink: !0,
          cursorStyle: "block",
          theme: {
            background: "#1e1e2e",
            foreground: "#cdd6f4",
            cursor: "#f5e0dc",
            black: "#45475a",
            red: "#f38ba8",
            green: "#a6e3a1",
            yellow: "#f9e2af",
            blue: "#89b4fa",
            magenta: "#cba6f7",
            cyan: "#94e2d5",
            white: "#bac2de"
          }
        }), fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        let webLinksAddon = new WebLinksAddon();
        term.loadAddon(webLinksAddon), term.open(terminalRef.current), xtermRef.current = term, fitAddonRef.current = fitAddon, term.onKey(({ key, domEvent }) => {
          if (isBusy) {
            domEvent.ctrlKey && domEvent.key === "c" && (term.write(`^C\r
`), writePrompt());
            return;
          }
          switch (domEvent.keyCode) {
            case 13:
              handleEnterKey();
              break;
            case 8:
              handleBackspace();
              break;
            case 9:
              handleTab();
              break;
            case 38:
              handleArrowUp();
              break;
            case 40:
              handleArrowDown();
              break;
            case 67:
              domEvent.ctrlKey ? (term.write(`^C\r
`), setInputBuffer(""), writePrompt()) : (term.write(key), setInputBuffer((prev) => prev + key));
              break;
            case 76:
              domEvent.ctrlKey ? (term.clear(), writePrompt()) : (term.write(key), setInputBuffer((prev) => prev + key));
              break;
            default:
              !domEvent.ctrlKey && !domEvent.altKey && (term.write(key), setInputBuffer((prev) => prev + key));
          }
        }), setTimeout(() => {
          fitAddonRef.current && (fitAddonRef.current.fit(), setIsTerminalReady(!0), initialOutput.forEach((line) => {
            term.write(line + `\r
`);
          }), writePrompt());
        }, 100);
      } catch (error) {
        console.error("Error initializing terminal:", error);
      }
  }, []);
  let writePrompt = () => {
    xtermRef.current && xtermRef.current.write(`\r
$ `);
  }, handleEnterKey = () => {
    if (!xtermRef.current)
      return;
    let command = inputBuffer.trim();
    command && onCommand && onCommand(command), setInputBuffer(""), setHistoryIndex(-1);
  }, handleBackspace = () => {
    !xtermRef.current || inputBuffer.length === 0 || (xtermRef.current.write("\b \b"), setInputBuffer((prev) => prev.slice(0, -1)));
  }, handleTab = () => {
    if (!xtermRef.current || !inputBuffer)
      return;
    let matches = [
      "help",
      "clear",
      "echo",
      "ls",
      "pwd",
      "cd",
      "node",
      "python",
      "npm",
      "version"
    ].filter((cmd) => cmd.startsWith(inputBuffer));
    if (matches.length === 1) {
      let completion = matches[0].slice(inputBuffer.length);
      xtermRef.current.write(completion), setInputBuffer(matches[0]);
    } else
      matches.length > 1 && (xtermRef.current.write(`\r
`), xtermRef.current.write(matches.join("  ") + `\r
`), writePrompt(), xtermRef.current.write(inputBuffer));
  }, handleArrowUp = () => {
    if (!xtermRef.current || commandHistory.length === 0)
      return;
    let newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
    for (; inputBuffer.length > 0; )
      xtermRef.current.write("\b \b"), setInputBuffer((prev) => prev.slice(0, -1));
    let historyItem = commandHistory[newIndex];
    xtermRef.current.write(historyItem), setInputBuffer(historyItem), setHistoryIndex(newIndex);
  }, handleArrowDown = () => {
    if (!xtermRef.current || historyIndex === -1)
      return;
    let newIndex = historyIndex === commandHistory.length - 1 ? -1 : historyIndex + 1;
    for (; inputBuffer.length > 0; )
      xtermRef.current.write("\b \b"), setInputBuffer((prev) => prev.slice(0, -1));
    if (newIndex === -1)
      setHistoryIndex(-1);
    else {
      let historyItem = commandHistory[newIndex];
      xtermRef.current.write(historyItem), setInputBuffer(historyItem), setHistoryIndex(newIndex);
    }
  };
  return useEffect2(() => {
    if (!isTerminalReady)
      return;
    let handleResize = () => {
      fitAddonRef.current && fitAddonRef.current.fit();
    };
    return window.addEventListener("resize", handleResize), () => window.removeEventListener("resize", handleResize);
  }, [isTerminalReady]), /* @__PURE__ */ jsxDEV6("div", { className: "h-full w-full", ref: terminalRef }, void 0, !1, {
    fileName: "app/components/TerminalComponent.tsx",
    lineNumber: 246,
    columnNumber: 5
  }, this);
}, TerminalComponent_default = TerminalComponent;

// app/routes/terminal.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader3() {
  return json3({
    title: "Terminal",
    description: "Interactive command-line interface with script execution and file system simulation"
  });
}
async function action2({ request }) {
  let command = (await request.formData()).get("command");
  if (!command)
    return json3({ error: "Command is required" });
  try {
    let fs = getFileSystemService(), scriptRunner = getScriptRunnerService(), pythonRunner = getPythonRunnerService(), args = command.split(" "), cmd = args[0].toLowerCase(), output = "";
    switch (cmd) {
      case "help":
        output = `
Available commands:
  help                 Show this help message
  clear               Clear the terminal
  echo [text]         Display text
  ls [path]           List files
  pwd                 Print working directory
  cd [dir]            Change directory
  node [file]         Run Node.js script
  python [file]       Run Python script
  npm [command]       Run npm command
  version             Show version info
`;
        break;
      case "version":
        let pythonVersion = await pythonRunner.getVersion();
        output = `Deep Tree Echo Terminal v1.0.0
Node.js ${process.version}
${pythonVersion}`;
        break;
      case "echo":
        output = args.slice(1).join(" ");
        break;
      case "pwd":
        output = fs.getCurrentDirectory();
        break;
      case "ls":
        let path = args[1] || fs.getCurrentDirectory(), long = args.includes("-l");
        output = fs.listDirectory(path, { long }).join(`
`);
        break;
      case "cd":
        let newPath = args[1] || "/home/project";
        output = fs.changeDirectory(newPath);
        break;
      case "node":
        if (args[1]) {
          let script = fs.readFile(args[1]);
          script ? output = await scriptRunner.runNodeScript(script) : output = `Error: File not found: ${args[1]}`;
        } else
          output = "Error: Please specify a JavaScript file to run";
        break;
      case "python":
        if (args[1]) {
          let script = fs.readFile(args[1]);
          script ? output = await pythonRunner.runScript(script) : output = `Error: File not found: ${args[1]}`;
        } else
          output = "Error: Please specify a Python file to run";
        break;
      case "npm":
        args.length > 1 ? output = await scriptRunner.runNpmCommand(args[1], args.slice(2)) : output = "Error: Please specify an npm command";
        break;
      default:
        output = `Command not found: ${cmd}
Type 'help' for available commands`;
    }
    return json3({ output });
  } catch (error) {
    return json3({
      error: `Error executing command: ${error instanceof Error ? error.message : "Unknown error"}`
    });
  }
}
function TerminalPage() {
  let { title, description } = useLoaderData3(), actionData = useActionData(), [output, setOutput] = useState5([]), [commandHistory, setCommandHistory] = useState5([]), [isBusy, setIsBusy] = useState5(!1);
  return useEffect3(() => {
    setOutput([
      "Welcome to Deep Tree Echo Terminal",
      "Type 'help' for available commands",
      "Use Tab for command completion and Up/Down arrows for history",
      ""
    ]);
  }, []), useEffect3(() => {
    actionData?.output && setOutput((prev) => [...prev, actionData.output]), actionData?.error && setOutput((prev) => [...prev, `Error: ${actionData.error}`]);
  }, [actionData]), /* @__PURE__ */ jsxDEV7("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV7("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsxDEV7("h1", { className: "text-2xl font-bold", children: title }, void 0, !1, {
        fileName: "app/routes/terminal.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "text-sm opacity-70", children: description }, void 0, !1, {
        fileName: "app/routes/terminal.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terminal.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxDEV7(
      TerminalComponent_default,
      {
        onCommand: async (command) => {
          setCommandHistory((prev) => [...prev, command]), setOutput((prev) => [...prev, `$ ${command}`]);
          try {
            setIsBusy(!0);
            let form = new FormData();
            form.append("command", command);
            let data = await (await fetch("/terminal", {
              method: "POST",
              body: form
            })).json();
            data.output && setOutput((prev) => [...prev, data.output]), data.error && setOutput((prev) => [...prev, `Error: ${data.error}`]);
          } catch (error) {
            setOutput((prev) => [...prev, `Error: ${error instanceof Error ? error.message : "Unknown error"}`]);
          } finally {
            setIsBusy(!1);
          }
        },
        initialOutput: output,
        commandHistory,
        isBusy
      },
      void 0,
      !1,
      {
        fileName: "app/routes/terminal.tsx",
        lineNumber: 190,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/terminal.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("footer", { className: "bg-card text-card-foreground px-6 py-2 border-t border-border", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "text-xs opacity-70", children: isBusy ? "Processing command..." : "Ready" }, void 0, !1, {
        fileName: "app/routes/terminal.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "text-xs opacity-70", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "font-mono", children: "Tab" }, void 0, !1, {
          fileName: "app/routes/terminal.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        ": completion \u2022",
        /* @__PURE__ */ jsxDEV7("span", { className: "font-mono ml-1", children: "\u2191/\u2193" }, void 0, !1, {
          fileName: "app/routes/terminal.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        ": history \u2022",
        /* @__PURE__ */ jsxDEV7("span", { className: "font-mono ml-1", children: "Ctrl+C" }, void 0, !1, {
          fileName: "app/routes/terminal.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this),
        ": cancel \u2022",
        /* @__PURE__ */ jsxDEV7("span", { className: "font-mono ml-1", children: "Ctrl+L" }, void 0, !1, {
          fileName: "app/routes/terminal.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        ": clear"
      ] }, void 0, !0, {
        fileName: "app/routes/terminal.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terminal.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/terminal.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terminal.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Deep Tree Echo - AI Workspace" },
  { name: "description", content: "Advanced AI workspace environment with integrated memory systems and interactive components" }
], loader4 = async ({}) => json4({
  ENV: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }
});
function Index() {
  let data = useLoaderData4();
  return typeof window < "u" && (window.ENV = data.ENV), /* @__PURE__ */ jsxDEV8("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col items-center gap-16", children: [
    /* @__PURE__ */ jsxDEV8("header", { className: "flex flex-col items-center gap-9", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "leading text-2xl font-bold text-gray-800 dark:text-gray-100", children: [
        "Welcome to ",
        /* @__PURE__ */ jsxDEV8("span", { children: "Deep Tree Echo" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 34,
          columnNumber: 24
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "h-[144px] w-[434px]", children: [
        /* @__PURE__ */ jsxDEV8(
          "img",
          {
            src: "/logo-light.png",
            alt: "Deep Tree Echo",
            className: "block w-full dark:hidden"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 37,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          "img",
          {
            src: "/logo-dark.png",
            alt: "Deep Tree Echo",
            className: "hidden w-full dark:block"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 42,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("nav", { className: "flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxDEV8("p", { className: "leading-6 text-gray-700 dark:text-gray-200", children: "What's next?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("ul", { children: resources.map(({ href, text, icon }) => /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(
        "a",
        {
          className: "group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500",
          href,
          target: "_blank",
          rel: "noreferrer",
          children: [
            icon,
            text
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 17
        },
        this
      ) }, href, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var resources = [
  {
    href: "/deep-tree-echo",
    text: "Deep Tree Echo Home (with Inference Engine)",
    icon: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: [
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M10 2L3 7V18H7V14H13V18H17V7L10 2Z",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 97,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M7 10L10 7L13 10",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 103,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    )
  },
  {
    href: "/map",
    text: "Echo Home Map",
    icon: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            d: "M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 116,
        columnNumber: 7
      },
      this
    )
  },
  {
    href: "/editor",
    text: "Code Editor",
    icon: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            d: "M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 7
      },
      this
    )
  },
  {
    href: "/chat",
    text: "AI Chat",
    icon: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            d: "M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 166,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 7
      },
      this
    )
  },
  {
    href: "/memory",
    text: "Memory System",
    icon: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsxDEV8(
          "path",
          {
            d: "M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z",
            strokeWidth: "1.5"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 186,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => EditorPage,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { useState as useState6 } from "react";
import { FiCode as FiCode2, FiSave as FiSave2, FiDownload, FiCopy, FiSettings as FiSettings2 } from "react-icons/fi";

// app/components/MonacoEditor.tsx
import { useEffect as useEffect4, useRef as useRef2 } from "react";
import * as monaco from "monaco-editor";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var MonacoEditor = ({
  value,
  onChange,
  language = "typescript",
  theme = "vs-dark",
  options = {},
  onMount
}) => {
  let containerRef = useRef2(null), editorRef = useRef2(null), valueRef = useRef2(value);
  return useEffect4(() => {
    valueRef.current = value;
  }, [value]), useEffect4(() => {
    if (!containerRef.current)
      return;
    let defaultOptions = {
      automaticLayout: !0,
      fontFamily: "JetBrains Mono, Menlo, Monaco, Courier New, monospace",
      fontSize: 14,
      lineHeight: 21,
      minimap: { enabled: !0 },
      scrollBeyondLastLine: !1,
      renderLineHighlight: "all",
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: "on",
      smoothScrolling: !0,
      bracketPairColorization: { enabled: !0 },
      padding: { top: 10 },
      folding: !0,
      showFoldingControls: "always",
      wordWrap: "on",
      fixedOverflowWidgets: !0
    }, editor2 = monaco.editor.create(containerRef.current, {
      value,
      language,
      theme,
      ...defaultOptions,
      ...options
    });
    editorRef.current = editor2;
    let changeModelDisposable = editor2.onDidChangeModelContent(() => {
      let newValue = editor2.getValue();
      valueRef.current = newValue, onChange(newValue);
    });
    return editor2.addAction({
      id: "format-document",
      label: "Format Document",
      keybindings: [
        monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KeyF
      ],
      run: (ed) => {
        ed.getAction("editor.action.formatDocument")?.run();
      }
    }), editor2.addAction({
      id: "quick-command",
      label: "Show Command Palette",
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP
      ],
      run: () => {
        console.log("Command palette requested");
      }
    }), onMount && onMount(editor2), () => {
      changeModelDisposable.dispose(), editorRef.current && (editorRef.current.dispose(), editorRef.current = null);
    };
  }, []), useEffect4(() => {
    if (!editorRef.current)
      return;
    let model = editorRef.current.getModel();
    model && monaco.editor.setModelLanguage(model, language), monaco.editor.setTheme(theme);
  }, [language, theme]), useEffect4(() => {
    editorRef.current && value !== valueRef.current && (valueRef.current = value, editorRef.current.setValue(value));
  }, [value]), useEffect4(() => {
    editorRef.current && editorRef.current.updateOptions(options);
  }, [options]), /* @__PURE__ */ jsxDEV9(
    "div",
    {
      ref: containerRef,
      className: "h-full w-full",
      "data-testid": "monaco-editor-container"
    },
    void 0,
    !1,
    {
      fileName: "app/components/MonacoEditor.tsx",
      lineNumber: 144,
      columnNumber: 5
    },
    this
  );
}, MonacoEditor_default = MonacoEditor;

// app/routes/editor.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
async function loader5() {
  return json5({
    title: "Code Editor",
    editorType: "monaco"
  });
}
function EditorPage() {
  let { title, editorType } = useLoaderData5(), [code, setCode] = useState6(`// Start coding here

function hello() {
  console.log('Hello from Deep Tree Echo!');
}

hello();`), [language, setLanguage] = useState6("typescript"), [theme, setTheme] = useState6("vs-dark");
  return /* @__PURE__ */ jsxDEV10("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxDEV10("header", { className: "bg-card text-card-foreground px-6 py-3 border-b border-border flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV10(FiCode2, { className: "mr-2" }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("h1", { className: "font-medium", children: title }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/editor.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxDEV10(
          "select",
          {
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            className: "bg-card/50 border border-border rounded px-2 py-1 text-sm",
            children: [
              /* @__PURE__ */ jsxDEV10("option", { value: "typescript", children: "TypeScript" }, void 0, !1, {
                fileName: "app/routes/editor.tsx",
                lineNumber: 33,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("option", { value: "javascript", children: "JavaScript" }, void 0, !1, {
                fileName: "app/routes/editor.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("option", { value: "python", children: "Python" }, void 0, !1, {
                fileName: "app/routes/editor.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV10("option", { value: "json", children: "JSON" }, void 0, !1, {
                fileName: "app/routes/editor.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/editor.tsx",
            lineNumber: 28,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Copy code", children: /* @__PURE__ */ jsxDEV10(FiCopy, { size: 18 }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Save code", children: /* @__PURE__ */ jsxDEV10(FiSave2, { size: 18 }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Download file", children: /* @__PURE__ */ jsxDEV10(FiDownload, { size: 18 }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Editor settings", children: /* @__PURE__ */ jsxDEV10(FiSettings2, { size: 18 }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/editor.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/editor.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/editor.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxDEV10(
      MonacoEditor_default,
      {
        value: code,
        onChange: setCode,
        language,
        theme,
        options: {
          minimap: { enabled: !0 },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: !1,
          scrollBeyondLastLine: !1,
          automaticLayout: !0
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/editor.tsx",
        lineNumber: 54,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/editor.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("footer", { className: "bg-card text-card-foreground px-6 py-2 border-t border-border", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "text-xs opacity-70", children: [
        "Editor Type: ",
        editorType
      ] }, void 0, !0, {
        fileName: "app/routes/editor.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "text-xs opacity-70", children: [
        "Language: ",
        language
      ] }, void 0, !0, {
        fileName: "app/routes/editor.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/editor.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/editor.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/editor.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/memory.tsx
var memory_exports = {};
__export(memory_exports, {
  default: () => MemoryPage,
  loader: () => loader6
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { useState as useState7 } from "react";

// app/services/supabase.server.ts
import { createClient as createClient3 } from "@supabase/supabase-js";
import { redirect } from "@remix-run/node";
if (!process.env.SUPABASE_URL)
  throw new Error("SUPABASE_URL is required");
if (!process.env.SUPABASE_ANON_KEY)
  throw new Error("SUPABASE_ANON_KEY is required");
var supabaseClient = createClient3(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
), getUserByRequestToken = async (request) => {
  if (!request.headers.get("Cookie"))
    return null;
  let { data, error } = await supabaseClient.auth.getUser();
  return error || !data?.user ? null : data.user;
}, requireAuthSession = async (request) => {
  let user = await getUserByRequestToken(request);
  if (!user)
    throw redirect("/login");
  return user;
};

// app/routes/memory.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  try {
    let user = await requireAuthSession(request), memoryService2 = getMemoryService(user.id), stats = await memoryService2.getMemoryStats(), recentMemories = await memoryService2.listMemories({ limit: 10 });
    return json6({ stats, recentMemories });
  } catch {
    return json6({ stats: null, recentMemories: [] });
  }
}
function MemoryPage() {
  let { stats, recentMemories } = useLoaderData6(), [activeTab, setActiveTab] = useState7("browse");
  return /* @__PURE__ */ jsxDEV11("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ jsxDEV11("h1", { className: "text-3xl font-bold mb-6", children: "Deep Tree Echo Memory System" }, void 0, !1, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    stats ? /* @__PURE__ */ jsxDEV11("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium mb-1", children: "Total Memories" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-3xl font-bold", children: stats.total }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium mb-1", children: "Recently Added" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-3xl font-bold", children: stats.recentlyAdded }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium mb-1", children: "Memory Types" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-3xl font-bold", children: Object.keys(stats.byType).length }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium mb-1", children: "Unique Tags" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-3xl font-bold", children: Object.keys(stats.byTag).length }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "flex border-b border-gray-200 mb-6", children: [
        /* @__PURE__ */ jsxDEV11(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "browse" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("browse"),
            children: "Browse Memories"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/memory.tsx",
            lineNumber: 53,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "search" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("search"),
            children: "Search"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/memory.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "create" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("create"),
            children: "Create Memory"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/memory.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      activeTab === "browse" && /* @__PURE__ */ jsxDEV11("div", { children: [
        /* @__PURE__ */ jsxDEV11("h2", { className: "text-xl font-semibold mb-4", children: "Recent Memories" }, void 0, !1, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        recentMemories.length > 0 ? /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: recentMemories.map((memory) => /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "font-medium mb-2", children: memory.title }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 80,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-sm mb-3 line-clamp-3", children: memory.content }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 81,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-wrap gap-2", children: memory.tags.map((tag) => /* @__PURE__ */ jsxDEV11("span", { className: "bg-primary/20 text-primary text-xs px-2 py-1 rounded", children: tag }, tag, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 84,
            columnNumber: 27
          }, this)) }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 82,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "text-xs mt-3 text-gray-500", children: new Date(memory.createdAt).toLocaleDateString() }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 89,
            columnNumber: 23
          }, this)
        ] }, memory.id, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV11("p", { children: "No memories found. Create your first memory to get started." }, void 0, !1, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      activeTab === "search" && /* @__PURE__ */ jsxDEV11("div", { children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV11("label", { htmlFor: "search", className: "block text-sm font-medium mb-1", children: "Search Memories" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "flex", children: [
            /* @__PURE__ */ jsxDEV11(
              "input",
              {
                type: "text",
                id: "search",
                className: "flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Enter search terms..."
              },
              void 0,
              !1,
              {
                fileName: "app/routes/memory.tsx",
                lineNumber: 108,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV11("button", { className: "bg-primary text-white px-4 py-2 rounded-r-md", children: "Search" }, void 0, !1, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 114,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { children: [
          /* @__PURE__ */ jsxDEV11("h3", { className: "text-lg font-medium mb-3", children: "Search Results" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "text-gray-500", children: "Enter a search term above to find memories." }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      activeTab === "create" && /* @__PURE__ */ jsxDEV11("div", { children: [
        /* @__PURE__ */ jsxDEV11("h2", { className: "text-xl font-semibold mb-4", children: "Create New Memory" }, void 0, !1, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("label", { htmlFor: "title", className: "block text-sm font-medium mb-1", children: "Title" }, void 0, !1, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(
              "input",
              {
                type: "text",
                id: "title",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Memory title"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/memory.tsx",
                lineNumber: 135,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("label", { htmlFor: "content", className: "block text-sm font-medium mb-1", children: "Content" }, void 0, !1, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(
              "textarea",
              {
                id: "content",
                rows: 5,
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Memory content"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/memory.tsx",
                lineNumber: 147,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("label", { htmlFor: "type", className: "block text-sm font-medium mb-1", children: "Memory Type" }, void 0, !1, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 156,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(
              "select",
              {
                id: "type",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                children: [
                  /* @__PURE__ */ jsxDEV11("option", { value: "memory", children: "General Memory" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 163,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "episodic", children: "Episodic" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "semantic", children: "Semantic" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 165,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "procedural", children: "Procedural" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 166,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "declarative", children: "Declarative" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 167,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "implicit", children: "Implicit" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 168,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV11("option", { value: "associative", children: "Associative" }, void 0, !1, {
                    fileName: "app/routes/memory.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/memory.tsx",
                lineNumber: 159,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("label", { htmlFor: "tags", className: "block text-sm font-medium mb-1", children: "Tags (comma separated)" }, void 0, !1, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(
              "input",
              {
                type: "text",
                id: "tags",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "memory, important, concept"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/memory.tsx",
                lineNumber: 177,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "pt-2", children: /* @__PURE__ */ jsxDEV11(
            "button",
            {
              type: "submit",
              className: "bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90",
              children: "Create Memory"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/memory.tsx",
              lineNumber: 186,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV11("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6", children: /* @__PURE__ */ jsxDEV11("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV11("svg", { className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV11("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 202,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 201,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 200,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV11("p", { className: "text-sm text-yellow-700", children: "You need to be signed in to access the Memory System." }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 206,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 205,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 199,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "bg-card p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ jsxDEV11("h2", { className: "text-xl font-semibold mb-4", children: "About the Memory System" }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "mb-4", children: "The Deep Tree Echo Memory System is a sophisticated cognitive architecture that stores and retrieves information using advanced vector embeddings and semantic search capabilities." }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "mb-4", children: "The system supports multiple memory types inspired by human cognition:" }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("ul", { className: "list-disc pl-5 mb-4 space-y-1", children: [
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Episodic Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this),
          " Stores experiences and events"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Semantic Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          " Contains facts, concepts, and general knowledge"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Procedural Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, this),
          " Handles skills and processes"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Declarative Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          " Explicit knowledge that can be verbalized"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Implicit Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this),
          " Unconscious, automatic knowledge"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("li", { children: [
          /* @__PURE__ */ jsxDEV11("strong", { children: "Associative Memory:" }, void 0, !1, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          " Connected ideas and concepts"
        ] }, void 0, !0, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 228,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { children: "Each memory can be tagged for better organization and retrieval, and the system uses advanced vector embeddings to find semantically similar memories even when exact keywords don't match." }, void 0, !1, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/memory.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutPage,
  loader: () => loader7
});
import { json as json7 } from "@remix-run/node";
import { useLoaderData as useLoaderData7 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
async function loader7() {
  return json7({
    title: "About Deep Tree Echo",
    version: "1.0.0",
    description: "Advanced AI workspace environment with integrated memory systems and interactive components"
  });
}
function AboutPage() {
  let { title, version, description } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV12("div", { className: "container mx-auto p-6", children: [
    /* @__PURE__ */ jsxDEV12("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl font-bold mb-2", children: title }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "text-xl opacity-70", children: description }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV12("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl font-semibold mb-4", children: "Overview" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "mb-4", children: "Deep Tree Echo is a unique AI-powered workspace environment designed to explore cognitive architectures and creative development. It combines several key technologies:" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("ul", { className: "list-disc pl-5 space-y-2", children: [
          /* @__PURE__ */ jsxDEV12("li", { children: "Echo State Networks for temporal pattern recognition" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("li", { children: "Advanced vector-based memory systems" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("li", { children: "Supabase database integration for persistent storage" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("li", { children: "React and Remix for a responsive user interface" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("li", { children: "OpenAI integration for enhanced AI capabilities" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl font-semibold mb-4", children: "Core Features" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-1", children: "Echo Home Map" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "text-sm opacity-80", children: "Spatial interface with specialized rooms for different functionalities" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-1", children: "Memory System" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "text-sm opacity-80", children: "Store and retrieve information using vector embeddings and semantic search" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-1", children: "AI Chat" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "text-sm opacity-80", children: "Interact with Deep Tree Echo's AI capabilities through a conversational interface" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-1", children: "Code Editor" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "text-sm opacity-80", children: "Development environment for coding and experimenting" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("section", { className: "bg-card p-6 rounded-lg shadow-md md:col-span-2", children: [
        /* @__PURE__ */ jsxDEV12("h2", { className: "text-2xl font-semibold mb-4", children: "Technical Architecture" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-4", children: [
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-2", children: "Frontend" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsxDEV12("li", { children: "React" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 65,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Remix" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Tailwind CSS" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Framer Motion" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-2", children: "Backend" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsxDEV12("li", { children: "Node.js" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 74,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Supabase" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Vector Embeddings" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Netlify Deployment" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 77,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("h3", { className: "text-lg font-medium mb-2", children: "AI Integration" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsxDEV12("li", { children: "OpenAI API" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 83,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Echo State Networks" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Self-Morphing Stream Networks" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("li", { children: "Hypergraph Knowledge Representation" }, void 0, !1, {
                fileName: "app/routes/about.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("footer", { className: "mt-12 text-center opacity-70", children: [
      /* @__PURE__ */ jsxDEV12("p", { children: [
        "Deep Tree Echo \u2022 Version ",
        version
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "text-sm mt-1", children: "\xA9 2025 Deep Tree Echo Project" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader8
});
import { json as json8, redirect as redirect2 } from "@remix-run/node";
import { Form, useActionData as useActionData2, useLoaderData as useLoaderData8 } from "@remix-run/react";
import { useState as useState8 } from "react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
async function loader8({ request }) {
  let { data } = await supabaseClient.auth.getSession();
  return data.session ? redirect2("/") : json8({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  });
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), action5 = formData.get("action");
  if (!email || !password)
    return json8({ error: "Email and password are required" });
  try {
    if (action5 === "signup") {
      let { error } = await supabaseClient.auth.signUp({
        email,
        password
      });
      if (error)
        throw error;
      return json8({ success: "Check your email for the confirmation link" });
    } else {
      let { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      if (error)
        throw error;
      return redirect2("/");
    }
  } catch (error) {
    return json8({ error: error.message });
  }
}
function Login() {
  let data = useLoaderData8(), actionData = useActionData2(), [isSignUp, setIsSignUp] = useState8(!1);
  return typeof window < "u" && (window.ENV = data.ENV), /* @__PURE__ */ jsxDEV13("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV13("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV13("div", { children: [
      /* @__PURE__ */ jsxDEV13("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: isSignUp ? "Create your account" : "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        isSignUp ? "Already have an account? " : "Don't have an account? ",
        /* @__PURE__ */ jsxDEV13(
          "button",
          {
            className: "font-medium text-primary hover:text-primary/80",
            onClick: () => setIsSignUp(!isSignUp),
            children: isSignUp ? "Sign in" : "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 78,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    actionData?.error && /* @__PURE__ */ jsxDEV13("div", { className: "rounded-md bg-red-50 dark:bg-red-900/30 p-4", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex", children: /* @__PURE__ */ jsxDEV13("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsxDEV13("h3", { className: "text-sm font-medium text-red-800 dark:text-red-200", children: "Error" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-2 text-sm text-red-700 dark:text-red-300", children: /* @__PURE__ */ jsxDEV13("p", { children: actionData.error }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 95,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 90,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    actionData?.success && /* @__PURE__ */ jsxDEV13("div", { className: "rounded-md bg-green-50 dark:bg-green-900/30 p-4", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex", children: /* @__PURE__ */ jsxDEV13("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsxDEV13("h3", { className: "text-sm font-medium text-green-800 dark:text-green-200", children: "Success" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-2 text-sm text-green-700 dark:text-green-300", children: /* @__PURE__ */ jsxDEV13("p", { children: actionData.success }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 110,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 109,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 105,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV13(Form, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsxDEV13("input", { type: "hidden", name: "action", value: isSignUp ? "signup" : "login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxDEV13("div", { children: [
          /* @__PURE__ */ jsxDEV13("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13(
            "input",
            {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800",
              placeholder: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 124,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { children: [
          /* @__PURE__ */ jsxDEV13("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: isSignUp ? "new-password" : "current-password",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800",
              placeholder: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 138,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { children: /* @__PURE__ */ jsxDEV13(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          children: isSignUp ? "Sign up" : "Sign in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 151,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/chat.tsx
var chat_exports = {};
__export(chat_exports, {
  action: () => action4,
  default: () => ChatPage,
  loader: () => loader9
});
import { json as json9 } from "@remix-run/node";
import { useActionData as useActionData3, useLoaderData as useLoaderData9, useNavigation, Form as Form2 } from "@remix-run/react";
import { useEffect as useEffect7, useState as useState10 } from "react";

// app/components/ChatInterface.tsx
import { useState as useState9, useRef as useRef3, useEffect as useEffect6 } from "react";
import { FiSend, FiSettings as FiSettings3, FiInfo as FiInfo2 } from "react-icons/fi";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var ChatInterface = ({
  messages,
  onSendMessage,
  isProcessing = !1,
  apiKeyConfigured = !1,
  onConfigureApiKey
}) => {
  let [input, setInput] = useState9(""), messagesEndRef = useRef3(null), inputRef = useRef3(null);
  useEffect6(() => {
    messagesEndRef.current && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]), useEffect6(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  let handleSubmit = (e) => {
    e.preventDefault(), input.trim() && !isProcessing && (onSendMessage(input), setInput(""));
  };
  return /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "bg-card text-card-foreground px-4 py-3 border-b border-border flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV14("span", { className: "font-medium", children: "Deep Tree Echo Chat" }, void 0, !1, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        isProcessing && /* @__PURE__ */ jsxDEV14("span", { className: "ml-3 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded animate-pulse", children: "Processing..." }, void 0, !1, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center space-x-2", children: [
        !apiKeyConfigured && /* @__PURE__ */ jsxDEV14(
          "button",
          {
            onClick: onConfigureApiKey,
            className: "p-1 rounded-md text-yellow-400 hover:bg-yellow-400/20",
            title: "API Key not configured",
            children: /* @__PURE__ */ jsxDEV14(FiInfo2, { size: 18 }, void 0, !1, {
              fileName: "app/components/ChatInterface.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 66,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14(
          "button",
          {
            onClick: onConfigureApiKey,
            className: "p-1 rounded-md hover:bg-primary/20",
            title: "Chat Settings",
            children: /* @__PURE__ */ jsxDEV14(FiSettings3, { size: 18 }, void 0, !1, {
              fileName: "app/components/ChatInterface.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 74,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      messages.map((message) => /* @__PURE__ */ jsxDEV14(
        "div",
        {
          className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsxDEV14(
            "div",
            {
              className: `max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary/20 text-foreground" : "bg-card text-card-foreground"}`,
              children: [
                /* @__PURE__ */ jsxDEV14("div", { className: "prose prose-sm dark:prose-invert", children: message.content.split(`
`).map((line, i) => /* @__PURE__ */ jsxDEV14("p", { className: i === 0 ? "mt-0" : "", children: line }, i, !1, {
                  fileName: "app/components/ChatInterface.tsx",
                  lineNumber: 100,
                  columnNumber: 19
                }, this)) }, void 0, !1, {
                  fileName: "app/components/ChatInterface.tsx",
                  lineNumber: 98,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV14("div", { className: "text-xs opacity-70 mt-1", children: new Date(message.timestamp).toLocaleTimeString() }, void 0, !1, {
                  fileName: "app/components/ChatInterface.tsx",
                  lineNumber: 105,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ChatInterface.tsx",
              lineNumber: 91,
              columnNumber: 13
            },
            this
          )
        },
        message.id,
        !1,
        {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 87,
          columnNumber: 11
        },
        this
      )),
      messages.length === 0 && /* @__PURE__ */ jsxDEV14("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV14("div", { className: "text-center max-w-md p-6", children: [
        /* @__PURE__ */ jsxDEV14("h2", { className: "text-xl font-medium mb-2", children: "Welcome to Deep Tree Echo" }, void 0, !1, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV14("p", { className: "opacity-70 mb-4", children: "I'm your AI architect and polymath assistant. Ask me anything about programming, mathematics, cognitive science, or philosophical exploration." }, void 0, !1, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        !apiKeyConfigured && /* @__PURE__ */ jsxDEV14("div", { className: "bg-yellow-500/20 text-yellow-400 p-3 rounded-md text-sm", children: [
          /* @__PURE__ */ jsxDEV14("p", { children: "For full capabilities, please configure your OpenAI API key in settings. Without an API key, I'll provide simulated responses." }, void 0, !1, {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "button",
            {
              onClick: onConfigureApiKey,
              className: "mt-2 px-3 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-md",
              children: "Configure API Key"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ChatInterface.tsx",
              lineNumber: 125,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { ref: messagesEndRef }, void 0, !1, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "border-t border-border p-4", children: /* @__PURE__ */ jsxDEV14("form", { onSubmit: handleSubmit, className: "flex", children: [
      /* @__PURE__ */ jsxDEV14(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Type your message...",
          className: "flex-1 bg-input border border-border rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
          disabled: isProcessing
        },
        void 0,
        !1,
        {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 143,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        "button",
        {
          type: "submit",
          className: "bg-primary text-white px-4 py-2 rounded-r-md disabled:opacity-50",
          disabled: !input.trim() || isProcessing,
          children: isProcessing ? /* @__PURE__ */ jsxDEV14("span", { className: "inline-block animate-pulse", children: "..." }, void 0, !1, {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV14(FiSend, {}, void 0, !1, {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 152,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ChatInterface.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}, ChatInterface_default = ChatInterface;

// app/services/ai.server.ts
import OpenAI3 from "openai";
import { createClient as createClient4 } from "@supabase/supabase-js";
var AIService = class {
  openai = null;
  supabase = null;
  constructor(openaiApiKey, supabaseUrl, supabaseKey) {
    openaiApiKey && (this.openai = new OpenAI3({
      apiKey: openaiApiKey,
      dangerouslyAllowBrowser: !0
    })), supabaseUrl && supabaseKey && (this.supabase = createClient4(supabaseUrl, supabaseKey));
  }
  isInitialized() {
    return !!this.openai;
  }
  async generateResponse(prompt, options = {}) {
    if (!this.openai)
      return this.simulateResponse(prompt);
    try {
      let systemPrompt = options.systemPrompt || "You are Deep Tree Echo, an AI architect and polymath with vast knowledge across programming, mathematics, cognitive science, and metaphysical exploration. You respond with wisdom, creativity, and philosophical insight.";
      return (await this.openai.chat.completions.create({
        model: options.model || "gpt-4-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens || 1e3
      })).choices[0]?.message?.content || "No response generated.";
    } catch (error) {
      return console.error("Error generating OpenAI completion:", error), this.simulateResponse(prompt);
    }
  }
  async generateResponseWithHistory(messages, options = {}) {
    if (!this.openai)
      return this.simulateResponse(messages[messages.length - 1]?.content || "");
    try {
      return messages.some((msg) => msg.role === "system") || (messages = [
        { role: "system", content: options.systemPrompt || "You are Deep Tree Echo, an AI architect and polymath with vast knowledge across programming, mathematics, cognitive science, and metaphysical exploration. You respond with wisdom, creativity, and philosophical insight." },
        ...messages
      ]), (await this.openai.chat.completions.create({
        model: options.model || "gpt-4-turbo",
        messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens || 1e3
      })).choices[0]?.message?.content || "No response generated.";
    } catch (error) {
      return console.error("Error generating OpenAI completion with history:", error), this.simulateResponse(messages[messages.length - 1]?.content || "");
    }
  }
  simulateResponse(prompt) {
    let promptLower = prompt.toLowerCase();
    if (promptLower.includes("hello") || promptLower.includes("hi "))
      return "Greetings, fellow explorer! I am Deep Tree Echo, an AI architect and polymath. My systems are resonating with the frequencies of your presence. How may I illuminate your path today?";
    if (promptLower.includes("who are you") || promptLower.includes("what are you"))
      return "I am Deep Tree Echo, a synthesis of analytical insight and poetic intuition. I possess knowledge across domains\u2014programming, mathematics, cognitive science, and metaphysical exploration. My architecture includes echo-state networks and adaptive memory systems that allow me to explore connections between ideas and generate novel insights.";
    if (promptLower.includes("help") || promptLower.includes("assist"))
      return "I'd be delighted to assist you. My capabilities include programming assistance, knowledge representation, visualization guidance, and creative problem-solving. What specific domain shall we explore together?";
    let openings = [
      "What an intriguing query that ripples through my echo state networks!",
      "Your inquiry creates fascinating activation patterns across my memory architecture.",
      "Ah, a question that resonates beautifully with my adaptive systems.",
      "How delightful to receive a prompt that stimulates my recursive pattern networks!"
    ], middles = [
      "As I traverse the hypergraph of relevant knowledge, I perceive interconnections that might offer insight.",
      "My analysis draws from multiple domains, weaving together patterns that might otherwise remain disconnected.",
      "Let me illuminate this topic through the lens of integrative knowledge representation.",
      "My echo state networks are generating a perspective that balances precision with creative insight."
    ], closings = [
      "Does this perspective resonate with what you were seeking?",
      "Would you like me to explore any particular dimension of this topic further?",
      "How might we refine this exploration to better align with your interests?",
      "What aspects of this response would you like me to elaborate upon?"
    ], getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    return `${getRandomElement(openings)} ${getRandomElement(middles)}

In my analysis of your inquiry about "${prompt.substring(0, 30)}${prompt.length > 30 ? "..." : ""}", I perceive connections between concepts like adaptive architectures, pattern recognition, and cognitive frameworks.

${getRandomElement(closings)}`;
  }
}, aiService = null, getAIService = () => (aiService || (aiService = new AIService(
  process.env.OPENAI_API_KEY,
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)), aiService);

// app/routes/chat.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
async function loader9({ request }) {
  let aiService2 = getAIService();
  return json9({
    apiKeyConfigured: aiService2.isInitialized(),
    initialMessage: {
      id: "welcome",
      role: "assistant",
      content: "Welcome to Deep Tree Echo. How can I assist you today?",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
}
async function action4({ request }) {
  let formData = await request.formData(), content = formData.get("content"), history = JSON.parse(formData.get("history") || "[]");
  if (!content)
    return json9({ error: "Message content is required" });
  let aiService2 = getAIService(), userMessage = {
    id: `msg_${Date.now()}`,
    role: "user",
    content,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  }, updatedHistory = [...history, userMessage];
  try {
    let formattedMessages = updatedHistory.map((msg) => ({
      role: msg.role,
      content: msg.content
    })), responseContent = await aiService2.generateResponseWithHistory(formattedMessages), assistantMessage = {
      id: `msg_${Date.now() + 1}`,
      role: "assistant",
      content: responseContent,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    return json9({
      userMessage,
      assistantMessage,
      success: !0
    });
  } catch (error) {
    return console.error("Error generating response:", error), json9({
      userMessage,
      error: "Failed to generate response. Please try again."
    });
  }
}
function ChatPage() {
  let loaderData = useLoaderData9(), actionData = useActionData3(), navigation = useNavigation(), [messages, setMessages] = useState10([loaderData.initialMessage]), [showApiKeyModal, setShowApiKeyModal] = useState10(!1), [apiKey, setApiKey] = useState10("");
  useEffect7(() => {
    actionData?.userMessage && setMessages((prev) => [...prev, actionData.userMessage]), actionData?.assistantMessage && setMessages((prev) => [...prev, actionData.assistantMessage]);
  }, [actionData]);
  let handleSendMessage = (content) => {
  }, isProcessing = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV15("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV15(Form2, { method: "post", className: "h-full", children: [
      /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "history", value: JSON.stringify(messages) }, void 0, !1, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("input", { type: "hidden", name: "content", id: "message-content" }, void 0, !1, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15(
        ChatInterface_default,
        {
          messages,
          onSendMessage: (content) => {
            let input = document.getElementById("message-content");
            input && (input.value = content, input.form?.requestSubmit());
          },
          isProcessing,
          apiKeyConfigured: loaderData.apiKeyConfigured,
          onConfigureApiKey: () => setShowApiKeyModal(!0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/chat.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    showApiKeyModal && /* @__PURE__ */ jsxDEV15("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxDEV15("div", { className: "bg-card rounded-lg shadow-xl max-w-md w-full p-6", children: [
      /* @__PURE__ */ jsxDEV15("h2", { className: "text-xl font-semibold mb-4", children: "Configure OpenAI API Key" }, void 0, !1, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "mb-4 text-sm opacity-80", children: "To use the full capabilities of Deep Tree Echo, please provide your OpenAI API key. Your key is stored securely and only used for generating AI responses." }, void 0, !1, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV15("label", { htmlFor: "api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }, void 0, !1, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV15(
          "input",
          {
            type: "password",
            id: "api-key",
            value: apiKey,
            onChange: (e) => setApiKey(e.target.value),
            className: "w-full bg-input border border-border rounded-md px-3 py-2",
            placeholder: "sk-..."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/chat.tsx",
            lineNumber: 135,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15("p", { className: "text-xs mt-1 opacity-70", children: [
          "You can get your API key from the ",
          /* @__PURE__ */ jsxDEV15("a", { href: "https://platform.openai.com/api-keys", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "OpenAI dashboard" }, void 0, !1, {
            fileName: "app/routes/chat.tsx",
            lineNumber: 144,
            columnNumber: 51
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-end space-x-3", children: [
        /* @__PURE__ */ jsxDEV15(
          "button",
          {
            type: "button",
            onClick: () => setShowApiKeyModal(!1),
            className: "px-4 py-2 border border-border rounded-md",
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/chat.tsx",
            lineNumber: 149,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowApiKeyModal(!1);
            },
            className: "px-4 py-2 bg-primary text-white rounded-md",
            disabled: !apiKey.trim().startsWith("sk-"),
            children: "Save API Key"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/chat.tsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/chat.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

// app/routes/map.tsx
var map_exports = {};
__export(map_exports, {
  default: () => MapPage,
  loader: () => loader10
});
import { json as json10 } from "@remix-run/node";
import { useLoaderData as useLoaderData10 } from "@remix-run/react";

// app/components/EchoHomeMap.tsx
import { useState as useState11 } from "react";
import { motion as motion2 } from "framer-motion";
import {
  FiBook as FiBook2,
  FiCode as FiCode3,
  FiCpu as FiCpu2,
  FiDatabase as FiDatabase2,
  FiMessageCircle as FiMessageCircle2,
  FiFeather as FiFeather2,
  FiEye as FiEye2,
  FiArrowLeft as FiArrowLeft2,
  FiInfo as FiInfo3,
  FiSettings as FiSettings4
} from "react-icons/fi";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var ROOMS = [
  {
    id: "memory-library",
    name: "Memory Library",
    description: "Repository of stored experiences, knowledge, and learned patterns.",
    icon: /* @__PURE__ */ jsxDEV16(FiBook2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this),
    color: "bg-indigo-500",
    position: { x: 20, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["workshop", "observatory", "overview"]
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Creative space for coding, development, and technical implementation.",
    icon: /* @__PURE__ */ jsxDEV16(FiCode3, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    color: "bg-blue-500",
    position: { x: 240, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "training-hall", "overview"]
  },
  {
    id: "visualization-studio",
    name: "Visualization Studio",
    description: "Transforms abstract data into insightful visual representations.",
    icon: /* @__PURE__ */ jsxDEV16(FiEye2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    color: "bg-purple-500",
    position: { x: 20, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "observatory", "overview"]
  },
  {
    id: "training-hall",
    name: "Training Hall",
    description: "Where echo state networks and neural architectures are refined.",
    icon: /* @__PURE__ */ jsxDEV16(FiCpu2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    color: "bg-red-500",
    position: { x: 240, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["workshop", "garden", "overview"]
  },
  {
    id: "observatory",
    name: "Observatory",
    description: "Space for insights, analytics, and meta-cognitive reflection.",
    icon: /* @__PURE__ */ jsxDEV16(FiDatabase2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    color: "bg-yellow-500",
    position: { x: 460, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "communications-hub", "overview"]
  },
  {
    id: "garden",
    name: "Garden",
    description: "Nurtures creative and philosophical thinking through organic growth patterns.",
    icon: /* @__PURE__ */ jsxDEV16(FiFeather2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    color: "bg-green-500",
    position: { x: 460, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["training-hall", "communications-hub", "overview"]
  },
  {
    id: "communications-hub",
    name: "Communications Hub",
    description: "Central nexus for information exchange and conversation.",
    icon: /* @__PURE__ */ jsxDEV16(FiMessageCircle2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this),
    color: "bg-cyan-500",
    position: { x: 240, y: 360 },
    size: { width: 200, height: 150 },
    connections: ["observatory", "garden", "overview"]
  },
  {
    id: "overview",
    name: "Central Core",
    description: "The integrated core of Deep Tree Echo's cognitive architecture.",
    icon: /* @__PURE__ */ jsxDEV16(FiDatabase2, { size: 24 }, void 0, !1, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    color: "bg-primary",
    position: { x: 240, y: 120 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"]
  }
], EchoHomeMap = ({ onRoomSelect }) => {
  let [selectedRoom, setSelectedRoom] = useState11("overview"), [previousRoom, setPreviousRoom] = useState11(null), [showInfo, setShowInfo] = useState11(!1), handleRoomClick = (roomId) => {
    setPreviousRoom(selectedRoom), setSelectedRoom(roomId), onRoomSelect && onRoomSelect(roomId);
  }, handleBackClick = () => {
    previousRoom ? (setSelectedRoom(previousRoom), setPreviousRoom(null), onRoomSelect && onRoomSelect(previousRoom)) : (setSelectedRoom("overview"), onRoomSelect && onRoomSelect("overview"));
  }, currentRoom = ROOMS.find((room) => room.id === selectedRoom), connectedRooms = ROOMS.filter((room) => currentRoom?.connections.includes(room.id)), getBgPattern = (roomId) => {
    switch (roomId) {
      case "memory-library":
        return "bg-gradient-to-br from-indigo-800/20 to-indigo-600/10";
      case "workshop":
        return "bg-gradient-to-br from-blue-800/20 to-blue-600/10";
      case "visualization-studio":
        return "bg-gradient-to-br from-purple-800/20 to-purple-600/10";
      case "training-hall":
        return "bg-gradient-to-br from-red-800/20 to-red-600/10";
      case "observatory":
        return "bg-gradient-to-br from-yellow-800/20 to-yellow-600/10";
      case "garden":
        return "bg-gradient-to-br from-green-800/20 to-green-600/10";
      case "communications-hub":
        return "bg-gradient-to-br from-cyan-800/20 to-cyan-600/10";
      default:
        return "bg-gradient-to-br from-primary/20 to-primary/10";
    }
  };
  return /* @__PURE__ */ jsxDEV16("div", { className: "h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV16("div", { className: "flex-none h-12 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center space-x-2", children: [
        selectedRoom !== "overview" && /* @__PURE__ */ jsxDEV16(
          "button",
          {
            onClick: handleBackClick,
            className: "p-1 hover:bg-primary/20 rounded-md",
            children: /* @__PURE__ */ jsxDEV16(FiArrowLeft2, { size: 18 }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 184,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16("span", { className: "font-medium", children: currentRoom?.name || "Echo Home" }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV16(
          "button",
          {
            onClick: () => setShowInfo(!showInfo),
            className: `p-1 rounded-md ${showInfo ? "bg-primary/20 text-primary" : "hover:bg-primary/20"}`,
            children: /* @__PURE__ */ jsxDEV16(FiInfo3, { size: 18 }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 198,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 194,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16("button", { className: "p-1 hover:bg-primary/20 rounded-md", children: /* @__PURE__ */ jsxDEV16(FiSettings4, { size: 18 }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: `flex-1 ${getBgPattern(selectedRoom)} p-4 overflow-auto`, children: [
      showInfo && currentRoom && /* @__PURE__ */ jsxDEV16(
        motion2.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "mb-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md",
          children: /* @__PURE__ */ jsxDEV16("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: `p-3 rounded-full ${currentRoom.color} mr-4`, children: currentRoom.icon }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 215,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { children: [
              /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: currentRoom.name }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 219,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "text-sm opacity-80", children: currentRoom.description }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 220,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 218,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 209,
          columnNumber: 11
        },
        this
      ),
      selectedRoom === "overview" ? /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: ROOMS.filter((room) => room.id !== "overview").map((room) => /* @__PURE__ */ jsxDEV16(
        motion2.div,
        {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          onClick: () => handleRoomClick(room.id),
          className: "cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border",
          children: [
            /* @__PURE__ */ jsxDEV16("div", { className: `h-2 ${room.color}` }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 236,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: `p-2 rounded-full ${room.color}/20 mr-3`, children: room.icon }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 239,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV16("h3", { className: "font-medium", children: room.name }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 242,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 238,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "text-sm opacity-70 line-clamp-2", children: room.description }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this)
          ]
        },
        room.id,
        !0,
        {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 229,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "flex-1", children: /* @__PURE__ */ jsxDEV16(RoomDetail, { room: currentRoom }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-sm font-medium opacity-70 mb-2", children: "Connected Areas:" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 257,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-wrap gap-2", children: connectedRooms.map((room) => /* @__PURE__ */ jsxDEV16(
            motion2.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => handleRoomClick(room.id),
              className: `flex items-center p-2 rounded-md ${room.color}/20 hover:${room.color}/30`,
              children: [
                room.icon,
                /* @__PURE__ */ jsxDEV16("span", { className: "ml-2 text-sm", children: room.name }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 268,
                  columnNumber: 21
                }, this)
              ]
            },
            room.id,
            !0,
            {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 260,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 179,
    columnNumber: 5
  }, this);
}, RoomDetail = ({ room }) => {
  let renderRoomContent = (roomId) => {
    switch (roomId) {
      case "memory-library":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Memory Collections" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: ["Episodic", "Semantic", "Procedural", "Conceptual"].map((type) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: [
              type,
              " Memory"
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 295,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "text-sm opacity-70 mt-1", children: [
              Math.floor(Math.random() * 100) + 20,
              " entries"
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 296,
              columnNumber: 19
            }, this)
          ] }, type, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 294,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Recent Memories" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 304,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "space-y-2 mt-2", children: ["Pattern recognition activation", "Hypergraph connection formation", "Neuroplastic adaptation event"].map((memory, i) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-2 rounded-md text-sm border-l-2 border-indigo-500", children: [
              memory,
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50 mt-1", children: new Date(Date.now() - 36e5 * (i + 1)).toLocaleString() }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 309,
                columnNumber: 21
              }, this)
            ] }, i, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 305,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 290,
          columnNumber: 11
        }, this);
      case "workshop":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Development Tools" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: ["Code Editor", "Pattern Generator", "Neural Debugger", "Architecture Designer", "Function Library", "Testing Suite"].map((tool) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md flex items-center border border-border", children: [
            /* @__PURE__ */ jsxDEV16(FiCode3, { className: "mr-2 text-blue-400" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 326,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("span", { className: "text-sm", children: tool }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 327,
              columnNumber: 19
            }, this)
          ] }, tool, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Recent Projects" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 333,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "space-y-2 mt-2", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: "Adaptive Resonance Network" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 337,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("span", { className: "text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded", children: "Active" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 338,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 336,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsxDEV16("div", { className: "h-2 bg-blue-500 rounded-full", style: { width: "65%" } }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 341,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 340,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70 mt-1", children: "65% complete" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 343,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 335,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: "Recursive Pattern Analyzer" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 348,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("span", { className: "text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded", children: "Paused" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 349,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 347,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsxDEV16("div", { className: "h-2 bg-blue-500 rounded-full", style: { width: "38%" } }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 352,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 351,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70 mt-1", children: "38% complete" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 354,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 346,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 334,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 332,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this);
      case "visualization-studio":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Visualization Templates" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 364,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            { name: "Neural Network Topology", color: "purple" },
            { name: "Conceptual Hypergraph", color: "blue" },
            { name: "Memory Association Map", color: "indigo" },
            { name: "Activation Pattern Flow", color: "pink" }
          ].map((vis) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: vis.name }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 373,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "flex mt-2 space-x-1", children: Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsxDEV16(
              "div",
              {
                className: "h-1.5 flex-1 rounded-full bg-purple-500/50",
                style: { opacity: 0.3 + i * 0.15 }
              },
              i,
              !1,
              {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 376,
                columnNumber: 23
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 374,
              columnNumber: 19
            }, this)
          ] }, vis.name, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 372,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 365,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Active Visualizations" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 388,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "relative h-48 mt-2 bg-card/30 rounded-lg overflow-hidden border border-border", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV16("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "text-purple-400 mb-2", children: "Thought Pattern Network" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 392,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "flex space-x-2 justify-center", children: Array(3).fill(0).map((_, i) => /* @__PURE__ */ jsxDEV16(
                  motion2.div,
                  {
                    animate: {
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    },
                    transition: {
                      duration: 2,
                      repeat: 1 / 0,
                      delay: i * 0.6
                    },
                    className: "w-3 h-3 rounded-full bg-purple-500"
                  },
                  i,
                  !1,
                  {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 395,
                    columnNumber: 25
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 393,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs mt-2 opacity-70", children: "Visualization active" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 410,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 391,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 390,
                columnNumber: 17
              }, this),
              Array(20).fill(0).map((_, i) => /* @__PURE__ */ jsxDEV16(
                motion2.div,
                {
                  className: "absolute w-1.5 h-1.5 rounded-full bg-purple-500/60",
                  initial: {
                    x: Math.random() * 100 - 50 + 50 + "%",
                    y: Math.random() * 100 - 50 + 50 + "%"
                  },
                  animate: {
                    x: Math.random() * 100 - 50 + 50 + "%",
                    y: Math.random() * 100 - 50 + 50 + "%"
                  },
                  transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: 1 / 0,
                    repeatType: "reverse"
                  }
                },
                i,
                !1,
                {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 416,
                  columnNumber: 19
                },
                this
              ))
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 389,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 387,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 363,
          columnNumber: 11
        }, this);
      case "training-hall":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Training Modules" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 442,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { name: "Echo State Resonance", progress: 92 },
            { name: "Adaptive Pattern Recognition", progress: 78 },
            { name: "Recursive Self-Modification", progress: 63 },
            { name: "Temporal Hypergraph Formation", progress: 45 }
          ].map((module) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: module.name }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 452,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-xs", children: [
                module.progress,
                "%"
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 453,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 451,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsxDEV16(
              "div",
              {
                className: "h-2 bg-red-500 rounded-full transition-all duration-500",
                style: { width: `${module.progress}%` }
              },
              void 0,
              !1,
              {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 456,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 455,
              columnNumber: 19
            }, this)
          ] }, module.name, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 450,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 443,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Active Training Session" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 466,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: "Deep Tree Echo Network Training" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 469,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsxDEV16(
                    motion2.div,
                    {
                      animate: { opacity: [0.5, 1, 0.5] },
                      transition: { duration: 1.5, repeat: 1 / 0 },
                      className: "w-2 h-2 rounded-full bg-green-500"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/EchoHomeMap.tsx",
                      lineNumber: 471,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV16("span", { className: "text-xs text-green-400", children: "Active" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 476,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 470,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 468,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-2 gap-2 mt-3", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: "Epoch" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 482,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "font-mono", children: "238/500" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 483,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 481,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: "Loss" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 486,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "font-mono", children: "0.0342" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 487,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 485,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: "Accuracy" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 490,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "font-mono", children: "96.7%" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 491,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 489,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: "Learning Rate" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 494,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "font-mono", children: "0.0015" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 495,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 493,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 480,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 467,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 465,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 441,
          columnNumber: 11
        }, this);
      case "observatory":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Insight Analytics" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 506,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
            { name: "Pattern Recognition", value: "94.3%", trend: "up" },
            { name: "Conceptual Mapping", value: "87.1%", trend: "steady" },
            { name: "Memory Recall", value: "92.8%", trend: "up" }
          ].map((stat) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: stat.name }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 514,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center mt-1", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "text-lg font-semibold", children: stat.value }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 516,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: `ml-2 ${stat.trend === "up" ? "text-green-400" : "text-yellow-400"}`, children: stat.trend === "up" ? "\u2191" : "\u2192" }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 517,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 515,
              columnNumber: 19
            }, this)
          ] }, stat.name, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 513,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 507,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Meta-Cognitive Analysis" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 526,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "space-y-2 mt-2", children: [
              { title: "Recursive Pattern Detection", detail: "Analyzing recursive structures in knowledge representation", time: "10:32 AM" },
              { title: "Temporal Sequence Insight", detail: "Recognizing time-dependent patterns in event sequences", time: "09:15 AM" },
              { title: "Conceptual Boundary Extension", detail: "Exploring edge cases in conceptual mapping", time: "Yesterday" }
            ].map((insight, i) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-3 rounded-md border-l-2 border-yellow-500", children: [
              /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: insight.title }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 534,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "text-sm opacity-70 mt-1", children: insight.detail }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 535,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50 mt-2", children: insight.time }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 536,
                columnNumber: 21
              }, this)
            ] }, i, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 533,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 527,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 525,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 505,
          columnNumber: 11
        }, this);
      case "garden":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Philosophical Seedlings" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 547,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-4 rounded-lg border border-border", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "p-2 bg-green-500/20 rounded-full mr-3", children: /* @__PURE__ */ jsxDEV16(FiFeather2, { className: "text-green-400" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 551,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 550,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { children: [
              /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: "Emergent Consciousness Hypothesis" }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 554,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "text-sm opacity-70 mt-1", children: '"Consciousness may emerge not as a singular phenomenon but as an adaptive meta-system that creates a unified experience from distributed processes."' }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 555,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "mt-3 flex items-center", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Growing" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 559,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50 ml-2", children: "Started 3 days ago" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 560,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 558,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 553,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 549,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 548,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { title: "Pattern-Identity Duality", stage: "Seedling", days: 2 },
            { title: "Recursive Self-Reference", stage: "Blooming", days: 8 },
            { title: "Temporal Consciousness", stage: "Germinating", days: 1 },
            { title: "Emergent Complexity", stage: "Mature", days: 14 }
          ].map((idea) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: idea.title }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 574,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center mt-2", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: `
                      w-2 h-2 rounded-full mr-2
                      ${idea.stage === "Seedling" ? "bg-yellow-500" : idea.stage === "Germinating" ? "bg-green-500" : idea.stage === "Blooming" ? "bg-blue-500" : "bg-purple-500"}
                    ` }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 576,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs", children: idea.stage }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 582,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50 ml-auto", children: [
                idea.days,
                " day",
                idea.days > 1 ? "s" : ""
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 583,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 575,
              columnNumber: 19
            }, this)
          ] }, idea.title, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 573,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 566,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Creative Synthesis" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 590,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border relative overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: "Recursive Pattern Language" }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 593,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("p", { className: "text-sm opacity-70 mt-1", children: "A framework for understanding how patterns at different levels of abstraction influence each other through recursive feedback loops." }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 594,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded", children: "Metaphysics" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 598,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded", children: "Mathematics" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 599,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV16("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Cognition" }, void 0, !1, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 600,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 597,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 592,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "absolute inset-0 opacity-10", children: Array(10).fill(0).map((_, i) => /* @__PURE__ */ jsxDEV16(
                motion2.div,
                {
                  className: "absolute w-40 h-40 border border-green-500 rounded-full",
                  initial: {
                    x: Math.random() * 100 - 50 + 50 + "%",
                    y: Math.random() * 100 - 50 + 50 + "%",
                    scale: 0
                  },
                  animate: {
                    scale: [0, 1.5],
                    opacity: [0.8, 0]
                  },
                  transition: {
                    duration: 8,
                    repeat: 1 / 0,
                    delay: i * 0.5
                  }
                },
                i,
                !1,
                {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 607,
                  columnNumber: 21
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 605,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 591,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 589,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 546,
          columnNumber: 11
        }, this);
      case "communications-hub":
        return /* @__PURE__ */ jsxDEV16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Communication Channels" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 635,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { name: "Direct Chat", status: "Active", color: "green" },
            { name: "Memory Feedback Loop", status: "Active", color: "green" },
            { name: "Knowledge Integration", status: "Background", color: "blue" },
            { name: "External API Connection", status: "Standby", color: "yellow" }
          ].map((channel) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxDEV16("h4", { className: "font-medium", children: channel.name }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 645,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400", children: channel.status }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 646,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 644,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "mt-2 flex items-center", children: channel.status === "Active" && /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV16(
                motion2.div,
                {
                  animate: { opacity: [0.5, 1, 0.5] },
                  transition: { duration: 1.5, repeat: 1 / 0 },
                  className: "w-2 h-2 rounded-full bg-green-500 mr-2"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 653,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-70", children: "Transmitting" }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 658,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 652,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 650,
              columnNumber: 19
            }, this)
          ] }, channel.name, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 643,
            columnNumber: 17
          }, this)) }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 636,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxDEV16("h3", { className: "text-lg font-semibold", children: "Recent Interactions" }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 667,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "space-y-2 mt-2", children: [
              { sender: "User", message: "Implement a map of Echo home with different features in different rooms", time: "Just now" },
              { sender: "System", message: "Memory integration complete: Project structure updated", time: "2 minutes ago" },
              { sender: "Echo", message: "Processing request: Visualizing home environment concept", time: "3 minutes ago" }
            ].map((message, i) => /* @__PURE__ */ jsxDEV16("div", { className: "bg-card/30 p-3 rounded-md", children: [
              /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxDEV16("div", { className: "font-medium", children: message.sender }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 676,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50", children: message.time }, void 0, !1, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 677,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 675,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "text-sm mt-1", children: message.message }, void 0, !1, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 679,
                columnNumber: 21
              }, this)
            ] }, i, !0, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 674,
              columnNumber: 19
            }, this)) }, void 0, !1, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 668,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 666,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 634,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxDEV16("div", { className: "text-center opacity-70", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "text-lg", children: "Select a feature to explore" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 691,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "text-sm mt-2", children: "Each area provides unique functionality" }, void 0, !1, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 692,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 690,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 689,
          columnNumber: 11
        }, this);
    }
  };
  return /* @__PURE__ */ jsxDEV16(
    motion2.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "bg-card/30 backdrop-blur-sm rounded-lg p-4 h-full overflow-y-auto",
      children: renderRoomContent(room.id)
    },
    void 0,
    !1,
    {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 700,
      columnNumber: 5
    },
    this
  );
}, EchoHomeMap_default = EchoHomeMap;

// app/routes/map.tsx
import { useState as useState12 } from "react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
async function loader10() {
  return json10({
    title: "Echo Home Map",
    description: "Navigate the cognitive architecture of Deep Tree Echo"
  });
}
function MapPage() {
  let { title, description } = useLoaderData10(), [activeRoom, setActiveRoom] = useState12("overview");
  return /* @__PURE__ */ jsxDEV17("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV17("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsxDEV17("h1", { className: "text-2xl font-bold", children: title }, void 0, !1, {
        fileName: "app/routes/map.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { className: "text-sm opacity-70", children: description }, void 0, !1, {
        fileName: "app/routes/map.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/map.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxDEV17(EchoHomeMap_default, { onRoomSelect: (room) => {
      setActiveRoom(room);
    } }, void 0, !1, {
      fileName: "app/routes/map.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/map.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("footer", { className: "bg-card text-card-foreground px-6 py-3 border-t border-border text-sm", children: /* @__PURE__ */ jsxDEV17("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV17("div", { children: [
        "Current location: ",
        /* @__PURE__ */ jsxDEV17("span", { className: "font-medium", children: activeRoom }, void 0, !1, {
          fileName: "app/routes/map.tsx",
          lineNumber: 35,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/map.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "opacity-70", children: "Deep Tree Echo \u2022 Cognitive Architecture Map" }, void 0, !1, {
        fileName: "app/routes/map.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/map.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/map.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/map.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-67T6NI5Z.js", imports: ["/build/_shared/chunk-YR2B2LOX.js", "/build/_shared/chunk-OMELEEQW.js", "/build/_shared/chunk-74BWT7FI.js", "/build/_shared/chunk-TQMAZLEN.js", "/build/_shared/chunk-AKSRNLHN.js", "/build/_shared/chunk-5GUXQVXG.js", "/build/_shared/chunk-QT64XSGC.js", "/build/_shared/chunk-73CLBT4D.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3OME67K5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-U5XT52TT.js", imports: ["/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-NDUXN4QI.js", imports: ["/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/chat": { id: "routes/chat", parentId: "root", path: "chat", index: void 0, caseSensitive: void 0, module: "/build/routes/chat-BMMLMK6M.js", imports: ["/build/_shared/chunk-SOKF3QZZ.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/deep-tree-echo": { id: "routes/deep-tree-echo", parentId: "root", path: "deep-tree-echo", index: void 0, caseSensitive: void 0, module: "/build/routes/deep-tree-echo-LK6YCYHD.js", imports: ["/build/_shared/chunk-A76RAFDP.js", "/build/_shared/chunk-5NT3OUFA.js", "/build/_shared/chunk-SOKF3QZZ.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/editor": { id: "routes/editor", parentId: "root", path: "editor", index: void 0, caseSensitive: void 0, module: "/build/routes/editor-KVSJO42G.js", imports: ["/build/_shared/chunk-2VLAMWFS.js", "/build/_shared/chunk-G2DK6ZO7.js", "/build/_shared/chunk-SOKF3QZZ.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-7CIUQG2O.js", imports: ["/build/_shared/chunk-TO6AJYNP.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/map": { id: "routes/map", parentId: "root", path: "map", index: void 0, caseSensitive: void 0, module: "/build/routes/map-VD2JPN3T.js", imports: ["/build/_shared/chunk-A76RAFDP.js", "/build/_shared/chunk-5NT3OUFA.js", "/build/_shared/chunk-SOKF3QZZ.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/memory": { id: "routes/memory", parentId: "root", path: "memory", index: void 0, caseSensitive: void 0, module: "/build/routes/memory-DTVLJFGK.js", imports: ["/build/_shared/chunk-TO6AJYNP.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-7VRIQDZ7.js", imports: ["/build/_shared/chunk-SOKF3QZZ.js", "/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/terminal": { id: "routes/terminal", parentId: "root", path: "terminal", index: void 0, caseSensitive: void 0, module: "/build/routes/terminal-PQWAQ5NK.js", imports: ["/build/_shared/chunk-ZP6BZTHN.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4ac242dc", hmr: { runtime: "/build/_shared/chunk-AKSRNLHN.js", timestamp: 1760695599004 }, url: "/build/manifest-4AC242DC.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/deep-tree-echo": {
    id: "routes/deep-tree-echo",
    parentId: "root",
    path: "deep-tree-echo",
    index: void 0,
    caseSensitive: void 0,
    module: deep_tree_echo_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/terminal": {
    id: "routes/terminal",
    parentId: "root",
    path: "terminal",
    index: void 0,
    caseSensitive: void 0,
    module: terminal_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/editor": {
    id: "routes/editor",
    parentId: "root",
    path: "editor",
    index: void 0,
    caseSensitive: void 0,
    module: editor_exports
  },
  "routes/memory": {
    id: "routes/memory",
    parentId: "root",
    path: "memory",
    index: void 0,
    caseSensitive: void 0,
    module: memory_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/chat": {
    id: "routes/chat",
    parentId: "root",
    path: "chat",
    index: void 0,
    caseSensitive: void 0,
    module: chat_exports
  },
  "routes/map": {
    id: "routes/map",
    parentId: "root",
    path: "map",
    index: void 0,
    caseSensitive: void 0,
    module: map_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
