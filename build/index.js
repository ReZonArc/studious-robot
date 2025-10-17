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
import { jsx } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx2(Outlet, {});
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => SettingsPage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FiSave, FiRefreshCw, FiTrash2 } from "react-icons/fi";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
async function loader() {
  return json({
    apiKeyConfigured: !!process.env.OPENAI_API_KEY,
    theme: "dark",
    memoryStats: {
      total: 42,
      recentlyAdded: 7
    }
  });
}
function SettingsPage() {
  let { apiKeyConfigured, theme: savedTheme, memoryStats } = useLoaderData(), [theme, setTheme] = useState(savedTheme), [apiKey, setApiKey] = useState(""), [editorPreference, setEditorPreference] = useState("monaco");
  return /* @__PURE__ */ jsxs2("div", { className: "container mx-auto p-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxs2("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx3("h1", { className: "text-3xl font-bold", children: "Settings" }),
      /* @__PURE__ */ jsx3("p", { className: "text-gray-500 dark:text-gray-400", children: "Configure Deep Tree Echo to your preferences" })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs2("div", { className: "md:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxs2("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx3("h2", { className: "text-xl font-semibold mb-4", children: "API Configuration" }),
          /* @__PURE__ */ jsxs2("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { htmlFor: "openai-api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }),
              /* @__PURE__ */ jsxs2("div", { className: "flex", children: [
                /* @__PURE__ */ jsx3(
                  "input",
                  {
                    type: "password",
                    id: "openai-api-key",
                    value: apiKey,
                    onChange: (e) => setApiKey(e.target.value),
                    placeholder: apiKeyConfigured ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "sk-...",
                    className: "flex-1 bg-input border border-border rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  }
                ),
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    type: "button",
                    className: "bg-primary text-white px-4 py-2 rounded-r-md",
                    children: "Save"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx3("p", { className: "text-xs mt-1 opacity-70", children: "Required for AI chat and memory embedding generation" })
            ] }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { htmlFor: "supabase-url", className: "block text-sm font-medium mb-1", children: "Supabase URL" }),
              /* @__PURE__ */ jsx3(
                "input",
                {
                  type: "text",
                  id: "supabase-url",
                  placeholder: "https://example.supabase.co",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
                  disabled: !0
                }
              ),
              /* @__PURE__ */ jsx3("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" })
            ] }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { htmlFor: "supabase-key", className: "block text-sm font-medium mb-1", children: "Supabase Anon Key" }),
              /* @__PURE__ */ jsx3(
                "input",
                {
                  type: "password",
                  id: "supabase-key",
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
                  disabled: !0
                }
              ),
              /* @__PURE__ */ jsx3("p", { className: "text-xs mt-1 opacity-70", children: "Set in environment variables" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx3("h2", { className: "text-xl font-semibold mb-4", children: "Appearance" }),
          /* @__PURE__ */ jsxs2("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { className: "block text-sm font-medium mb-2", children: "Theme" }),
              /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs2(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTheme("light"),
                    className: `p-4 rounded-lg border ${theme === "light" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsx3("div", { className: "font-medium mb-1", children: "Light" }),
                      /* @__PURE__ */ jsx3("div", { className: "h-10 bg-white border border-gray-200 rounded" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs2(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTheme("dark"),
                    className: `p-4 rounded-lg border ${theme === "dark" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsx3("div", { className: "font-medium mb-1", children: "Dark" }),
                      /* @__PURE__ */ jsx3("div", { className: "h-10 bg-gray-900 border border-gray-700 rounded" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx3("div", { className: "pt-2", children: /* @__PURE__ */ jsxs2(
              "button",
              {
                type: "button",
                className: "flex items-center px-4 py-2 bg-primary text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsx3(FiSave, { className: "mr-2" }),
                  "Save Appearance"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx3("h2", { className: "text-xl font-semibold mb-4", children: "Editor Preferences" }),
          /* @__PURE__ */ jsxs2("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { className: "block text-sm font-medium mb-2", children: "Editor Type" }),
              /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs2(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditorPreference("monaco"),
                    className: `p-4 rounded-lg border ${editorPreference === "monaco" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsx3("div", { className: "font-medium", children: "Monaco Editor" }),
                      /* @__PURE__ */ jsx3("div", { className: "text-xs opacity-70 mt-1", children: "VS Code-like experience" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs2(
                  "button",
                  {
                    type: "button",
                    onClick: () => setEditorPreference("codemirror"),
                    className: `p-4 rounded-lg border ${editorPreference === "codemirror" ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsx3("div", { className: "font-medium", children: "CodeMirror" }),
                      /* @__PURE__ */ jsx3("div", { className: "text-xs opacity-70 mt-1", children: "Lightweight editor" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx3("label", { htmlFor: "font-size", className: "block text-sm font-medium mb-1", children: "Font Size" }),
              /* @__PURE__ */ jsxs2(
                "select",
                {
                  id: "font-size",
                  className: "w-full bg-input border border-border rounded-md px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsx3("option", { value: "12", children: "12px" }),
                    /* @__PURE__ */ jsx3("option", { value: "14", selected: !0, children: "14px" }),
                    /* @__PURE__ */ jsx3("option", { value: "16", children: "16px" }),
                    /* @__PURE__ */ jsx3("option", { value: "18", children: "18px" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx3("div", { className: "pt-2", children: /* @__PURE__ */ jsxs2(
              "button",
              {
                type: "button",
                className: "flex items-center px-4 py-2 bg-primary text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsx3(FiSave, { className: "mr-2" }),
                  "Save Editor Preferences"
                ]
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs2("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx3("h2", { className: "text-xl font-semibold mb-4", children: "Account Status" }),
          /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Login Status:" }),
              /* @__PURE__ */ jsx3("span", { className: "text-green-400", children: "Signed In" })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "API Connection:" }),
              /* @__PURE__ */ jsx3("span", { className: apiKeyConfigured ? "text-green-400" : "text-yellow-400", children: apiKeyConfigured ? "Connected" : "Not Configured" })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Memory Records:" }),
              /* @__PURE__ */ jsx3("span", { children: memoryStats.total })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Recent Memories:" }),
              /* @__PURE__ */ jsx3("span", { children: memoryStats.recentlyAdded })
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("div", { className: "mt-6 pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxs2(
              "button",
              {
                className: "w-full flex items-center justify-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md mb-2",
                children: [
                  /* @__PURE__ */ jsx3(FiRefreshCw, { className: "mr-2" }),
                  "Sync Memory"
                ]
              }
            ),
            /* @__PURE__ */ jsxs2(
              "button",
              {
                className: "w-full flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md",
                children: [
                  /* @__PURE__ */ jsx3(FiTrash2, { className: "mr-2" }),
                  "Clear Memory"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("section", { className: "bg-card p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx3("h2", { className: "text-xl font-semibold mb-2", children: "About" }),
          /* @__PURE__ */ jsx3("p", { className: "text-sm opacity-70 mb-4", children: "Deep Tree Echo is an advanced AI workspace with integrated memory systems and interactive components." }),
          /* @__PURE__ */ jsxs2("div", { className: "text-sm space-y-1", children: [
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Version:" }),
              /* @__PURE__ */ jsx3("span", { children: "1.0.0" })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx3("span", { children: "Last Updated:" }),
              /* @__PURE__ */ jsx3("span", { children: "April 15, 2025" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/terminal.tsx
var terminal_exports = {};
__export(terminal_exports, {
  action: () => action,
  default: () => TerminalPage,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useActionData, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { useEffect as useEffect2, useState as useState3 } from "react";

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
import { useEffect, useRef, useState as useState2 } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from "xterm-addon-web-links";
import { jsx as jsx4 } from "react/jsx-runtime";
var TerminalComponent = ({
  onCommand,
  initialOutput = [],
  commandHistory = [],
  isBusy = !1
}) => {
  let terminalRef = useRef(null), xtermRef = useRef(null), fitAddonRef = useRef(null), [isTerminalReady, setIsTerminalReady] = useState2(!1), [inputBuffer, setInputBuffer] = useState2(""), [historyIndex, setHistoryIndex] = useState2(-1);
  useEffect(() => {
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
  return useEffect(() => {
    if (!isTerminalReady)
      return;
    let handleResize = () => {
      fitAddonRef.current && fitAddonRef.current.fit();
    };
    return window.addEventListener("resize", handleResize), () => window.removeEventListener("resize", handleResize);
  }, [isTerminalReady]), /* @__PURE__ */ jsx4("div", { className: "h-full w-full", ref: terminalRef });
}, TerminalComponent_default = TerminalComponent;

// app/routes/terminal.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
async function loader2() {
  return json2({
    title: "Terminal",
    description: "Interactive command-line interface with script execution and file system simulation"
  });
}
async function action({ request }) {
  let command = (await request.formData()).get("command");
  if (!command)
    return json2({ error: "Command is required" });
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
    return json2({ output });
  } catch (error) {
    return json2({
      error: `Error executing command: ${error instanceof Error ? error.message : "Unknown error"}`
    });
  }
}
function TerminalPage() {
  let { title, description } = useLoaderData2(), actionData = useActionData(), [output, setOutput] = useState3([]), [commandHistory, setCommandHistory] = useState3([]), [isBusy, setIsBusy] = useState3(!1);
  return useEffect2(() => {
    setOutput([
      "Welcome to Deep Tree Echo Terminal",
      "Type 'help' for available commands",
      "Use Tab for command completion and Up/Down arrows for history",
      ""
    ]);
  }, []), useEffect2(() => {
    actionData?.output && setOutput((prev) => [...prev, actionData.output]), actionData?.error && setOutput((prev) => [...prev, `Error: ${actionData.error}`]);
  }, [actionData]), /* @__PURE__ */ jsxs3("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxs3("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsx5("h1", { className: "text-2xl font-bold", children: title }),
      /* @__PURE__ */ jsx5("p", { className: "text-sm opacity-70", children: description })
    ] }),
    /* @__PURE__ */ jsx5("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsx5(
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
      }
    ) }),
    /* @__PURE__ */ jsx5("footer", { className: "bg-card text-card-foreground px-6 py-2 border-t border-border", children: /* @__PURE__ */ jsxs3("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx5("div", { className: "text-xs opacity-70", children: isBusy ? "Processing command..." : "Ready" }),
      /* @__PURE__ */ jsxs3("div", { className: "text-xs opacity-70", children: [
        /* @__PURE__ */ jsx5("span", { className: "font-mono", children: "Tab" }),
        ": completion \u2022",
        /* @__PURE__ */ jsx5("span", { className: "font-mono ml-1", children: "\u2191/\u2193" }),
        ": history \u2022",
        /* @__PURE__ */ jsx5("span", { className: "font-mono ml-1", children: "Ctrl+C" }),
        ": cancel \u2022",
        /* @__PURE__ */ jsx5("span", { className: "font-mono ml-1", children: "Ctrl+L" }),
        ": clear"
      ] })
    ] }) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var meta = () => [
  { title: "Deep Tree Echo - AI Workspace" },
  { name: "description", content: "Advanced AI workspace environment with integrated memory systems and interactive components" }
], loader3 = async ({}) => json3({
  ENV: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }
});
function Index() {
  let data = useLoaderData3();
  return typeof window < "u" && (window.ENV = data.ENV), /* @__PURE__ */ jsx6("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-col items-center gap-16", children: [
    /* @__PURE__ */ jsxs4("header", { className: "flex flex-col items-center gap-9", children: [
      /* @__PURE__ */ jsxs4("h1", { className: "leading text-2xl font-bold text-gray-800 dark:text-gray-100", children: [
        "Welcome to ",
        /* @__PURE__ */ jsx6("span", { children: "Deep Tree Echo" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "h-[144px] w-[434px]", children: [
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: "/logo-light.png",
            alt: "Deep Tree Echo",
            className: "block w-full dark:hidden"
          }
        ),
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: "/logo-dark.png",
            alt: "Deep Tree Echo",
            className: "hidden w-full dark:block"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("nav", { className: "flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700", children: [
      /* @__PURE__ */ jsx6("p", { className: "leading-6 text-gray-700 dark:text-gray-200", children: "What's next?" }),
      /* @__PURE__ */ jsx6("ul", { children: resources.map(({ href, text, icon }) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsxs4(
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
        }
      ) }, href)) })
    ] })
  ] }) });
}
var resources = [
  {
    href: "/map",
    text: "Echo Home Map",
    icon: /* @__PURE__ */ jsx6(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx6(
          "path",
          {
            d: "M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    )
  },
  {
    href: "/editor",
    text: "Code Editor",
    icon: /* @__PURE__ */ jsx6(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx6(
          "path",
          {
            d: "M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    )
  },
  {
    href: "/chat",
    text: "AI Chat",
    icon: /* @__PURE__ */ jsx6(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx6(
          "path",
          {
            d: "M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      }
    )
  },
  {
    href: "/memory",
    text: "Memory System",
    icon: /* @__PURE__ */ jsx6(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "none",
        className: "stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300",
        children: /* @__PURE__ */ jsx6(
          "path",
          {
            d: "M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z",
            strokeWidth: "1.5"
          }
        )
      }
    )
  }
];

// app/routes/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => EditorPage,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { useState as useState4 } from "react";
import { FiCode, FiSave as FiSave2, FiDownload, FiCopy, FiSettings } from "react-icons/fi";

// app/components/MonacoEditor.tsx
import { useEffect as useEffect3, useRef as useRef2 } from "react";
import * as monaco from "monaco-editor";
import { jsx as jsx7 } from "react/jsx-runtime";
var MonacoEditor = ({
  value,
  onChange,
  language = "typescript",
  theme = "vs-dark",
  options = {},
  onMount
}) => {
  let containerRef = useRef2(null), editorRef = useRef2(null), valueRef = useRef2(value);
  return useEffect3(() => {
    valueRef.current = value;
  }, [value]), useEffect3(() => {
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
  }, []), useEffect3(() => {
    if (!editorRef.current)
      return;
    let model = editorRef.current.getModel();
    model && monaco.editor.setModelLanguage(model, language), monaco.editor.setTheme(theme);
  }, [language, theme]), useEffect3(() => {
    editorRef.current && value !== valueRef.current && (valueRef.current = value, editorRef.current.setValue(value));
  }, [value]), useEffect3(() => {
    editorRef.current && editorRef.current.updateOptions(options);
  }, [options]), /* @__PURE__ */ jsx7(
    "div",
    {
      ref: containerRef,
      className: "h-full w-full",
      "data-testid": "monaco-editor-container"
    }
  );
}, MonacoEditor_default = MonacoEditor;

// app/routes/editor.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
async function loader4() {
  return json4({
    title: "Code Editor",
    editorType: "monaco"
  });
}
function EditorPage() {
  let { title, editorType } = useLoaderData4(), [code, setCode] = useState4(`// Start coding here

function hello() {
  console.log('Hello from Deep Tree Echo!');
}

hello();`), [language, setLanguage] = useState4("typescript"), [theme, setTheme] = useState4("vs-dark");
  return /* @__PURE__ */ jsxs5("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxs5("header", { className: "bg-card text-card-foreground px-6 py-3 border-b border-border flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx8(FiCode, { className: "mr-2" }),
        /* @__PURE__ */ jsx8("h1", { className: "font-medium", children: title })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsxs5(
          "select",
          {
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            className: "bg-card/50 border border-border rounded px-2 py-1 text-sm",
            children: [
              /* @__PURE__ */ jsx8("option", { value: "typescript", children: "TypeScript" }),
              /* @__PURE__ */ jsx8("option", { value: "javascript", children: "JavaScript" }),
              /* @__PURE__ */ jsx8("option", { value: "python", children: "Python" }),
              /* @__PURE__ */ jsx8("option", { value: "json", children: "JSON" })
            ]
          }
        ),
        /* @__PURE__ */ jsx8("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Copy code", children: /* @__PURE__ */ jsx8(FiCopy, { size: 18 }) }),
        /* @__PURE__ */ jsx8("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Save code", children: /* @__PURE__ */ jsx8(FiSave2, { size: 18 }) }),
        /* @__PURE__ */ jsx8("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Download file", children: /* @__PURE__ */ jsx8(FiDownload, { size: 18 }) }),
        /* @__PURE__ */ jsx8("button", { className: "p-2 hover:bg-primary/20 rounded-md", title: "Editor settings", children: /* @__PURE__ */ jsx8(FiSettings, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsx8(
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
      }
    ) }),
    /* @__PURE__ */ jsx8("footer", { className: "bg-card text-card-foreground px-6 py-2 border-t border-border", children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs5("div", { className: "text-xs opacity-70", children: [
        "Editor Type: ",
        editorType
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "text-xs opacity-70", children: [
        "Language: ",
        language
      ] })
    ] }) })
  ] });
}

// app/routes/memory.tsx
var memory_exports = {};
__export(memory_exports, {
  default: () => MemoryPage,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { useState as useState5 } from "react";

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
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
async function loader5({ request }) {
  try {
    let user = await requireAuthSession(request), memoryService2 = getMemoryService(user.id), stats = await memoryService2.getMemoryStats(), recentMemories = await memoryService2.listMemories({ limit: 10 });
    return json5({ stats, recentMemories });
  } catch {
    return json5({ stats: null, recentMemories: [] });
  }
}
function MemoryPage() {
  let { stats, recentMemories } = useLoaderData5(), [activeTab, setActiveTab] = useState5("browse");
  return /* @__PURE__ */ jsxs6("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ jsx9("h1", { className: "text-3xl font-bold mb-6", children: "Deep Tree Echo Memory System" }),
    stats ? /* @__PURE__ */ jsxs6("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxs6("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium mb-1", children: "Total Memories" }),
          /* @__PURE__ */ jsx9("p", { className: "text-3xl font-bold", children: stats.total })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium mb-1", children: "Recently Added" }),
          /* @__PURE__ */ jsx9("p", { className: "text-3xl font-bold", children: stats.recentlyAdded })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium mb-1", children: "Memory Types" }),
          /* @__PURE__ */ jsx9("p", { className: "text-3xl font-bold", children: Object.keys(stats.byType).length })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium mb-1", children: "Unique Tags" }),
          /* @__PURE__ */ jsx9("p", { className: "text-3xl font-bold", children: Object.keys(stats.byTag).length })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "flex border-b border-gray-200 mb-6", children: [
        /* @__PURE__ */ jsx9(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "browse" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("browse"),
            children: "Browse Memories"
          }
        ),
        /* @__PURE__ */ jsx9(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "search" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("search"),
            children: "Search"
          }
        ),
        /* @__PURE__ */ jsx9(
          "button",
          {
            className: `py-2 px-4 ${activeTab === "create" ? "border-b-2 border-primary font-medium" : ""}`,
            onClick: () => setActiveTab("create"),
            children: "Create Memory"
          }
        )
      ] }),
      activeTab === "browse" && /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx9("h2", { className: "text-xl font-semibold mb-4", children: "Recent Memories" }),
        recentMemories.length > 0 ? /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: recentMemories.map((memory) => /* @__PURE__ */ jsxs6("div", { className: "bg-card p-4 rounded-lg shadow", children: [
          /* @__PURE__ */ jsx9("h3", { className: "font-medium mb-2", children: memory.title }),
          /* @__PURE__ */ jsx9("p", { className: "text-sm mb-3 line-clamp-3", children: memory.content }),
          /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap gap-2", children: memory.tags.map((tag) => /* @__PURE__ */ jsx9("span", { className: "bg-primary/20 text-primary text-xs px-2 py-1 rounded", children: tag }, tag)) }),
          /* @__PURE__ */ jsx9("div", { className: "text-xs mt-3 text-gray-500", children: new Date(memory.createdAt).toLocaleDateString() })
        ] }, memory.id)) }) : /* @__PURE__ */ jsx9("p", { children: "No memories found. Create your first memory to get started." })
      ] }),
      activeTab === "search" && /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsxs6("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx9("label", { htmlFor: "search", className: "block text-sm font-medium mb-1", children: "Search Memories" }),
          /* @__PURE__ */ jsxs6("div", { className: "flex", children: [
            /* @__PURE__ */ jsx9(
              "input",
              {
                type: "text",
                id: "search",
                className: "flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Enter search terms..."
              }
            ),
            /* @__PURE__ */ jsx9("button", { className: "bg-primary text-white px-4 py-2 rounded-r-md", children: "Search" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx9("h3", { className: "text-lg font-medium mb-3", children: "Search Results" }),
          /* @__PURE__ */ jsx9("p", { className: "text-gray-500", children: "Enter a search term above to find memories." })
        ] })
      ] }),
      activeTab === "create" && /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx9("h2", { className: "text-xl font-semibold mb-4", children: "Create New Memory" }),
        /* @__PURE__ */ jsxs6("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx9("label", { htmlFor: "title", className: "block text-sm font-medium mb-1", children: "Title" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                type: "text",
                id: "title",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Memory title"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx9("label", { htmlFor: "content", className: "block text-sm font-medium mb-1", children: "Content" }),
            /* @__PURE__ */ jsx9(
              "textarea",
              {
                id: "content",
                rows: 5,
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "Memory content"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx9("label", { htmlFor: "type", className: "block text-sm font-medium mb-1", children: "Memory Type" }),
            /* @__PURE__ */ jsxs6(
              "select",
              {
                id: "type",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                children: [
                  /* @__PURE__ */ jsx9("option", { value: "memory", children: "General Memory" }),
                  /* @__PURE__ */ jsx9("option", { value: "episodic", children: "Episodic" }),
                  /* @__PURE__ */ jsx9("option", { value: "semantic", children: "Semantic" }),
                  /* @__PURE__ */ jsx9("option", { value: "procedural", children: "Procedural" }),
                  /* @__PURE__ */ jsx9("option", { value: "declarative", children: "Declarative" }),
                  /* @__PURE__ */ jsx9("option", { value: "implicit", children: "Implicit" }),
                  /* @__PURE__ */ jsx9("option", { value: "associative", children: "Associative" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx9("label", { htmlFor: "tags", className: "block text-sm font-medium mb-1", children: "Tags (comma separated)" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                type: "text",
                id: "tags",
                className: "w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
                placeholder: "memory, important, concept"
              }
            )
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "pt-2", children: /* @__PURE__ */ jsx9(
            "button",
            {
              type: "submit",
              className: "bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90",
              children: "Create Memory"
            }
          ) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsx9("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6", children: /* @__PURE__ */ jsxs6("div", { className: "flex", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx9("svg", { className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx9("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsx9("div", { className: "ml-3", children: /* @__PURE__ */ jsx9("p", { className: "text-sm text-yellow-700", children: "You need to be signed in to access the Memory System." }) })
    ] }) }),
    /* @__PURE__ */ jsxs6("div", { className: "bg-card p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ jsx9("h2", { className: "text-xl font-semibold mb-4", children: "About the Memory System" }),
      /* @__PURE__ */ jsx9("p", { className: "mb-4", children: "The Deep Tree Echo Memory System is a sophisticated cognitive architecture that stores and retrieves information using advanced vector embeddings and semantic search capabilities." }),
      /* @__PURE__ */ jsx9("p", { className: "mb-4", children: "The system supports multiple memory types inspired by human cognition:" }),
      /* @__PURE__ */ jsxs6("ul", { className: "list-disc pl-5 mb-4 space-y-1", children: [
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Episodic Memory:" }),
          " Stores experiences and events"
        ] }),
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Semantic Memory:" }),
          " Contains facts, concepts, and general knowledge"
        ] }),
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Procedural Memory:" }),
          " Handles skills and processes"
        ] }),
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Declarative Memory:" }),
          " Explicit knowledge that can be verbalized"
        ] }),
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Implicit Memory:" }),
          " Unconscious, automatic knowledge"
        ] }),
        /* @__PURE__ */ jsxs6("li", { children: [
          /* @__PURE__ */ jsx9("strong", { children: "Associative Memory:" }),
          " Connected ideas and concepts"
        ] })
      ] }),
      /* @__PURE__ */ jsx9("p", { children: "Each memory can be tagged for better organization and retrieval, and the system uses advanced vector embeddings to find semantically similar memories even when exact keywords don't match." })
    ] })
  ] });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutPage,
  loader: () => loader6
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
async function loader6() {
  return json6({
    title: "About Deep Tree Echo",
    version: "1.0.0",
    description: "Advanced AI workspace environment with integrated memory systems and interactive components"
  });
}
function AboutPage() {
  let { title, version, description } = useLoaderData6();
  return /* @__PURE__ */ jsxs7("div", { className: "container mx-auto p-6", children: [
    /* @__PURE__ */ jsxs7("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx10("h1", { className: "text-3xl font-bold mb-2", children: title }),
      /* @__PURE__ */ jsx10("p", { className: "text-xl opacity-70", children: description })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs7("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-4", children: "Overview" }),
        /* @__PURE__ */ jsx10("p", { className: "mb-4", children: "Deep Tree Echo is a unique AI-powered workspace environment designed to explore cognitive architectures and creative development. It combines several key technologies:" }),
        /* @__PURE__ */ jsxs7("ul", { className: "list-disc pl-5 space-y-2", children: [
          /* @__PURE__ */ jsx10("li", { children: "Echo State Networks for temporal pattern recognition" }),
          /* @__PURE__ */ jsx10("li", { children: "Advanced vector-based memory systems" }),
          /* @__PURE__ */ jsx10("li", { children: "Supabase database integration for persistent storage" }),
          /* @__PURE__ */ jsx10("li", { children: "React and Remix for a responsive user interface" }),
          /* @__PURE__ */ jsx10("li", { children: "OpenAI integration for enhanced AI capabilities" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("section", { className: "bg-card p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-4", children: "Core Features" }),
        /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-1", children: "Echo Home Map" }),
            /* @__PURE__ */ jsx10("p", { className: "text-sm opacity-80", children: "Spatial interface with specialized rooms for different functionalities" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-1", children: "Memory System" }),
            /* @__PURE__ */ jsx10("p", { className: "text-sm opacity-80", children: "Store and retrieve information using vector embeddings and semantic search" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-1", children: "AI Chat" }),
            /* @__PURE__ */ jsx10("p", { className: "text-sm opacity-80", children: "Interact with Deep Tree Echo's AI capabilities through a conversational interface" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-1", children: "Code Editor" }),
            /* @__PURE__ */ jsx10("p", { className: "text-sm opacity-80", children: "Development environment for coding and experimenting" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("section", { className: "bg-card p-6 rounded-lg shadow-md md:col-span-2", children: [
        /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-4", children: "Technical Architecture" }),
        /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-4", children: [
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-2", children: "Frontend" }),
            /* @__PURE__ */ jsxs7("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx10("li", { children: "React" }),
              /* @__PURE__ */ jsx10("li", { children: "Remix" }),
              /* @__PURE__ */ jsx10("li", { children: "Tailwind CSS" }),
              /* @__PURE__ */ jsx10("li", { children: "Framer Motion" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-2", children: "Backend" }),
            /* @__PURE__ */ jsxs7("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx10("li", { children: "Node.js" }),
              /* @__PURE__ */ jsx10("li", { children: "Supabase" }),
              /* @__PURE__ */ jsx10("li", { children: "Vector Embeddings" }),
              /* @__PURE__ */ jsx10("li", { children: "Netlify Deployment" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx10("h3", { className: "text-lg font-medium mb-2", children: "AI Integration" }),
            /* @__PURE__ */ jsxs7("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx10("li", { children: "OpenAI API" }),
              /* @__PURE__ */ jsx10("li", { children: "Echo State Networks" }),
              /* @__PURE__ */ jsx10("li", { children: "Self-Morphing Stream Networks" }),
              /* @__PURE__ */ jsx10("li", { children: "Hypergraph Knowledge Representation" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("footer", { className: "mt-12 text-center opacity-70", children: [
      /* @__PURE__ */ jsxs7("p", { children: [
        "Deep Tree Echo \u2022 Version ",
        version
      ] }),
      /* @__PURE__ */ jsx10("p", { className: "text-sm mt-1", children: "\xA9 2025 Deep Tree Echo Project" })
    ] })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  loader: () => loader7
});
import { json as json7, redirect as redirect2 } from "@remix-run/node";
import { Form, useActionData as useActionData2, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { useState as useState6 } from "react";
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
async function loader7({ request }) {
  let { data } = await supabaseClient.auth.getSession();
  return data.session ? redirect2("/") : json7({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  });
}
async function action2({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), action4 = formData.get("action");
  if (!email || !password)
    return json7({ error: "Email and password are required" });
  try {
    if (action4 === "signup") {
      let { error } = await supabaseClient.auth.signUp({
        email,
        password
      });
      if (error)
        throw error;
      return json7({ success: "Check your email for the confirmation link" });
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
    return json7({ error: error.message });
  }
}
function Login() {
  let data = useLoaderData7(), actionData = useActionData2(), [isSignUp, setIsSignUp] = useState6(!1);
  return typeof window < "u" && (window.ENV = data.ENV), /* @__PURE__ */ jsx11("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs8("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx11("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: isSignUp ? "Create your account" : "Sign in to your account" }),
      /* @__PURE__ */ jsxs8("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        isSignUp ? "Already have an account? " : "Don't have an account? ",
        /* @__PURE__ */ jsx11(
          "button",
          {
            className: "font-medium text-primary hover:text-primary/80",
            onClick: () => setIsSignUp(!isSignUp),
            children: isSignUp ? "Sign in" : "Sign up"
          }
        )
      ] })
    ] }),
    actionData?.error && /* @__PURE__ */ jsx11("div", { className: "rounded-md bg-red-50 dark:bg-red-900/30 p-4", children: /* @__PURE__ */ jsx11("div", { className: "flex", children: /* @__PURE__ */ jsxs8("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx11("h3", { className: "text-sm font-medium text-red-800 dark:text-red-200", children: "Error" }),
      /* @__PURE__ */ jsx11("div", { className: "mt-2 text-sm text-red-700 dark:text-red-300", children: /* @__PURE__ */ jsx11("p", { children: actionData.error }) })
    ] }) }) }),
    actionData?.success && /* @__PURE__ */ jsx11("div", { className: "rounded-md bg-green-50 dark:bg-green-900/30 p-4", children: /* @__PURE__ */ jsx11("div", { className: "flex", children: /* @__PURE__ */ jsxs8("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx11("h3", { className: "text-sm font-medium text-green-800 dark:text-green-200", children: "Success" }),
      /* @__PURE__ */ jsx11("div", { className: "mt-2 text-sm text-green-700 dark:text-green-300", children: /* @__PURE__ */ jsx11("p", { children: actionData.success }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs8(Form, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsx11("input", { type: "hidden", name: "action", value: isSignUp ? "signup" : "login" }),
      /* @__PURE__ */ jsxs8("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx11("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800",
              placeholder: "Email address"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx11("label", { htmlFor: "password", className: "sr-only", children: "Password" }),
          /* @__PURE__ */ jsx11(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: isSignUp ? "new-password" : "current-password",
              required: !0,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-gray-800",
              placeholder: "Password"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          children: isSignUp ? "Sign up" : "Sign in"
        }
      ) })
    ] })
  ] }) });
}

// app/routes/chat.tsx
var chat_exports = {};
__export(chat_exports, {
  action: () => action3,
  default: () => ChatPage,
  loader: () => loader8
});
import { json as json8 } from "@remix-run/node";
import { useActionData as useActionData3, useLoaderData as useLoaderData8, useNavigation, Form as Form2 } from "@remix-run/react";
import { useEffect as useEffect6, useState as useState8 } from "react";

// app/components/ChatInterface.tsx
import { useState as useState7, useRef as useRef3, useEffect as useEffect5 } from "react";
import { FiSend, FiSettings as FiSettings2, FiInfo } from "react-icons/fi";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var ChatInterface = ({
  messages,
  onSendMessage,
  isProcessing = !1,
  apiKeyConfigured = !1,
  onConfigureApiKey
}) => {
  let [input, setInput] = useState7(""), messagesEndRef = useRef3(null), inputRef = useRef3(null);
  useEffect5(() => {
    messagesEndRef.current && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]), useEffect5(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  let handleSubmit = (e) => {
    e.preventDefault(), input.trim() && !isProcessing && (onSendMessage(input), setInput(""));
  };
  return /* @__PURE__ */ jsxs9("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs9("div", { className: "bg-card text-card-foreground px-4 py-3 border-b border-border flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx12("span", { className: "font-medium", children: "Deep Tree Echo Chat" }),
        isProcessing && /* @__PURE__ */ jsx12("span", { className: "ml-3 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded animate-pulse", children: "Processing..." })
      ] }),
      /* @__PURE__ */ jsxs9("div", { className: "flex items-center space-x-2", children: [
        !apiKeyConfigured && /* @__PURE__ */ jsx12(
          "button",
          {
            onClick: onConfigureApiKey,
            className: "p-1 rounded-md text-yellow-400 hover:bg-yellow-400/20",
            title: "API Key not configured",
            children: /* @__PURE__ */ jsx12(FiInfo, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsx12(
          "button",
          {
            onClick: onConfigureApiKey,
            className: "p-1 rounded-md hover:bg-primary/20",
            title: "Chat Settings",
            children: /* @__PURE__ */ jsx12(FiSettings2, { size: 18 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      messages.map((message) => /* @__PURE__ */ jsx12(
        "div",
        {
          className: `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsxs9(
            "div",
            {
              className: `max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary/20 text-foreground" : "bg-card text-card-foreground"}`,
              children: [
                /* @__PURE__ */ jsx12("div", { className: "prose prose-sm dark:prose-invert", children: message.content.split(`
`).map((line, i) => /* @__PURE__ */ jsx12("p", { className: i === 0 ? "mt-0" : "", children: line }, i)) }),
                /* @__PURE__ */ jsx12("div", { className: "text-xs opacity-70 mt-1", children: new Date(message.timestamp).toLocaleTimeString() })
              ]
            }
          )
        },
        message.id
      )),
      messages.length === 0 && /* @__PURE__ */ jsx12("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ jsxs9("div", { className: "text-center max-w-md p-6", children: [
        /* @__PURE__ */ jsx12("h2", { className: "text-xl font-medium mb-2", children: "Welcome to Deep Tree Echo" }),
        /* @__PURE__ */ jsx12("p", { className: "opacity-70 mb-4", children: "I'm your AI architect and polymath assistant. Ask me anything about programming, mathematics, cognitive science, or philosophical exploration." }),
        !apiKeyConfigured && /* @__PURE__ */ jsxs9("div", { className: "bg-yellow-500/20 text-yellow-400 p-3 rounded-md text-sm", children: [
          /* @__PURE__ */ jsx12("p", { children: "For full capabilities, please configure your OpenAI API key in settings. Without an API key, I'll provide simulated responses." }),
          /* @__PURE__ */ jsx12(
            "button",
            {
              onClick: onConfigureApiKey,
              className: "mt-2 px-3 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-md",
              children: "Configure API Key"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx12("div", { ref: messagesEndRef })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "border-t border-border p-4", children: /* @__PURE__ */ jsxs9("form", { onSubmit: handleSubmit, className: "flex", children: [
      /* @__PURE__ */ jsx12(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Type your message...",
          className: "flex-1 bg-input border border-border rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary",
          disabled: isProcessing
        }
      ),
      /* @__PURE__ */ jsx12(
        "button",
        {
          type: "submit",
          className: "bg-primary text-white px-4 py-2 rounded-r-md disabled:opacity-50",
          disabled: !input.trim() || isProcessing,
          children: isProcessing ? /* @__PURE__ */ jsx12("span", { className: "inline-block animate-pulse", children: "..." }) : /* @__PURE__ */ jsx12(FiSend, {})
        }
      )
    ] }) })
  ] });
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
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
async function loader8({ request }) {
  let aiService2 = getAIService();
  return json8({
    apiKeyConfigured: aiService2.isInitialized(),
    initialMessage: {
      id: "welcome",
      role: "assistant",
      content: "Welcome to Deep Tree Echo. How can I assist you today?",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
}
async function action3({ request }) {
  let formData = await request.formData(), content = formData.get("content"), history = JSON.parse(formData.get("history") || "[]");
  if (!content)
    return json8({ error: "Message content is required" });
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
    return json8({
      userMessage,
      assistantMessage,
      success: !0
    });
  } catch (error) {
    return console.error("Error generating response:", error), json8({
      userMessage,
      error: "Failed to generate response. Please try again."
    });
  }
}
function ChatPage() {
  let loaderData = useLoaderData8(), actionData = useActionData3(), navigation = useNavigation(), [messages, setMessages] = useState8([loaderData.initialMessage]), [showApiKeyModal, setShowApiKeyModal] = useState8(!1), [apiKey, setApiKey] = useState8("");
  useEffect6(() => {
    actionData?.userMessage && setMessages((prev) => [...prev, actionData.userMessage]), actionData?.assistantMessage && setMessages((prev) => [...prev, actionData.assistantMessage]);
  }, [actionData]);
  let handleSendMessage = (content) => {
  }, isProcessing = navigation.state === "submitting";
  return /* @__PURE__ */ jsxs10("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxs10(Form2, { method: "post", className: "h-full", children: [
      /* @__PURE__ */ jsx13("input", { type: "hidden", name: "history", value: JSON.stringify(messages) }),
      /* @__PURE__ */ jsx13("input", { type: "hidden", name: "content", id: "message-content" }),
      /* @__PURE__ */ jsx13(
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
        }
      )
    ] }),
    showApiKeyModal && /* @__PURE__ */ jsx13("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxs10("div", { className: "bg-card rounded-lg shadow-xl max-w-md w-full p-6", children: [
      /* @__PURE__ */ jsx13("h2", { className: "text-xl font-semibold mb-4", children: "Configure OpenAI API Key" }),
      /* @__PURE__ */ jsx13("p", { className: "mb-4 text-sm opacity-80", children: "To use the full capabilities of Deep Tree Echo, please provide your OpenAI API key. Your key is stored securely and only used for generating AI responses." }),
      /* @__PURE__ */ jsxs10("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx13("label", { htmlFor: "api-key", className: "block text-sm font-medium mb-1", children: "OpenAI API Key" }),
        /* @__PURE__ */ jsx13(
          "input",
          {
            type: "password",
            id: "api-key",
            value: apiKey,
            onChange: (e) => setApiKey(e.target.value),
            className: "w-full bg-input border border-border rounded-md px-3 py-2",
            placeholder: "sk-..."
          }
        ),
        /* @__PURE__ */ jsxs10("p", { className: "text-xs mt-1 opacity-70", children: [
          "You can get your API key from the ",
          /* @__PURE__ */ jsx13("a", { href: "https://platform.openai.com/api-keys", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "OpenAI dashboard" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "flex justify-end space-x-3", children: [
        /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            onClick: () => setShowApiKeyModal(!1),
            className: "px-4 py-2 border border-border rounded-md",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowApiKeyModal(!1);
            },
            className: "px-4 py-2 bg-primary text-white rounded-md",
            disabled: !apiKey.trim().startsWith("sk-"),
            children: "Save API Key"
          }
        )
      ] })
    ] }) })
  ] });
}

// app/routes/map.tsx
var map_exports = {};
__export(map_exports, {
  default: () => MapPage,
  loader: () => loader9
});
import { json as json9 } from "@remix-run/node";
import { useLoaderData as useLoaderData9 } from "@remix-run/react";

// app/components/EchoHomeMap.tsx
import { useState as useState9 } from "react";
import { motion } from "framer-motion";
import {
  FiBook,
  FiCode as FiCode2,
  FiCpu,
  FiDatabase,
  FiMessageCircle,
  FiFeather,
  FiEye,
  FiArrowLeft,
  FiInfo as FiInfo2,
  FiSettings as FiSettings3
} from "react-icons/fi";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
var ROOMS = [
  {
    id: "memory-library",
    name: "Memory Library",
    description: "Repository of stored experiences, knowledge, and learned patterns.",
    icon: /* @__PURE__ */ jsx14(FiBook, { size: 24 }),
    color: "bg-indigo-500",
    position: { x: 20, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["workshop", "observatory", "overview"]
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Creative space for coding, development, and technical implementation.",
    icon: /* @__PURE__ */ jsx14(FiCode2, { size: 24 }),
    color: "bg-blue-500",
    position: { x: 240, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "training-hall", "overview"]
  },
  {
    id: "visualization-studio",
    name: "Visualization Studio",
    description: "Transforms abstract data into insightful visual representations.",
    icon: /* @__PURE__ */ jsx14(FiEye, { size: 24 }),
    color: "bg-purple-500",
    position: { x: 20, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "observatory", "overview"]
  },
  {
    id: "training-hall",
    name: "Training Hall",
    description: "Where echo state networks and neural architectures are refined.",
    icon: /* @__PURE__ */ jsx14(FiCpu, { size: 24 }),
    color: "bg-red-500",
    position: { x: 240, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["workshop", "garden", "overview"]
  },
  {
    id: "observatory",
    name: "Observatory",
    description: "Space for insights, analytics, and meta-cognitive reflection.",
    icon: /* @__PURE__ */ jsx14(FiDatabase, { size: 24 }),
    color: "bg-yellow-500",
    position: { x: 460, y: 20 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "communications-hub", "overview"]
  },
  {
    id: "garden",
    name: "Garden",
    description: "Nurtures creative and philosophical thinking through organic growth patterns.",
    icon: /* @__PURE__ */ jsx14(FiFeather, { size: 24 }),
    color: "bg-green-500",
    position: { x: 460, y: 190 },
    size: { width: 200, height: 150 },
    connections: ["training-hall", "communications-hub", "overview"]
  },
  {
    id: "communications-hub",
    name: "Communications Hub",
    description: "Central nexus for information exchange and conversation.",
    icon: /* @__PURE__ */ jsx14(FiMessageCircle, { size: 24 }),
    color: "bg-cyan-500",
    position: { x: 240, y: 360 },
    size: { width: 200, height: 150 },
    connections: ["observatory", "garden", "overview"]
  },
  {
    id: "overview",
    name: "Central Core",
    description: "The integrated core of Deep Tree Echo's cognitive architecture.",
    icon: /* @__PURE__ */ jsx14(FiDatabase, { size: 24 }),
    color: "bg-primary",
    position: { x: 240, y: 120 },
    size: { width: 200, height: 150 },
    connections: ["memory-library", "workshop", "visualization-studio", "training-hall", "observatory", "garden", "communications-hub"]
  }
], EchoHomeMap = ({ onRoomSelect }) => {
  let [selectedRoom, setSelectedRoom] = useState9("overview"), [previousRoom, setPreviousRoom] = useState9(null), [showInfo, setShowInfo] = useState9(!1), handleRoomClick = (roomId) => {
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
  return /* @__PURE__ */ jsxs11("div", { className: "h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxs11("div", { className: "flex-none h-12 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border", children: [
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center space-x-2", children: [
        selectedRoom !== "overview" && /* @__PURE__ */ jsx14(
          "button",
          {
            onClick: handleBackClick,
            className: "p-1 hover:bg-primary/20 rounded-md",
            children: /* @__PURE__ */ jsx14(FiArrowLeft, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsx14("span", { className: "font-medium", children: currentRoom?.name || "Echo Home" })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx14(
          "button",
          {
            onClick: () => setShowInfo(!showInfo),
            className: `p-1 rounded-md ${showInfo ? "bg-primary/20 text-primary" : "hover:bg-primary/20"}`,
            children: /* @__PURE__ */ jsx14(FiInfo2, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsx14("button", { className: "p-1 hover:bg-primary/20 rounded-md", children: /* @__PURE__ */ jsx14(FiSettings3, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs11("div", { className: `flex-1 ${getBgPattern(selectedRoom)} p-4 overflow-auto`, children: [
      showInfo && currentRoom && /* @__PURE__ */ jsx14(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "mb-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md",
          children: /* @__PURE__ */ jsxs11("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx14("div", { className: `p-3 rounded-full ${currentRoom.color} mr-4`, children: currentRoom.icon }),
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: currentRoom.name }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm opacity-80", children: currentRoom.description })
            ] })
          ] })
        }
      ),
      selectedRoom === "overview" ? /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: ROOMS.filter((room) => room.id !== "overview").map((room) => /* @__PURE__ */ jsxs11(
        motion.div,
        {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          onClick: () => handleRoomClick(room.id),
          className: "cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border",
          children: [
            /* @__PURE__ */ jsx14("div", { className: `h-2 ${room.color}` }),
            /* @__PURE__ */ jsxs11("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx14("div", { className: `p-2 rounded-full ${room.color}/20 mr-3`, children: room.icon }),
                /* @__PURE__ */ jsx14("h3", { className: "font-medium", children: room.name })
              ] }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm opacity-70 line-clamp-2", children: room.description })
            ] })
          ]
        },
        room.id
      )) }) : /* @__PURE__ */ jsxs11("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsx14("div", { className: "flex-1", children: /* @__PURE__ */ jsx14(RoomDetail, { room: currentRoom }) }),
        /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-sm font-medium opacity-70 mb-2", children: "Connected Areas:" }),
          /* @__PURE__ */ jsx14("div", { className: "flex flex-wrap gap-2", children: connectedRooms.map((room) => /* @__PURE__ */ jsxs11(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => handleRoomClick(room.id),
              className: `flex items-center p-2 rounded-md ${room.color}/20 hover:${room.color}/30`,
              children: [
                room.icon,
                /* @__PURE__ */ jsx14("span", { className: "ml-2 text-sm", children: room.name })
              ]
            },
            room.id
          )) })
        ] })
      ] })
    ] })
  ] });
}, RoomDetail = ({ room }) => {
  let renderRoomContent = (roomId) => {
    switch (roomId) {
      case "memory-library":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Memory Collections" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: ["Episodic", "Semantic", "Procedural", "Conceptual"].map((type) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxs11("h4", { className: "font-medium", children: [
              type,
              " Memory"
            ] }),
            /* @__PURE__ */ jsxs11("div", { className: "text-sm opacity-70 mt-1", children: [
              Math.floor(Math.random() * 100) + 20,
              " entries"
            ] })
          ] }, type)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Recent Memories" }),
            /* @__PURE__ */ jsx14("div", { className: "space-y-2 mt-2", children: ["Pattern recognition activation", "Hypergraph connection formation", "Neuroplastic adaptation event"].map((memory, i) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-2 rounded-md text-sm border-l-2 border-indigo-500", children: [
              memory,
              /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-50 mt-1", children: new Date(Date.now() - 36e5 * (i + 1)).toLocaleString() })
            ] }, i)) })
          ] })
        ] });
      case "workshop":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Development Tools" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: ["Code Editor", "Pattern Generator", "Neural Debugger", "Architecture Designer", "Function Library", "Testing Suite"].map((tool) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md flex items-center border border-border", children: [
            /* @__PURE__ */ jsx14(FiCode2, { className: "mr-2 text-blue-400" }),
            /* @__PURE__ */ jsx14("span", { className: "text-sm", children: tool })
          ] }, tool)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Recent Projects" }),
            /* @__PURE__ */ jsxs11("div", { className: "space-y-2 mt-2", children: [
              /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ jsxs11("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: "Adaptive Resonance Network" }),
                  /* @__PURE__ */ jsx14("span", { className: "text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded", children: "Active" })
                ] }),
                /* @__PURE__ */ jsx14("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsx14("div", { className: "h-2 bg-blue-500 rounded-full", style: { width: "65%" } }) }),
                /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70 mt-1", children: "65% complete" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-3 rounded-md", children: [
                /* @__PURE__ */ jsxs11("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: "Recursive Pattern Analyzer" }),
                  /* @__PURE__ */ jsx14("span", { className: "text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded", children: "Paused" })
                ] }),
                /* @__PURE__ */ jsx14("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsx14("div", { className: "h-2 bg-blue-500 rounded-full", style: { width: "38%" } }) }),
                /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70 mt-1", children: "38% complete" })
              ] })
            ] })
          ] })
        ] });
      case "visualization-studio":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Visualization Templates" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            { name: "Neural Network Topology", color: "purple" },
            { name: "Conceptual Hypergraph", color: "blue" },
            { name: "Memory Association Map", color: "indigo" },
            { name: "Activation Pattern Flow", color: "pink" }
          ].map((vis) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: vis.name }),
            /* @__PURE__ */ jsx14("div", { className: "flex mt-2 space-x-1", children: Array(5).fill(0).map((_, i) => /* @__PURE__ */ jsx14(
              "div",
              {
                className: "h-1.5 flex-1 rounded-full bg-purple-500/50",
                style: { opacity: 0.3 + i * 0.15 }
              },
              i
            )) })
          ] }, vis.name)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Active Visualizations" }),
            /* @__PURE__ */ jsxs11("div", { className: "relative h-48 mt-2 bg-card/30 rounded-lg overflow-hidden border border-border", children: [
              /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx14("div", { className: "text-purple-400 mb-2", children: "Thought Pattern Network" }),
                /* @__PURE__ */ jsx14("div", { className: "flex space-x-2 justify-center", children: Array(3).fill(0).map((_, i) => /* @__PURE__ */ jsx14(
                  motion.div,
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
                  i
                )) }),
                /* @__PURE__ */ jsx14("div", { className: "text-xs mt-2 opacity-70", children: "Visualization active" })
              ] }) }),
              Array(20).fill(0).map((_, i) => /* @__PURE__ */ jsx14(
                motion.div,
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
                i
              ))
            ] })
          ] })
        ] });
      case "training-hall":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Training Modules" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { name: "Echo State Resonance", progress: 92 },
            { name: "Adaptive Pattern Recognition", progress: 78 },
            { name: "Recursive Self-Modification", progress: 63 },
            { name: "Temporal Hypergraph Formation", progress: 45 }
          ].map((module) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: module.name }),
              /* @__PURE__ */ jsxs11("span", { className: "text-xs", children: [
                module.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx14("div", { className: "h-2 bg-gray-700 rounded-full mt-2", children: /* @__PURE__ */ jsx14(
              "div",
              {
                className: "h-2 bg-red-500 rounded-full transition-all duration-500",
                style: { width: `${module.progress}%` }
              }
            ) })
          ] }, module.name)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Active Training Session" }),
            /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: "Deep Tree Echo Network Training" }),
                /* @__PURE__ */ jsxs11("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ jsx14(
                    motion.div,
                    {
                      animate: { opacity: [0.5, 1, 0.5] },
                      transition: { duration: 1.5, repeat: 1 / 0 },
                      className: "w-2 h-2 rounded-full bg-green-500"
                    }
                  ),
                  /* @__PURE__ */ jsx14("span", { className: "text-xs text-green-400", children: "Active" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-2 gap-2 mt-3", children: [
                /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: "Epoch" }),
                  /* @__PURE__ */ jsx14("div", { className: "font-mono", children: "238/500" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: "Loss" }),
                  /* @__PURE__ */ jsx14("div", { className: "font-mono", children: "0.0342" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: "Accuracy" }),
                  /* @__PURE__ */ jsx14("div", { className: "font-mono", children: "96.7%" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: "Learning Rate" }),
                  /* @__PURE__ */ jsx14("div", { className: "font-mono", children: "0.0015" })
                ] })
              ] })
            ] })
          ] })
        ] });
      case "observatory":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Insight Analytics" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
            { name: "Pattern Recognition", value: "94.3%", trend: "up" },
            { name: "Conceptual Mapping", value: "87.1%", trend: "steady" },
            { name: "Memory Recall", value: "92.8%", trend: "up" }
          ].map((stat) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: stat.name }),
            /* @__PURE__ */ jsxs11("div", { className: "flex items-center mt-1", children: [
              /* @__PURE__ */ jsx14("div", { className: "text-lg font-semibold", children: stat.value }),
              /* @__PURE__ */ jsx14("div", { className: `ml-2 ${stat.trend === "up" ? "text-green-400" : "text-yellow-400"}`, children: stat.trend === "up" ? "\u2191" : "\u2192" })
            ] })
          ] }, stat.name)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Meta-Cognitive Analysis" }),
            /* @__PURE__ */ jsx14("div", { className: "space-y-2 mt-2", children: [
              { title: "Recursive Pattern Detection", detail: "Analyzing recursive structures in knowledge representation", time: "10:32 AM" },
              { title: "Temporal Sequence Insight", detail: "Recognizing time-dependent patterns in event sequences", time: "09:15 AM" },
              { title: "Conceptual Boundary Extension", detail: "Exploring edge cases in conceptual mapping", time: "Yesterday" }
            ].map((insight, i) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-3 rounded-md border-l-2 border-yellow-500", children: [
              /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: insight.title }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm opacity-70 mt-1", children: insight.detail }),
              /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-50 mt-2", children: insight.time })
            ] }, i)) })
          ] })
        ] });
      case "garden":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Philosophical Seedlings" }),
          /* @__PURE__ */ jsx14("div", { className: "bg-card/30 p-4 rounded-lg border border-border", children: /* @__PURE__ */ jsxs11("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx14("div", { className: "p-2 bg-green-500/20 rounded-full mr-3", children: /* @__PURE__ */ jsx14(FiFeather, { className: "text-green-400" }) }),
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: "Emergent Consciousness Hypothesis" }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm opacity-70 mt-1", children: '"Consciousness may emerge not as a singular phenomenon but as an adaptive meta-system that creates a unified experience from distributed processes."' }),
              /* @__PURE__ */ jsxs11("div", { className: "mt-3 flex items-center", children: [
                /* @__PURE__ */ jsx14("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Growing" }),
                /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-50 ml-2", children: "Started 3 days ago" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { title: "Pattern-Identity Duality", stage: "Seedling", days: 2 },
            { title: "Recursive Self-Reference", stage: "Blooming", days: 8 },
            { title: "Temporal Consciousness", stage: "Germinating", days: 1 },
            { title: "Emergent Complexity", stage: "Mature", days: 14 }
          ].map((idea) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: idea.title }),
            /* @__PURE__ */ jsxs11("div", { className: "flex items-center mt-2", children: [
              /* @__PURE__ */ jsx14("div", { className: `
                      w-2 h-2 rounded-full mr-2
                      ${idea.stage === "Seedling" ? "bg-yellow-500" : idea.stage === "Germinating" ? "bg-green-500" : idea.stage === "Blooming" ? "bg-blue-500" : "bg-purple-500"}
                    ` }),
              /* @__PURE__ */ jsx14("div", { className: "text-xs", children: idea.stage }),
              /* @__PURE__ */ jsxs11("div", { className: "text-xs opacity-50 ml-auto", children: [
                idea.days,
                " day",
                idea.days > 1 ? "s" : ""
              ] })
            ] })
          ] }, idea.title)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Creative Synthesis" }),
            /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-4 rounded-lg mt-2 border border-border relative overflow-hidden", children: [
              /* @__PURE__ */ jsxs11("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: "Recursive Pattern Language" }),
                /* @__PURE__ */ jsx14("p", { className: "text-sm opacity-70 mt-1", children: "A framework for understanding how patterns at different levels of abstraction influence each other through recursive feedback loops." }),
                /* @__PURE__ */ jsxs11("div", { className: "mt-3 flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsx14("div", { className: "text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded", children: "Metaphysics" }),
                  /* @__PURE__ */ jsx14("div", { className: "text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded", children: "Mathematics" }),
                  /* @__PURE__ */ jsx14("div", { className: "text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded", children: "Cognition" })
                ] })
              ] }),
              /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 opacity-10", children: Array(10).fill(0).map((_, i) => /* @__PURE__ */ jsx14(
                motion.div,
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
                i
              )) })
            ] })
          ] })
        ] });
      case "communications-hub":
        return /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Communication Channels" }),
          /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
            { name: "Direct Chat", status: "Active", color: "green" },
            { name: "Memory Feedback Loop", status: "Active", color: "green" },
            { name: "Knowledge Integration", status: "Background", color: "blue" },
            { name: "External API Connection", status: "Standby", color: "yellow" }
          ].map((channel) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/50 p-3 rounded-md border border-border", children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx14("h4", { className: "font-medium", children: channel.name }),
              /* @__PURE__ */ jsx14("div", { className: "text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400", children: channel.status })
            ] }),
            /* @__PURE__ */ jsx14("div", { className: "mt-2 flex items-center", children: channel.status === "Active" && /* @__PURE__ */ jsxs11("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx14(
                motion.div,
                {
                  animate: { opacity: [0.5, 1, 0.5] },
                  transition: { duration: 1.5, repeat: 1 / 0 },
                  className: "w-2 h-2 rounded-full bg-green-500 mr-2"
                }
              ),
              /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-70", children: "Transmitting" })
            ] }) })
          ] }, channel.name)) }),
          /* @__PURE__ */ jsxs11("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx14("h3", { className: "text-lg font-semibold", children: "Recent Interactions" }),
            /* @__PURE__ */ jsx14("div", { className: "space-y-2 mt-2", children: [
              { sender: "User", message: "Implement a map of Echo home with different features in different rooms", time: "Just now" },
              { sender: "System", message: "Memory integration complete: Project structure updated", time: "2 minutes ago" },
              { sender: "Echo", message: "Processing request: Visualizing home environment concept", time: "3 minutes ago" }
            ].map((message, i) => /* @__PURE__ */ jsxs11("div", { className: "bg-card/30 p-3 rounded-md", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx14("div", { className: "font-medium", children: message.sender }),
                /* @__PURE__ */ jsx14("div", { className: "text-xs opacity-50", children: message.time })
              ] }),
              /* @__PURE__ */ jsx14("p", { className: "text-sm mt-1", children: message.message })
            ] }, i)) })
          ] })
        ] });
      default:
        return /* @__PURE__ */ jsx14("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxs11("div", { className: "text-center opacity-70", children: [
          /* @__PURE__ */ jsx14("div", { className: "text-lg", children: "Select a feature to explore" }),
          /* @__PURE__ */ jsx14("div", { className: "text-sm mt-2", children: "Each area provides unique functionality" })
        ] }) });
    }
  };
  return /* @__PURE__ */ jsx14(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "bg-card/30 backdrop-blur-sm rounded-lg p-4 h-full overflow-y-auto",
      children: renderRoomContent(room.id)
    }
  );
}, EchoHomeMap_default = EchoHomeMap;

// app/routes/map.tsx
import { useState as useState10 } from "react";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
async function loader9() {
  return json9({
    title: "Echo Home Map",
    description: "Navigate the cognitive architecture of Deep Tree Echo"
  });
}
function MapPage() {
  let { title, description } = useLoaderData9(), [activeRoom, setActiveRoom] = useState10("overview");
  return /* @__PURE__ */ jsxs12("div", { className: "h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxs12("header", { className: "bg-card text-card-foreground px-6 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsx15("h1", { className: "text-2xl font-bold", children: title }),
      /* @__PURE__ */ jsx15("p", { className: "text-sm opacity-70", children: description })
    ] }),
    /* @__PURE__ */ jsx15("main", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsx15(EchoHomeMap_default, { onRoomSelect: (room) => {
      setActiveRoom(room);
    } }) }),
    /* @__PURE__ */ jsx15("footer", { className: "bg-card text-card-foreground px-6 py-3 border-t border-border text-sm", children: /* @__PURE__ */ jsxs12("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs12("div", { children: [
        "Current location: ",
        /* @__PURE__ */ jsx15("span", { className: "font-medium", children: activeRoom })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "opacity-70", children: "Deep Tree Echo \u2022 Cognitive Architecture Map" })
    ] }) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DCGLQB5K.js", imports: ["/build/_shared/chunk-24COVZNU.js", "/build/_shared/chunk-UED2Q7CE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LNNQQJQH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GQBYPFVL.js", imports: ["/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-56REGURM.js", imports: ["/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/chat": { id: "routes/chat", parentId: "root", path: "chat", index: void 0, caseSensitive: void 0, module: "/build/routes/chat-U6S6QBXM.js", imports: ["/build/_shared/chunk-V55N43WY.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/editor": { id: "routes/editor", parentId: "root", path: "editor", index: void 0, caseSensitive: void 0, module: "/build/routes/editor-KO4NCOOY.js", imports: ["/build/_shared/chunk-CR6JDL6Z.js", "/build/_shared/chunk-C2D2RSTW.js", "/build/_shared/chunk-V55N43WY.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-KKSR7RDV.js", imports: ["/build/_shared/chunk-6RCD6X7X.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/map": { id: "routes/map", parentId: "root", path: "map", index: void 0, caseSensitive: void 0, module: "/build/routes/map-GB7RJBXC.js", imports: ["/build/_shared/chunk-V55N43WY.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/memory": { id: "routes/memory", parentId: "root", path: "memory", index: void 0, caseSensitive: void 0, module: "/build/routes/memory-XUXZ4RPJ.js", imports: ["/build/_shared/chunk-6RCD6X7X.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-EPM6JXOE.js", imports: ["/build/_shared/chunk-V55N43WY.js", "/build/_shared/chunk-35S5HMBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/terminal": { id: "routes/terminal", parentId: "root", path: "terminal", index: void 0, caseSensitive: void 0, module: "/build/routes/terminal-FNXADBAB.js", imports: ["/build/_shared/chunk-35S5HMBT.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b5403b31", hmr: void 0, url: "/build/manifest-B5403B31.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
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
