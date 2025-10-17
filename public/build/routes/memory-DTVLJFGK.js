import {
  require_supabase
} from "/build/_shared/chunk-TO6AJYNP.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// empty-module:~/services/memory.server
var require_memory = __commonJS({
  "empty-module:~/services/memory.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/memory.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_memory = __toESM(require_memory(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/memory.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/memory.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function MemoryPage() {
  _s();
  const {
    stats,
    recentMemories
  } = useLoaderData();
  const [activeTab, setActiveTab] = (0, import_react2.useState)("browse");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Deep Tree Echo Memory System" }, void 0, false, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    stats ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Total Memories" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold", children: stats.total }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Recently Added" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold", children: stats.recentlyAdded }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Memory Types" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold", children: Object.keys(stats.byType).length }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Unique Tags" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold", children: Object.keys(stats.byTag).length }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex border-b border-gray-200 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `py-2 px-4 ${activeTab === "browse" ? "border-b-2 border-primary font-medium" : ""}`, onClick: () => setActiveTab("browse"), children: "Browse Memories" }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `py-2 px-4 ${activeTab === "search" ? "border-b-2 border-primary font-medium" : ""}`, onClick: () => setActiveTab("search"), children: "Search" }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `py-2 px-4 ${activeTab === "create" ? "border-b-2 border-primary font-medium" : ""}`, onClick: () => setActiveTab("create"), children: "Create Memory" }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      activeTab === "browse" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Recent Memories" }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        recentMemories.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: recentMemories.map((memory) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium mb-2", children: memory.title }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 97,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mb-3 line-clamp-3", children: memory.content }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 98,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: memory.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-primary/20 text-primary text-xs px-2 py-1 rounded", children: tag }, tag, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 100,
            columnNumber: 49
          }, this)) }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 99,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs mt-3 text-gray-500", children: new Date(memory.createdAt).toLocaleDateString() }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this)
        ] }, memory.id, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 96,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 95,
          columnNumber: 44
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No memories found. Create your first memory to get started." }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 108,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 93,
        columnNumber: 38
      }, this),
      activeTab === "search" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "search", className: "block text-sm font-medium mb-1", children: "Search Memories" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "search", className: "flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", placeholder: "Enter search terms..." }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-primary text-white px-4 py-2 rounded-r-md", children: "Search" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-3", children: "Search Results" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "Enter a search term above to find memories." }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 111,
        columnNumber: 38
      }, this),
      activeTab === "create" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Create New Memory" }, void 0, false, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium mb-1", children: "Title" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 134,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", placeholder: "Memory title" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", className: "block text-sm font-medium mb-1", children: "Content" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 141,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", rows: 5, className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", placeholder: "Memory content" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "type", className: "block text-sm font-medium mb-1", children: "Memory Type" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "type", className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "memory", children: "General Memory" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "episodic", children: "Episodic" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "semantic", children: "Semantic" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 154,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "procedural", children: "Procedural" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "declarative", children: "Declarative" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "implicit", children: "Implicit" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "associative", children: "Associative" }, void 0, false, {
                fileName: "app/routes/memory.tsx",
                lineNumber: 158,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tags", className: "block text-sm font-medium mb-1", children: "Tags (comma separated)" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "tags", className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20", placeholder: "memory, important, concept" }, void 0, false, {
              fileName: "app/routes/memory.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90", children: "Create Memory" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 130,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 61,
      columnNumber: 16
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 180,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 179,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-yellow-700", children: "You need to be signed in to access the Memory System." }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 184,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 176,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "About the Memory System" }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "The Deep Tree Echo Memory System is a sophisticated cognitive architecture that stores and retrieves information using advanced vector embeddings and semantic search capabilities." }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "The system supports multiple memory types inspired by human cognition:" }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 mb-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Episodic Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          " Stores experiences and events"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Semantic Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          " Contains facts, concepts, and general knowledge"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Procedural Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          " Handles skills and processes"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Declarative Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this),
          " Explicit knowledge that can be verbalized"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Implicit Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          " Unconscious, automatic knowledge"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Associative Memory:" }, void 0, false, {
            fileName: "app/routes/memory.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          " Connected ideas and concepts"
        ] }, void 0, true, {
          fileName: "app/routes/memory.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Each memory can be tagged for better organization and retrieval, and the system uses advanced vector embeddings to find semantically similar memories even when exact keywords don't match." }, void 0, false, {
        fileName: "app/routes/memory.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/memory.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/memory.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(MemoryPage, "fjAL7n5WhLoZeN0OT0wud5md5tU=", false, function() {
  return [useLoaderData];
});
_c = MemoryPage;
var _c;
$RefreshReg$(_c, "MemoryPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MemoryPage as default
};
//# sourceMappingURL=/build/routes/memory-DTVLJFGK.js.map
