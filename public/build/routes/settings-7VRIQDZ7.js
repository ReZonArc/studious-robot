import {
  FiRefreshCw,
  FiSave,
  FiTrash2
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

// app/routes/settings.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function SettingsPage() {
  _s();
  const {
    apiKeyConfigured,
    theme: savedTheme,
    memoryStats
  } = useLoaderData();
  const [theme, setTheme] = (0, import_react2.useState)(savedTheme);
  const [apiKey, setApiKey] = (0, import_react2.useState)("");
  const [editorPreference, setEditorPreference] = (0, import_react2.useState)("monaco");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-6 max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Settings" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 dark:text-gray-400", children: "Configure Deep Tree Echo to your preferences" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2 space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "API Configuration" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "openai-api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "openai-api-key", value: apiKey, onChange: (e) => setApiKey(e.target.value), placeholder: apiKeyConfigured ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "sk-...", className: "flex-1 bg-input border border-border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-primary text-white px-4 py-2 rounded-r-md", children: "Save" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 65,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs mt-1 opacity-70", children: "Required for AI chat and memory embedding generation" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "supabase-url", className: "block text-sm font-medium mb-1", children: "Supabase URL" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 75,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "supabase-url", placeholder: "https://example.supabase.co", className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary", disabled: true }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 78,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "supabase-key", className: "block text-sm font-medium mb-1", children: "Supabase Anon Key" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "supabase-key", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary", disabled: true }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 89,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Appearance" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-2", children: "Theme" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setTheme("light"), className: `p-4 rounded-lg border ${theme === "light" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium mb-1", children: "Light" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 107,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-white border border-gray-200 rounded" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 108,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 106,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setTheme("dark"), className: `p-4 rounded-lg border ${theme === "dark" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium mb-1", children: "Dark" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 111,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-900 border border-gray-700 rounded" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 112,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 110,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 105,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "flex items-center px-4 py-2 bg-primary text-white rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiSave, { className: "mr-2" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, this),
              "Save Appearance"
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Editor Preferences" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-2", children: "Editor Type" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 132,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setEditorPreference("monaco"), className: `p-4 rounded-lg border ${editorPreference === "monaco" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: "Monaco Editor" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 137,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70 mt-1", children: "VS Code-like experience" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 136,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setEditorPreference("codemirror"), className: `p-4 rounded-lg border ${editorPreference === "codemirror" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: "CodeMirror" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 141,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70 mt-1", children: "Lightweight editor" }, void 0, false, {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 140,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 135,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "font-size", className: "block text-sm font-medium mb-1", children: "Font Size" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 148,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "font-size", className: "w-full bg-input border border-border rounded-md px-3 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "12", children: "12px" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 152,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "14", selected: true, children: "14px" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 153,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "16", children: "16px" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 154,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "18", children: "18px" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 155,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 151,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 147,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "flex items-center px-4 py-2 bg-primary text-white rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiSave, { className: "mr-2" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this),
              "Save Editor Preferences"
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Account Status" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Login Status:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 175,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-400", children: "Signed In" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 176,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "API Connection:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 179,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: apiKeyConfigured ? "text-green-400" : "text-yellow-400", children: apiKeyConfigured ? "Connected" : "Not Configured" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 180,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 178,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Memory Records:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 185,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: memoryStats.total }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 186,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 184,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Recent Memories:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 189,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: memoryStats.recentlyAdded }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 190,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 173,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 pt-4 border-t border-border", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full flex items-center justify-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiRefreshCw, { className: "mr-2" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 196,
                columnNumber: 17
              }, this),
              "Sync Memory"
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiTrash2, { className: "mr-2" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 200,
                columnNumber: 17
              }, this),
              "Clear Memory"
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: "About" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-70 mb-4", children: "Deep Tree Echo is an advanced AI workspace with integrated memory systems and interactive components." }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Version:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 214,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "1.0.0" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 215,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 213,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Last Updated:" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 218,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "April 15, 2025" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 219,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(SettingsPage, "BduuFGTAcW4pUoLaQcEALDYYQqY=", false, function() {
  return [useLoaderData];
});
_c = SettingsPage;
var _c;
$RefreshReg$(_c, "SettingsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SettingsPage as default
};
//# sourceMappingURL=/build/routes/settings-7VRIQDZ7.js.map
