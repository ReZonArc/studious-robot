import {
  motion
} from "/build/_shared/chunk-A76RAFDP.js";
import "/build/_shared/chunk-5NT3OUFA.js";
import {
  FiArrowLeft,
  FiBook,
  FiCode,
  FiCpu,
  FiDatabase,
  FiEye,
  FiFeather,
  FiInfo,
  FiMessageCircle,
  FiSettings
} from "/build/_shared/chunk-SOKF3QZZ.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  useLoaderData
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
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/map.tsx
var import_node = __toESM(require_node(), 1);

// app/components/EchoHomeMap.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EchoHomeMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EchoHomeMap.tsx"
  );
  import.meta.hot.lastModified = "1760694711121.6702";
}
var ROOMS = [{
  id: "memory-library",
  name: "Memory Library",
  description: "Repository of stored experiences, knowledge, and learned patterns.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiBook, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this),
  color: "bg-indigo-500",
  position: {
    x: 20,
    y: 20
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["workshop", "observatory", "overview"]
}, {
  id: "workshop",
  name: "Workshop",
  description: "Creative space for coding, development, and technical implementation.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCode, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this),
  color: "bg-blue-500",
  position: {
    x: 240,
    y: 20
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["memory-library", "training-hall", "overview"]
}, {
  id: "visualization-studio",
  name: "Visualization Studio",
  description: "Transforms abstract data into insightful visual representations.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiEye, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this),
  color: "bg-purple-500",
  position: {
    x: 20,
    y: 190
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["memory-library", "observatory", "overview"]
}, {
  id: "training-hall",
  name: "Training Hall",
  description: "Where echo state networks and neural architectures are refined.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCpu, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this),
  color: "bg-red-500",
  position: {
    x: 240,
    y: 190
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["workshop", "garden", "overview"]
}, {
  id: "observatory",
  name: "Observatory",
  description: "Space for insights, analytics, and meta-cognitive reflection.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiDatabase, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this),
  color: "bg-yellow-500",
  position: {
    x: 460,
    y: 20
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["memory-library", "communications-hub", "overview"]
}, {
  id: "garden",
  name: "Garden",
  description: "Nurtures creative and philosophical thinking through organic growth patterns.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiFeather, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this),
  color: "bg-green-500",
  position: {
    x: 460,
    y: 190
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["training-hall", "communications-hub", "overview"]
}, {
  id: "communications-hub",
  name: "Communications Hub",
  description: "Central nexus for information exchange and conversation.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiMessageCircle, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 122,
    columnNumber: 9
  }, this),
  color: "bg-cyan-500",
  position: {
    x: 240,
    y: 360
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["observatory", "garden", "overview"]
}, {
  id: "overview",
  name: "Central Core",
  description: "The integrated core of Deep Tree Echo's cognitive architecture.",
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiDatabase, { size: 24 }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 137,
    columnNumber: 9
  }, this),
  color: "bg-primary",
  position: {
    x: 240,
    y: 120
  },
  size: {
    width: 200,
    height: 150
  },
  connections: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"]
}];
var EchoHomeMap = ({
  onRoomSelect
}) => {
  _s();
  const [selectedRoom, setSelectedRoom] = (0, import_react.useState)("overview");
  const [previousRoom, setPreviousRoom] = (0, import_react.useState)(null);
  const [showInfo, setShowInfo] = (0, import_react.useState)(false);
  const handleRoomClick = (roomId) => {
    setPreviousRoom(selectedRoom);
    setSelectedRoom(roomId);
    if (onRoomSelect) {
      onRoomSelect(roomId);
    }
  };
  const handleBackClick = () => {
    if (previousRoom) {
      setSelectedRoom(previousRoom);
      setPreviousRoom(null);
      if (onRoomSelect) {
        onRoomSelect(previousRoom);
      }
    } else {
      setSelectedRoom("overview");
      if (onRoomSelect) {
        onRoomSelect("overview");
      }
    }
  };
  const currentRoom = ROOMS.find((room) => room.id === selectedRoom);
  const connectedRooms = ROOMS.filter((room) => currentRoom?.connections.includes(room.id));
  const getBgPattern = (roomId) => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-none h-12 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        selectedRoom !== "overview" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleBackClick, className: "p-1 hover:bg-primary/20 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiArrowLeft, { size: 18 }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 206,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 205,
          columnNumber: 43
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: currentRoom?.name || "Echo Home" }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowInfo(!showInfo), className: `p-1 rounded-md ${showInfo ? "bg-primary/20 text-primary" : "hover:bg-primary/20"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiInfo, { size: 18 }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "p-1 hover:bg-primary/20 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiSettings, { size: 18 }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 215,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex-1 ${getBgPattern(selectedRoom)} p-4 overflow-auto`, children: [
      showInfo && currentRoom && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: -10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "mb-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-full ${currentRoom.color} mr-4`, children: currentRoom.icon }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: currentRoom.name }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 234,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: currentRoom.description }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 235,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 233,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 229,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 222,
        columnNumber: 37
      }, this),
      selectedRoom === "overview" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: ROOMS.filter((room) => room.id !== "overview").map((room) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { whileHover: {
        scale: 1.02
      }, whileTap: {
        scale: 0.98
      }, onClick: () => handleRoomClick(room.id), className: "cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 ${room.color}` }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 246,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-2 rounded-full ${room.color}/20 mr-3`, children: room.icon }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium", children: room.name }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 252,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 line-clamp-2", children: room.description }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 254,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 247,
          columnNumber: 17
        }, this)
      ] }, room.id, true, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 241,
        columnNumber: 71
      }, this)) }, void 0, false, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 240,
        columnNumber: 40
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoomDetail, { room: currentRoom }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium opacity-70 mb-2", children: "Connected Areas:" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: connectedRooms.map((room) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, { whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, onClick: () => handleRoomClick(room.id), className: `flex items-center p-2 rounded-md ${room.color}/20 hover:${room.color}/30`, children: [
            room.icon,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm", children: room.name }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 272,
              columnNumber: 21
            }, this)
          ] }, room.id, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 266,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EchoHomeMap.tsx",
        lineNumber: 257,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EchoHomeMap.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 201,
    columnNumber: 10
  }, this);
};
_s(EchoHomeMap, "/Q2fxRj0p5sV93tw1o8PdWE5sxw=");
_c = EchoHomeMap;
var RoomDetail = ({
  room
}) => {
  const renderRoomContent = (roomId) => {
    switch (roomId) {
      case "memory-library":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Memory Collections" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: ["Episodic", "Semantic", "Procedural", "Conceptual"].map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: [
              type,
              " Memory"
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 293,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm opacity-70 mt-1", children: [
              Math.floor(Math.random() * 100) + 20,
              " entries"
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 294,
              columnNumber: 19
            }, this)
          ] }, type, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 292,
            columnNumber: 81
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Recent Memories" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 301,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mt-2", children: ["Pattern recognition activation", "Hypergraph connection formation", "Neuroplastic adaptation event"].map((memory, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-2 rounded-md text-sm border-l-2 border-indigo-500", children: [
              memory,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-50 mt-1", children: new Date(Date.now() - 1e3 * 60 * 60 * (i + 1)).toLocaleString() }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 305,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 303,
              columnNumber: 140
            }, this)) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 302,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 289,
          columnNumber: 16
        }, this);
      case "workshop":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Development Tools" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 314,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: ["Code Editor", "Pattern Generator", "Neural Debugger", "Architecture Designer", "Function Library", "Testing Suite"].map((tool) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md flex items-center border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiCode, { className: "mr-2 text-blue-400" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 317,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: tool }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this)
          ] }, tool, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 316,
            columnNumber: 146
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 315,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Recent Projects" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 323,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: "Adaptive Resonance Network" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 327,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded", children: "Active" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 328,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 326,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-blue-500 rounded-full", style: {
                  width: "65%"
                } }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 331,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 330,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70 mt-1", children: "65% complete" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 335,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 325,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: "Recursive Pattern Analyzer" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 340,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded", children: "Paused" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 341,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 339,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-blue-500 rounded-full", style: {
                  width: "38%"
                } }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 344,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 343,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70 mt-1", children: "38% complete" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 348,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 338,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 324,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 313,
          columnNumber: 16
        }, this);
      case "visualization-studio":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Visualization Templates" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 355,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [{
            name: "Neural Network Topology",
            color: "purple"
          }, {
            name: "Conceptual Hypergraph",
            color: "blue"
          }, {
            name: "Memory Association Map",
            color: "indigo"
          }, {
            name: "Activation Pattern Flow",
            color: "pink"
          }].map((vis) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: vis.name }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 370,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-2 space-x-1", children: Array(5).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1.5 flex-1 rounded-full bg-purple-500/50", style: {
              opacity: 0.3 + i * 0.15
            } }, i, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 372,
              columnNumber: 53
            }, this)) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 371,
              columnNumber: 19
            }, this)
          ] }, vis.name, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 369,
            columnNumber: 27
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Active Visualizations" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 380,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-48 mt-2 bg-card/30 rounded-lg overflow-hidden border border-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-purple-400 mb-2", children: "Thought Pattern Network" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 384,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2 justify-center", children: Array(3).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { animate: {
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }, transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6
                }, className: "w-3 h-3 rounded-full bg-purple-500" }, i, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 386,
                  columnNumber: 55
                }, this)) }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 385,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs mt-2 opacity-70", children: "Visualization active" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 395,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 383,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 382,
                columnNumber: 17
              }, this),
              Array(20).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "absolute w-1.5 h-1.5 rounded-full bg-purple-500/60", initial: {
                x: Math.random() * 100 - 50 + 50 + "%",
                y: Math.random() * 100 - 50 + 50 + "%"
              }, animate: {
                x: Math.random() * 100 - 50 + 50 + "%",
                y: Math.random() * 100 - 50 + 50 + "%"
              }, transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              } }, i, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 400,
                columnNumber: 50
              }, this))
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 381,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 379,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 354,
          columnNumber: 16
        }, this);
      case "training-hall":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Training Modules" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [{
            name: "Echo State Resonance",
            progress: 92
          }, {
            name: "Adaptive Pattern Recognition",
            progress: 78
          }, {
            name: "Recursive Self-Modification",
            progress: 63
          }, {
            name: "Temporal Hypergraph Formation",
            progress: 45
          }].map((module) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: module.name }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 432,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs", children: [
                module.progress,
                "%"
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 433,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 431,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-red-500 rounded-full transition-all duration-500", style: {
              width: `${module.progress}%`
            } }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 436,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this)
          ] }, module.name, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 430,
            columnNumber: 30
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 417,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Active Training Session" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 444,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: "Deep Tree Echo Network Training" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 447,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { animate: {
                    opacity: [0.5, 1, 0.5]
                  }, transition: {
                    duration: 1.5,
                    repeat: Infinity
                  }, className: "w-2 h-2 rounded-full bg-green-500" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 449,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-green-400", children: "Active" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 455,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 448,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 446,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-2 mt-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Epoch" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 461,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono", children: "238/500" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 462,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 460,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Loss" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 465,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono", children: "0.0342" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 466,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 464,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Accuracy" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 469,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono", children: "96.7%" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 470,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 468,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Learning Rate" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 473,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono", children: "0.0015" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 474,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 472,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 459,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 445,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 443,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 415,
          columnNumber: 16
        }, this);
      case "observatory":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Insight Analytics" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 482,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [{
            name: "Pattern Recognition",
            value: "94.3%",
            trend: "up"
          }, {
            name: "Conceptual Mapping",
            value: "87.1%",
            trend: "steady"
          }, {
            name: "Memory Recall",
            value: "92.8%",
            trend: "up"
          }].map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: stat.name }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 497,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-semibold", children: stat.value }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 499,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `ml-2 ${stat.trend === "up" ? "text-green-400" : "text-yellow-400"}`, children: stat.trend === "up" ? "\u2191" : "\u2192" }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 500,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 498,
              columnNumber: 19
            }, this)
          ] }, stat.name, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 496,
            columnNumber: 28
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 483,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Meta-Cognitive Analysis" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 508,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mt-2", children: [{
              title: "Recursive Pattern Detection",
              detail: "Analyzing recursive structures in knowledge representation",
              time: "10:32 AM"
            }, {
              title: "Temporal Sequence Insight",
              detail: "Recognizing time-dependent patterns in event sequences",
              time: "09:15 AM"
            }, {
              title: "Conceptual Boundary Extension",
              detail: "Exploring edge cases in conceptual mapping",
              time: "Yesterday"
            }].map((insight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-3 rounded-md border-l-2 border-yellow-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: insight.title }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 523,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 mt-1", children: insight.detail }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 524,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-50 mt-2", children: insight.time }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 525,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 522,
              columnNumber: 38
            }, this)) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 509,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 507,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 481,
          columnNumber: 16
        }, this);
      case "garden":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Philosophical Seedlings" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 532,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-4 rounded-lg border border-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 bg-green-500/20 rounded-full mr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiFeather, { className: "text-green-400" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 536,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 535,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: "Emergent Consciousness Hypothesis" }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 539,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 mt-1", children: '"Consciousness may emerge not as a singular phenomenon but as an adaptive meta-system that creates a unified experience from distributed processes."' }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 540,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Growing" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 544,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-50 ml-2", children: "Started 3 days ago" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 545,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 543,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 538,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 534,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 533,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [{
            title: "Pattern-Identity Duality",
            stage: "Seedling",
            days: 2
          }, {
            title: "Recursive Self-Reference",
            stage: "Blooming",
            days: 8
          }, {
            title: "Temporal Consciousness",
            stage: "Germinating",
            days: 1
          }, {
            title: "Emergent Complexity",
            stage: "Mature",
            days: 14
          }].map((idea) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: idea.title }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 569,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `
                      w-2 h-2 rounded-full mr-2
                      ${idea.stage === "Seedling" ? "bg-yellow-500" : idea.stage === "Germinating" ? "bg-green-500" : idea.stage === "Blooming" ? "bg-blue-500" : "bg-purple-500"}
                    ` }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 571,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs", children: idea.stage }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 575,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-50 ml-auto", children: [
                idea.days,
                " day",
                idea.days > 1 ? "s" : ""
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 576,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 570,
              columnNumber: 19
            }, this)
          ] }, idea.title, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 568,
            columnNumber: 28
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 551,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Creative Synthesis" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 582,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border relative overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: "Recursive Pattern Language" }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 585,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 mt-1", children: "A framework for understanding how patterns at different levels of abstraction influence each other through recursive feedback loops." }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 586,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded", children: "Metaphysics" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 590,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded", children: "Mathematics" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 591,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Cognition" }, void 0, false, {
                    fileName: "app/components/EchoHomeMap.tsx",
                    lineNumber: 592,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 589,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 584,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 opacity-10", children: Array(10).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "absolute w-40 h-40 border border-green-500 rounded-full", initial: {
                x: Math.random() * 100 - 50 + 50 + "%",
                y: Math.random() * 100 - 50 + 50 + "%",
                scale: 0
              }, animate: {
                scale: [0, 1.5],
                opacity: [0.8, 0]
              }, transition: {
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5
              } }, i, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 598,
                columnNumber: 52
              }, this)) }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 597,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 583,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 581,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 531,
          columnNumber: 16
        }, this);
      case "communications-hub":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Communication Channels" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 616,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [{
            name: "Direct Chat",
            status: "Active",
            color: "green"
          }, {
            name: "Memory Feedback Loop",
            status: "Active",
            color: "green"
          }, {
            name: "Knowledge Integration",
            status: "Background",
            color: "blue"
          }, {
            name: "External API Connection",
            status: "Standby",
            color: "yellow"
          }].map((channel) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium", children: channel.name }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 636,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400", children: channel.status }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 637,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 635,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex items-center", children: channel.status === "Active" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { animate: {
                opacity: [0.5, 1, 0.5]
              }, transition: {
                duration: 1.5,
                repeat: Infinity
              }, className: "w-2 h-2 rounded-full bg-green-500 mr-2" }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 643,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70", children: "Transmitting" }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 649,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 642,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 641,
              columnNumber: 19
            }, this)
          ] }, channel.name, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 634,
            columnNumber: 31
          }, this)) }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 617,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Recent Interactions" }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 656,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mt-2", children: [{
              sender: "User",
              message: "Implement a map of Echo home with different features in different rooms",
              time: "Just now"
            }, {
              sender: "System",
              message: "Memory integration complete: Project structure updated",
              time: "2 minutes ago"
            }, {
              sender: "Echo",
              message: "Processing request: Visualizing home environment concept",
              time: "3 minutes ago"
            }].map((message, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card/30 p-3 rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: message.sender }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 672,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-50", children: message.time }, void 0, false, {
                  fileName: "app/components/EchoHomeMap.tsx",
                  lineNumber: 673,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 671,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mt-1", children: message.message }, void 0, false, {
                fileName: "app/components/EchoHomeMap.tsx",
                lineNumber: 675,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 670,
              columnNumber: 38
            }, this)) }, void 0, false, {
              fileName: "app/components/EchoHomeMap.tsx",
              lineNumber: 657,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 655,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 615,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center opacity-70", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg", children: "Select a feature to explore" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 683,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm mt-2", children: "Each area provides unique functionality" }, void 0, false, {
            fileName: "app/components/EchoHomeMap.tsx",
            lineNumber: 684,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 682,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/EchoHomeMap.tsx",
          lineNumber: 681,
          columnNumber: 16
        }, this);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, className: "bg-card/30 backdrop-blur-sm rounded-lg p-4 h-full overflow-y-auto", children: renderRoomContent(room.id) }, void 0, false, {
    fileName: "app/components/EchoHomeMap.tsx",
    lineNumber: 689,
    columnNumber: 10
  }, this);
};
_c2 = RoomDetail;
var EchoHomeMap_default = EchoHomeMap;
var _c;
var _c2;
$RefreshReg$(_c, "EchoHomeMap");
$RefreshReg$(_c2, "RoomDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/map.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/map.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/map.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function MapPage() {
  _s2();
  const {
    title,
    description
  } = useLoaderData();
  const [activeRoom, setActiveRoom] = (0, import_react3.useState)("overview");
  const handleRoomSelect = (room) => {
    setActiveRoom(room);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold", children: title }, void 0, false, {
        fileName: "app/routes/map.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm opacity-70", children: description }, void 0, false, {
        fileName: "app/routes/map.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/map.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EchoHomeMap_default, { onRoomSelect: handleRoomSelect }, void 0, false, {
      fileName: "app/routes/map.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/map.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-card text-card-foreground px-6 py-3 border-t border-border text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        "Current location: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium", children: activeRoom }, void 0, false, {
          fileName: "app/routes/map.tsx",
          lineNumber: 55,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/map.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "opacity-70", children: "Deep Tree Echo \u2022 Cognitive Architecture Map" }, void 0, false, {
        fileName: "app/routes/map.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/map.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/map.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/map.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s2(MapPage, "RbUxhGY6C455Tdegv4SwYaE6p+k=", false, function() {
  return [useLoaderData];
});
_c3 = MapPage;
var _c3;
$RefreshReg$(_c3, "MapPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MapPage as default
};
//# sourceMappingURL=/build/routes/map-VD2JPN3T.js.map
