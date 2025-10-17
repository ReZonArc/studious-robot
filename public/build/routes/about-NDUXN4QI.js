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
import "/build/_shared/chunk-QT64XSGC.js";
import {
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/routes/about.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function AboutPage() {
  _s();
  const {
    title,
    version,
    description
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-2", children: title }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl opacity-70", children: description }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Overview" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "Deep Tree Echo is a unique AI-powered workspace environment designed to explore cognitive architectures and creative development. It combines several key technologies:" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-5 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Echo State Networks for temporal pattern recognition" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Advanced vector-based memory systems" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Supabase database integration for persistent storage" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "React and Remix for a responsive user interface" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "OpenAI integration for enhanced AI capabilities" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Core Features" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Echo Home Map" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: "Spatial interface with specialized rooms for different functionalities" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Memory System" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: "Store and retrieve information using vector embeddings and semantic search" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "AI Chat" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: "Interact with Deep Tree Echo's AI capabilities through a conversational interface" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: "Code Editor" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: "Development environment for coding and experimenting" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg shadow-md md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Technical Architecture" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-2", children: "Frontend" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "React" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Remix" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Tailwind CSS" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 89,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Framer Motion" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-2", children: "Backend" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Node.js" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 96,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Supabase" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 97,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Vector Embeddings" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 98,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Netlify Deployment" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 99,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-2", children: "AI Integration" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "OpenAI API" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Echo State Networks" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 106,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Self-Morphing Stream Networks" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 107,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Hypergraph Knowledge Representation" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 108,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 104,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-12 text-center opacity-70", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Deep Tree Echo \u2022 Version ",
        version
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mt-1", children: "\xA9 2025 Deep Tree Echo Project" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(AboutPage, "CQf7SKQ13dR6nQzSPSgipd45xPY=", false, function() {
  return [useLoaderData];
});
_c = AboutPage;
var _c;
$RefreshReg$(_c, "AboutPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AboutPage as default
};
//# sourceMappingURL=/build/routes/about-NDUXN4QI.js.map
