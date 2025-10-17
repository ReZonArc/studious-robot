import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useState } from "react";
import DeepTreeEchoHomeMap, { type DeepTreeRoomType } from "~/components/DeepTreeEchoHomeMap";
import { getInferenceEngine } from "~/services/inferenceEngine.server";

// Mock user ID for demo purposes (in real app, get from session)
const DEMO_USER_ID = "demo-user-123";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const room = url.searchParams.get("room") as DeepTreeRoomType;
  
  return json({
    title: "Deep Tree Echo Home",
    description: "Navigate the hierarchical cognitive architecture with inference-powered insights",
    initialRoom: room || "echo-home-root"
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const room = formData.get("room") as DeepTreeRoomType;
  const query = formData.get("query") as string;
  
  if (!room || !query) {
    return json({ error: "Missing room or query parameter" }, { status: 400 });
  }
  
  try {
    const inferenceEngine = getInferenceEngine(DEMO_USER_ID);
    
    // Build parent path for the room
    const getParentPath = (roomId: DeepTreeRoomType): string[] => {
      const treeStructure = inferenceEngine.getTreeStructure();
      const path: string[] = [];
      let currentNode = treeStructure.get(roomId);
      
      while (currentNode?.parent) {
        path.unshift(currentNode.parent);
        currentNode = treeStructure.get(currentNode.parent);
      }
      
      return path;
    };
    
    const parentPath = getParentPath(room);
    const node = inferenceEngine.getNode(room);
    const depth = node?.level || 0;
    
    const context = {
      currentRoom: room,
      parentPath,
      depth,
      sessionId: "demo-session-" + Date.now(),
      userId: DEMO_USER_ID
    };
    
    const result = await inferenceEngine.performInference(query, context);
    
    return json({ 
      success: true, 
      inference: result,
      nodeInfo: {
        name: node?.name || room,
        type: node?.type || 'unknown',
        level: depth,
        children: node?.children || []
      }
    });
  } catch (error) {
    console.error("Inference error:", error);
    return json({ 
      error: "Failed to perform inference: " + (error instanceof Error ? error.message : "Unknown error")
    }, { status: 500 });
  }
}

export default function DeepTreeEchoHomePage() {
  const { title, description, initialRoom } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const [activeRoom, setActiveRoom] = useState<DeepTreeRoomType>(initialRoom as DeepTreeRoomType);
  const [inferenceHistory, setInferenceHistory] = useState<Array<{
    room: string;
    query: string;
    result: any;
    timestamp: Date;
  }>>([]);

  const handleRoomSelect = (room: DeepTreeRoomType) => {
    setActiveRoom(room);
    // Update URL to reflect current room
    window.history.pushState({}, '', `/deep-tree-echo?room=${room}`);
  };

  const handleInferenceRequest = async (room: DeepTreeRoomType, query: string) => {
    // Submit inference request to the action
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
        onSuccess: (data: any) => {
          if (data.error) {
            reject(new Error(data.error));
            return;
          }
          
          // Add to inference history
          setInferenceHistory(prev => [{
            room: data.nodeInfo?.name || room,
            query,
            result: data.inference,
            timestamp: new Date()
          }, ...prev.slice(0, 9)]); // Keep last 10 entries
          
          // Transform the result to match the expected interface
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

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-card text-card-foreground px-6 py-4 border-b border-border">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {title}
              </span>
              <span className="ml-3 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                with Inference Engine
              </span>
            </h1>
            <p className="text-sm opacity-70 mt-1">{description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-70">Active Room</div>
            <div className="font-medium text-primary">{activeRoom}</div>
          </div>
        </div>
      </header>
      
      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Deep Tree Echo Home Map */}
        <main className="flex-1 overflow-hidden">
          <DeepTreeEchoHomeMap 
            onRoomSelect={handleRoomSelect}
            onInferenceRequest={handleInferenceRequest}
          />
        </main>
        
        {/* Inference History Sidebar */}
        {inferenceHistory.length > 0 && (
          <aside className="w-80 bg-card/50 border-l border-border overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Inference History</h3>
              <div className="space-y-3">
                {inferenceHistory.map((entry, index) => (
                  <div key={index} className="bg-card/80 rounded-lg p-3 text-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-purple-400">{entry.room}</div>
                      <div className="text-xs opacity-50">
                        {entry.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="text-xs opacity-70 mb-2">
                      Query: {entry.query}
                    </div>
                    <div className="text-xs opacity-60">
                      Confidence: {Math.round(entry.result.confidence * 100)}%
                    </div>
                    {entry.result.patterns && entry.result.patterns.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {entry.result.patterns.slice(0, 2).map((pattern: string, i: number) => (
                          <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded">
                            {pattern}
                          </span>
                        ))}
                        {entry.result.patterns.length > 2 && (
                          <span className="text-xs opacity-50">+{entry.result.patterns.length - 2} more</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
      
      {/* Footer with system status */}
      <footer className="bg-card text-card-foreground px-6 py-3 border-t border-border text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div>
              Current location: <span className="font-medium text-primary">{activeRoom}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="opacity-70">Inference Engine Active</span>
            </div>
          </div>
          <div className="opacity-70">
            Deep Tree Echo • Hierarchical Cognitive Architecture • {inferenceHistory.length} inferences performed
          </div>
        </div>
      </footer>
    </div>
  );
}