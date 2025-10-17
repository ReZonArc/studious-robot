import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FiSettings,
  FiChevronRight,
  FiChevronDown,
  FiHome,
  FiGitBranch,
  FiLayers,
  FiActivity,
  FiZap,
  FiTrendingUp
} from 'react-icons/fi';

// Extended room types for deep tree structure
export type DeepTreeRoomType = 
  | 'echo-home-root'
  | 'memory-library' | 'episodic-vault' | 'semantic-archive' | 'procedural-workshop' | 'associative-web'
  | 'workshop' | 'code-forge' | 'pattern-lab' | 'neural-studio' | 'architecture-space'
  | 'visualization-studio' | 'data-canvas' | 'concept-mapper' | 'flow-visualizer' | 'insight-gallery'
  | 'training-hall' | 'esn-gymnasium' | 'pattern-dojo' | 'learning-arena' | 'adaptation-chamber'
  | 'observatory' | 'insight-telescope' | 'analytics-hub' | 'reflection-mirror' | 'metacognition-center'
  | 'garden' | 'philosophy-grove' | 'creativity-meadow' | 'synthesis-garden' | 'emergence-forest'
  | 'communications-hub' | 'dialogue-chamber' | 'feedback-loop' | 'integration-nexus' | 'broadcast-tower';

export interface TreeNode {
  id: DeepTreeRoomType;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  type: 'room' | 'concept' | 'memory' | 'pattern';
  parent?: DeepTreeRoomType;
  children: DeepTreeRoomType[];
  level: number;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  metadata?: {
    isInferenceEnabled?: boolean;
    patternStrength?: number;
    memoryDensity?: number;
    connectionWeight?: number;
  };
}

interface InferenceVisualization {
  reasoning: string;
  confidence: number;
  patterns: string[];
  predictions: string[];
  nextActions: string[];
  treeContext: {
    currentNode: string;
    parentNodes: string[];
    suggestedChildNodes: string[];
    depth: number;
  };
}

const TREE_NODES: TreeNode[] = [
  // Root node
  {
    id: 'echo-home-root',
    name: 'Echo Home Root',
    description: 'The central root of the Deep Tree Echo Home cognitive architecture',
    icon: <FiHome size={24} />,
    color: 'bg-purple-600',
    type: 'room',
    children: ['memory-library', 'workshop', 'visualization-studio', 'training-hall', 'observatory', 'garden', 'communications-hub'],
    level: 0,
    metadata: { isInferenceEnabled: true, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 1.0 }
  },

  // Level 1 - Main rooms
  {
    id: 'memory-library',
    name: 'Memory Library',
    description: 'Repository of stored experiences, knowledge, and learned patterns',
    icon: <FiBook size={24} />,
    color: 'bg-indigo-500',
    type: 'memory',
    parent: 'echo-home-root',
    children: ['episodic-vault', 'semantic-archive', 'procedural-workshop', 'associative-web'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.8, memoryDensity: 0.95, connectionWeight: 0.9 }
  },
  {
    id: 'workshop',
    name: 'Workshop',
    description: 'Creative space for coding, development, and technical implementation',
    icon: <FiCode size={24} />,
    color: 'bg-blue-500',
    type: 'room',
    parent: 'echo-home-root',
    children: ['code-forge', 'pattern-lab', 'neural-studio', 'architecture-space'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.7, memoryDensity: 0.6, connectionWeight: 0.8 }
  },
  {
    id: 'visualization-studio',
    name: 'Visualization Studio',
    description: 'Transforms abstract data into insightful visual representations',
    icon: <FiEye size={24} />,
    color: 'bg-purple-500',
    type: 'pattern',
    parent: 'echo-home-root',
    children: ['data-canvas', 'concept-mapper', 'flow-visualizer', 'insight-gallery'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.85, memoryDensity: 0.7, connectionWeight: 0.75 }
  },
  {
    id: 'training-hall',
    name: 'Training Hall',
    description: 'Where echo state networks and neural architectures are refined',
    icon: <FiCpu size={24} />,
    color: 'bg-red-500',
    type: 'pattern',
    parent: 'echo-home-root',
    children: ['esn-gymnasium', 'pattern-dojo', 'learning-arena', 'adaptation-chamber'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 0.95 }
  },
  {
    id: 'observatory',
    name: 'Observatory',
    description: 'Space for insights, analytics, and meta-cognitive reflection',
    icon: <FiDatabase size={24} />,
    color: 'bg-yellow-500',
    type: 'concept',
    parent: 'echo-home-root',
    children: ['insight-telescope', 'analytics-hub', 'reflection-mirror', 'metacognition-center'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.75, memoryDensity: 0.85, connectionWeight: 0.8 }
  },
  {
    id: 'garden',
    name: 'Garden',
    description: 'Nurtures creative and philosophical thinking through organic growth patterns',
    icon: <FiFeather size={24} />,
    color: 'bg-green-500',
    type: 'concept',
    parent: 'echo-home-root',
    children: ['philosophy-grove', 'creativity-meadow', 'synthesis-garden', 'emergence-forest'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.6, memoryDensity: 0.9, connectionWeight: 0.7 }
  },
  {
    id: 'communications-hub',
    name: 'Communications Hub',
    description: 'Central nexus for information exchange and conversation',
    icon: <FiMessageCircle size={24} />,
    color: 'bg-cyan-500',
    type: 'room',
    parent: 'echo-home-root',
    children: ['dialogue-chamber', 'feedback-loop', 'integration-nexus', 'broadcast-tower'],
    level: 1,
    metadata: { isInferenceEnabled: true, patternStrength: 0.8, memoryDensity: 0.75, connectionWeight: 0.85 }
  },

  // Level 2 - Sub-rooms (Memory Library)
  {
    id: 'episodic-vault',
    name: 'Episodic Vault',
    description: 'Personal experiences and autobiographical memories',
    icon: <FiActivity size={20} />,
    color: 'bg-indigo-400',
    type: 'memory',
    parent: 'memory-library',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.7, memoryDensity: 1.0, connectionWeight: 0.8 }
  },
  {
    id: 'semantic-archive',
    name: 'Semantic Archive',
    description: 'Facts, concepts, and general knowledge',
    icon: <FiLayers size={20} />,
    color: 'bg-indigo-400',
    type: 'concept',
    parent: 'memory-library',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.8, memoryDensity: 0.9, connectionWeight: 0.85 }
  },
  {
    id: 'procedural-workshop',
    name: 'Procedural Workshop',
    description: 'Skills, procedures, and how-to knowledge',
    icon: <FiGitBranch size={20} />,
    color: 'bg-indigo-400',
    type: 'pattern',
    parent: 'memory-library',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.9, memoryDensity: 0.7, connectionWeight: 0.9 }
  },
  {
    id: 'associative-web',
    name: 'Associative Web',
    description: 'Connected ideas and conceptual relationships',
    icon: <FiZap size={20} />,
    color: 'bg-indigo-400',
    type: 'concept',
    parent: 'memory-library',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.95, memoryDensity: 0.8, connectionWeight: 0.95 }
  },

  // Level 2 - Sub-rooms (Workshop)
  {
    id: 'code-forge',
    name: 'Code Forge',
    description: 'Software development and coding environment',
    icon: <FiCode size={20} />,
    color: 'bg-blue-400',
    type: 'room',
    parent: 'workshop',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.6, memoryDensity: 0.5, connectionWeight: 0.7 }
  },
  {
    id: 'pattern-lab',
    name: 'Pattern Lab',
    description: 'Pattern analysis and recognition laboratory',
    icon: <FiTrendingUp size={20} />,
    color: 'bg-blue-400',
    type: 'pattern',
    parent: 'workshop',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.95, memoryDensity: 0.8, connectionWeight: 0.9 }
  },
  {
    id: 'neural-studio',
    name: 'Neural Studio',
    description: 'Neural network design and experimentation',
    icon: <FiActivity size={20} />,
    color: 'bg-blue-400',
    type: 'pattern',
    parent: 'workshop',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.9, memoryDensity: 0.7, connectionWeight: 0.95 }
  },
  {
    id: 'architecture-space',
    name: 'Architecture Space',
    description: 'System architecture and design thinking',
    icon: <FiLayers size={20} />,
    color: 'bg-blue-400',
    type: 'concept',
    parent: 'workshop',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.8, memoryDensity: 0.6, connectionWeight: 0.8 }
  },

  // Level 2 - Sub-rooms (Other areas) - abbreviated for brevity
  {
    id: 'data-canvas',
    name: 'Data Canvas',
    description: 'Raw data visualization and exploration',
    icon: <FiEye size={20} />,
    color: 'bg-purple-400',
    type: 'room',
    parent: 'visualization-studio',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.7, memoryDensity: 0.6, connectionWeight: 0.7 }
  },
  {
    id: 'concept-mapper',
    name: 'Concept Mapper',
    description: 'Conceptual mapping and relationship visualization',
    icon: <FiGitBranch size={20} />,
    color: 'bg-purple-400',
    type: 'concept',
    parent: 'visualization-studio',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.9, memoryDensity: 0.8, connectionWeight: 0.85 }
  },
  {
    id: 'flow-visualizer',
    name: 'Flow Visualizer',
    description: 'Process flow and temporal pattern visualization',
    icon: <FiTrendingUp size={20} />,
    color: 'bg-purple-400',
    type: 'pattern',
    parent: 'visualization-studio',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.85, memoryDensity: 0.7, connectionWeight: 0.8 }
  },
  {
    id: 'insight-gallery',
    name: 'Insight Gallery',
    description: 'Gallery of insights and discoveries',
    icon: <FiDatabase size={20} />,
    color: 'bg-purple-400',
    type: 'memory',
    parent: 'visualization-studio',
    children: [],
    level: 2,
    metadata: { isInferenceEnabled: true, patternStrength: 0.75, memoryDensity: 0.9, connectionWeight: 0.8 }
  }

  // Add more level 2 nodes as needed...
];

interface DeepTreeEchoHomeMapProps {
  onRoomSelect?: (room: DeepTreeRoomType) => void;
  onInferenceRequest?: (room: DeepTreeRoomType, query: string) => Promise<InferenceVisualization>;
}

const DeepTreeEchoHomeMap: React.FC<DeepTreeEchoHomeMapProps> = ({ 
  onRoomSelect, 
  onInferenceRequest 
}) => {
  const [selectedRoom, setSelectedRoom] = useState<DeepTreeRoomType>('echo-home-root');
  const [navigationStack, setNavigationStack] = useState<DeepTreeRoomType[]>(['echo-home-root']);
  const [showInfo, setShowInfo] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<DeepTreeRoomType>>(new Set(['echo-home-root']));
  const [viewMode, setViewMode] = useState<'tree' | 'map'>('tree');
  const [inference, setInference] = useState<InferenceVisualization | null>(null);
  const [isInferenceLoading, setIsInferenceLoading] = useState(false);

  const currentNode = TREE_NODES.find(node => node.id === selectedRoom);
  const children = TREE_NODES.filter(node => node.parent === selectedRoom);
  const parentNode = currentNode?.parent ? TREE_NODES.find(node => node.id === currentNode.parent) : null;
  const rootPath = getCurrentPath(selectedRoom);

  function getCurrentPath(roomId: DeepTreeRoomType): TreeNode[] {
    const path: TreeNode[] = [];
    let current = TREE_NODES.find(node => node.id === roomId);
    
    while (current) {
      path.unshift(current);
      current = current.parent ? TREE_NODES.find(node => node.id === current!.parent) : undefined;
    }
    
    return path;
  }

  const handleRoomClick = (roomId: DeepTreeRoomType) => {
    if (roomId !== selectedRoom) {
      setNavigationStack(prev => [...prev, roomId]);
      setSelectedRoom(roomId);
      if (onRoomSelect) {
        onRoomSelect(roomId);
      }
      // Auto-expand the selected node if it has children
      const node = TREE_NODES.find(n => n.id === roomId);
      if (node && node.children.length > 0) {
        setExpandedNodes(prev => new Set([...prev, roomId]));
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

  const toggleNodeExpanded = (nodeId: DeepTreeRoomType) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handleInferenceRequest = async (roomId: DeepTreeRoomType) => {
    if (!onInferenceRequest) return;
    
    setIsInferenceLoading(true);
    try {
      const result = await onInferenceRequest(roomId, `Analyze patterns and insights for ${roomId}`);
      setInference(result);
    } catch (error) {
      console.error('Inference request failed:', error);
    } finally {
      setIsInferenceLoading(false);
    }
  };

  const getNodeTypeIcon = (type: TreeNode['type']) => {
    switch (type) {
      case 'memory': return <FiActivity size={16} className="text-indigo-400" />;
      case 'concept': return <FiLayers size={16} className="text-blue-400" />;
      case 'pattern': return <FiTrendingUp size={16} className="text-purple-400" />;
      default: return <FiHome size={16} className="text-gray-400" />;
    }
  };

  const renderTreeView = () => (
    <div className="space-y-4">
      <div className="bg-card/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FiGitBranch className="mr-2" />
          Deep Tree Structure
        </h3>
        <TreeNodeRenderer 
          node={TREE_NODES.find(n => n.id === 'echo-home-root')!}
          level={0}
          expandedNodes={expandedNodes}
          selectedRoom={selectedRoom}
          onToggleExpanded={toggleNodeExpanded}
          onNodeClick={handleRoomClick}
          onInferenceRequest={handleInferenceRequest}
        />
      </div>
    </div>
  );

  const renderMapView = () => (
    <div className="space-y-4">
      {/* Current Room Detail */}
      {currentNode && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/30 rounded-lg p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className={`p-3 rounded-full ${currentNode.color} mr-4`}>
                {currentNode.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentNode.name}</h2>
                <p className="text-sm opacity-70 mt-1">{currentNode.description}</p>
                <div className="flex items-center mt-2 space-x-2">
                  {getNodeTypeIcon(currentNode.type)}
                  <span className="text-xs uppercase tracking-wide opacity-60">{currentNode.type}</span>
                  <span className="text-xs opacity-50">•</span>
                  <span className="text-xs opacity-60">Level {currentNode.level}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleInferenceRequest(selectedRoom)}
              disabled={isInferenceLoading}
              className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm hover:bg-purple-500/30 disabled:opacity-50"
            >
              {isInferenceLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>

          {/* Metadata visualization */}
          {currentNode.metadata && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-card/50 p-2 rounded">
                <div className="text-xs opacity-70">Pattern Strength</div>
                <div className="flex items-center mt-1">
                  <div className="h-1.5 bg-gray-700 rounded-full flex-1 mr-2">
                    <div 
                      className="h-1.5 bg-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${(currentNode.metadata.patternStrength || 0) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs">{Math.round((currentNode.metadata.patternStrength || 0) * 100)}%</span>
                </div>
              </div>
              <div className="bg-card/50 p-2 rounded">
                <div className="text-xs opacity-70">Memory Density</div>
                <div className="flex items-center mt-1">
                  <div className="h-1.5 bg-gray-700 rounded-full flex-1 mr-2">
                    <div 
                      className="h-1.5 bg-indigo-500 rounded-full transition-all duration-300"
                      style={{ width: `${(currentNode.metadata.memoryDensity || 0) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs">{Math.round((currentNode.metadata.memoryDensity || 0) * 100)}%</span>
                </div>
              </div>
              <div className="bg-card/50 p-2 rounded">
                <div className="text-xs opacity-70">Connection Weight</div>
                <div className="flex items-center mt-1">
                  <div className="h-1.5 bg-gray-700 rounded-full flex-1 mr-2">
                    <div 
                      className="h-1.5 bg-cyan-500 rounded-full transition-all duration-300"
                      style={{ width: `${(currentNode.metadata.connectionWeight || 0) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs">{Math.round((currentNode.metadata.connectionWeight || 0) * 100)}%</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Children Grid */}
      {children.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Sub-Nodes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {children.map(child => (
              <motion.div
                key={child.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRoomClick(child.id)}
                className="cursor-pointer bg-card hover:bg-card/90 rounded-lg shadow-md overflow-hidden border border-border"
              >
                <div className={`h-2 ${child.color}`}></div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-full ${child.color}/20 mr-3`}>
                      {child.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{child.name}</h4>
                      <div className="flex items-center mt-1">
                        {getNodeTypeIcon(child.type)}
                        <span className="text-xs opacity-60 ml-1">{child.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm opacity-70 line-clamp-2">{child.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex-none h-16 bg-card text-card-foreground px-4 py-2 flex justify-between items-center border-b border-border">
        <div className="flex items-center space-x-3">
          {selectedRoom !== 'echo-home-root' && (
            <button 
              onClick={handleBackClick}
              className="p-2 hover:bg-primary/20 rounded-md"
            >
              <FiArrowLeft size={18} />
            </button>
          )}
          <div>
            <div className="font-medium">{currentNode?.name || 'Deep Tree Echo Home'}</div>
            <div className="text-xs opacity-60">
              {rootPath.map(node => node.name).join(' → ')}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-card border border-border rounded-md">
            <button 
              onClick={() => setViewMode('tree')}
              className={`p-2 ${viewMode === 'tree' ? 'bg-primary/20 text-primary' : 'hover:bg-primary/20'} rounded-l-md`}
            >
              <FiGitBranch size={16} />
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`p-2 ${viewMode === 'map' ? 'bg-primary/20 text-primary' : 'hover:bg-primary/20'} rounded-r-md`}
            >
              <FiLayers size={16} />
            </button>
          </div>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-md ${showInfo ? 'bg-primary/20 text-primary' : 'hover:bg-primary/20'}`}
          >
            <FiInfo size={18} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-border"
          >
            <h3 className="text-lg font-semibold mb-2">Deep Tree Echo Home</h3>
            <p className="text-sm opacity-80">
              Navigate through the hierarchical cognitive architecture where each room contains specialized sub-rooms. 
              The inference engine analyzes patterns and provides insights based on your current location in the tree structure.
            </p>
          </motion.div>
        )}

        {viewMode === 'tree' ? renderTreeView() : renderMapView()}

        {/* Inference Results */}
        <AnimatePresence>
          {inference && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <FiActivity className="mr-2 text-purple-400" />
                Inference Results
                <span className="ml-2 text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                  {Math.round(inference.confidence * 100)}% confidence
                </span>
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Reasoning:</h4>
                  <p className="text-sm opacity-80">{inference.reasoning}</p>
                </div>
                
                {inference.patterns.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-1">Detected Patterns:</h4>
                    <div className="flex flex-wrap gap-1">
                      {inference.patterns.map((pattern, i) => (
                        <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                          {pattern}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {inference.nextActions.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-1">Suggested Actions:</h4>
                    <ul className="text-sm opacity-80 space-y-1">
                      {inference.nextActions.map((action, i) => (
                        <li key={i} className="flex items-start">
                          <FiChevronRight size={12} className="mt-1 mr-1 text-cyan-400" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Tree Node Renderer Component
interface TreeNodeRendererProps {
  node: TreeNode;
  level: number;
  expandedNodes: Set<DeepTreeRoomType>;
  selectedRoom: DeepTreeRoomType;
  onToggleExpanded: (nodeId: DeepTreeRoomType) => void;
  onNodeClick: (nodeId: DeepTreeRoomType) => void;
  onInferenceRequest: (nodeId: DeepTreeRoomType) => void;
}

const TreeNodeRenderer: React.FC<TreeNodeRendererProps> = ({
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
  const children = TREE_NODES.filter(n => n.parent === node.id);
  const hasChildren = children.length > 0;

  const getNodeTypeIcon = (type: TreeNode['type']) => {
    switch (type) {
      case 'memory': return <FiActivity size={14} className="text-indigo-400" />;
      case 'concept': return <FiLayers size={14} className="text-blue-400" />;
      case 'pattern': return <FiTrendingUp size={14} className="text-purple-400" />;
      default: return <FiHome size={14} className="text-gray-400" />;
    }
  };

  return (
    <div className={`ml-${level * 4}`}>
      <div 
        className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-card/50 ${
          isSelected ? 'bg-card/70 border border-primary/30' : ''
        }`}
        onClick={() => onNodeClick(node.id)}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpanded(node.id);
            }}
            className="mr-2 p-1 hover:bg-primary/20 rounded"
          >
            {isExpanded ? <FiChevronDown size={12} /> : <FiChevronRight size={12} />}
          </button>
        )}
        
        <div className={`p-1.5 rounded-full ${node.color}/20 mr-2`}>
          {React.cloneElement(node.icon as React.ReactElement, { size: 16 })}
        </div>
        
        <div className="flex-1">
          <div className="font-medium text-sm">{node.name}</div>
          <div className="flex items-center mt-1">
            {getNodeTypeIcon(node.type)}
            <span className="text-xs opacity-60 ml-1">{node.type}</span>
          </div>
        </div>
        
        {node.metadata?.isInferenceEnabled && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInferenceRequest(node.id);
            }}
            className="ml-2 p-1 text-purple-400 hover:bg-purple-500/20 rounded"
            title="Run inference"
          >
            <FiZap size={12} />
          </button>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-4 mt-1">
          {children.map(child => (
            <TreeNodeRenderer
              key={child.id}
              node={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedRoom={selectedRoom}
              onToggleExpanded={onToggleExpanded}
              onNodeClick={onNodeClick}
              onInferenceRequest={onInferenceRequest}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DeepTreeEchoHomeMap;