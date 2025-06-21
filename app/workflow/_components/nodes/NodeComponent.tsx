import { memo } from "react";
import NodeCard from "./NodeCard";
import { NodeProps } from "@xyflow/react";
import NodeHeader from "./NodeHeader";
import { AppNodeData } from "@/types/appNodes";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInput, NodeInputs } from "./NodeInputs";

const NodeComponent = memo((props: NodeProps) => {
    const nodeData = props.data as AppNodeData;
    const task = TaskRegistry[nodeData.type]
    return <NodeCard nodeId={props.id} isSelected={!!props.selected}>
           <NodeHeader taskType ={nodeData.type} />
           <NodeInputs>
            {task.inputs.map(input => (
                <NodeInput key={input.name} input={input} nodeId={props.id}/>
            ))}
           </NodeInputs>
           </NodeCard>
})

export default NodeComponent;
NodeComponent.displayName = "NodeComponent"