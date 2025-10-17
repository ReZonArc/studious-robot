import {
  require_supabase
} from "/build/_shared/chunk-TO6AJYNP.js";
import {
  require_node
} from "/build/_shared/chunk-ZP6BZTHN.js";
import {
  Form,
  useActionData,
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

// app/routes/login.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1760694711122.6702";
}
function Login() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const [isSignUp, setIsSignUp] = (0, import_react2.useState)(false);
  if (typeof window !== "undefined") {
    window.ENV = data.ENV;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: isSignUp ? "Create your account" : "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        isSignUp ? "Already have an account? " : "Don't have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "font-medium text-primary hover:text-primary/80", onClick: () => setIsSignUp(!isSignUp), children: isSignUp ? "Sign in" : "Sign up" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 dark:bg-red-900/30 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800 dark:text-red-200", children: "Error" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-red-700 dark:text-red-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.error }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 115,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 110,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 108,
      columnNumber: 31
    }, this),
    actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-green-50 dark:bg-green-900/30 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-green-800 dark:text-green-200", children: "Success" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 124,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-green-700 dark:text-green-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.success }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 128,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 127,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 123,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 121,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: isSignUp ? "signup" : "login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800", placeholder: "Email address" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: isSignUp ? "new-password" : "current-password", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800", placeholder: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: isSignUp ? "Sign up" : "Sign in" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(Login, "HnsoGlRLJz5MF6L2KvW+hdRiIwU=", false, function() {
  return [useLoaderData, useActionData];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-7CIUQG2O.js.map
