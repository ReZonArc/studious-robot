import {
  FiInfo,
  FiSend,
  FiSettings
} from "/build/_shared/chunk-SOKF3QZZ.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// empty-module:~/services/ai.server
var require_ai = __commonJS({
  "empty-module:~/services/ai.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/chat.tsx
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);

// app/components/ChatInterface.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ChatInterface.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ChatInterface.tsx"
  );
  import.meta.hot.lastModified = "1760694711121.6702";
}
var ChatInterface = ({
  messages,
  onSendMessage,
  isProcessing = false,
  apiKeyConfigured = false,
  onConfigureApiKey
}) => {
  _s();
  const [input, setInput] = (0, import_react.useState)("");
  const messagesEndRef = (0, import_react.useRef)(null);
  const inputRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [messages]);
  (0, import_react.useEffect)(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      onSendMessage(input);
      setInput("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-card text-card-foreground px-4 py-3 border-b border-border flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Deep Tree Echo Chat" }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        isProcessing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-3 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded animate-pulse", children: "Processing..." }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 63,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        !apiKeyConfigured && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onConfigureApiKey, className: "p-1 rounded-md text-yellow-400 hover:bg-yellow-400/20", title: "API Key not configured", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiInfo, { size: 18 }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 68,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onConfigureApiKey, className: "p-1 rounded-md hover:bg-primary/20", title: "Chat Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiSettings, { size: 18 }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      messages.map((message) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary/20 text-foreground" : "bg-card text-card-foreground"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-sm dark:prose-invert", children: message.content.split("\n").map((line, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: i === 0 ? "mt-0" : "", children: line }, i, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 82,
          columnNumber: 63
        }, this)) }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs opacity-70 mt-1", children: new Date(message.timestamp).toLocaleTimeString() }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, message.id, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 79,
        columnNumber: 34
      }, this)),
      messages.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center max-w-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-medium mb-2", children: "Welcome to Deep Tree Echo" }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "opacity-70 mb-4", children: "I'm your AI architect and polymath assistant. Ask me anything about programming, mathematics, cognitive science, or philosophical exploration." }, void 0, false, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        !apiKeyConfigured && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-500/20 text-yellow-400 p-3 rounded-md text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "For full capabilities, please configure your OpenAI API key in settings. Without an API key, I'll provide simulated responses." }, void 0, false, {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onConfigureApiKey, className: "mt-2 px-3 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-md", children: "Configure API Key" }, void 0, false, {
            fileName: "app/components/ChatInterface.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ChatInterface.tsx",
          lineNumber: 98,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 92,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: messagesEndRef }, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-border p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputRef, type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "Type your message...", className: "flex-1 bg-input border border-border rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary", disabled: isProcessing }, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-primary text-white px-4 py-2 rounded-r-md disabled:opacity-50", disabled: !input.trim() || isProcessing, children: isProcessing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-block animate-pulse", children: "..." }, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 118,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiSend, {}, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 118,
        columnNumber: 87
      }, this) }, void 0, false, {
        fileName: "app/components/ChatInterface.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ChatInterface.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ChatInterface.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s(ChatInterface, "5Pur+RmxhajK3st9lLtJqcCQG58=");
_c = ChatInterface;
var ChatInterface_default = ChatInterface;
var _c;
$RefreshReg$(_c, "ChatInterface");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/chat.tsx
var import_ai = __toESM(require_ai(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/chat.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function ChatPage() {
  _s2();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [messages, setMessages] = (0, import_react3.useState)([loaderData.initialMessage]);
  const [showApiKeyModal, setShowApiKeyModal] = (0, import_react3.useState)(false);
  const [apiKey, setApiKey] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    if (actionData?.userMessage) {
      setMessages((prev) => [...prev, actionData.userMessage]);
    }
    if (actionData?.assistantMessage) {
      setMessages((prev) => [...prev, actionData.assistantMessage]);
    }
  }, [actionData]);
  const handleSendMessage = (content) => {
  };
  const isProcessing = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "history", value: JSON.stringify(messages) }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "content", id: "message-content" }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChatInterface_default, { messages, onSendMessage: (content) => {
        const input = document.getElementById("message-content");
        if (input) {
          input.value = content;
          input.form?.requestSubmit();
        }
      }, isProcessing, apiKeyConfigured: loaderData.apiKeyConfigured, onConfigureApiKey: () => setShowApiKeyModal(true) }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    showApiKeyModal && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-card rounded-lg shadow-xl max-w-md w-full p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Configure OpenAI API Key" }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4 text-sm opacity-80", children: "To use the full capabilities of Deep Tree Echo, please provide your OpenAI API key. Your key is stored securely and only used for generating AI responses." }, void 0, false, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }, void 0, false, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "password", id: "api-key", value: apiKey, onChange: (e) => setApiKey(e.target.value), className: "w-full bg-input border border-border rounded-md px-3 py-2", placeholder: "sk-..." }, void 0, false, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs mt-1 opacity-70", children: [
          "You can get your API key from the ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://platform.openai.com/api-keys", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "OpenAI dashboard" }, void 0, false, {
            fileName: "app/routes/chat.tsx",
            lineNumber: 144,
            columnNumber: 51
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-end space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setShowApiKeyModal(false), className: "px-4 py-2 border border-border rounded-md", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => {
          setShowApiKeyModal(false);
        }, className: "px-4 py-2 bg-primary text-white rounded-md", disabled: !apiKey.trim().startsWith("sk-"), children: "Save API Key" }, void 0, false, {
          fileName: "app/routes/chat.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/chat.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 131,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 130,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chat.tsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_s2(ChatPage, "tcoKthaU7ZobrfdEpY/UCSmaPLQ=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c2 = ChatPage;
var _c2;
$RefreshReg$(_c2, "ChatPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ChatPage as default
};
//# sourceMappingURL=/build/routes/chat-BMMLMK6M.js.map
