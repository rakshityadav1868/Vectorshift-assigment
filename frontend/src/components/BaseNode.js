import { Handle, Position } from "reactflow";

export const BaseNode = ({id,title,children,inputs=[],outputs=[],width=200,minHeight=80}) => {
    return (
        <div
        style={{
            width: 200,
            minHeight:80,
            border: "1px solid black",
            padding: 10,
            borderRadius: 8,
            position: "relative",
        }}
        >
        {/* Header  */}
        <div>
            <span>{title}</span>
        </div>
        <div>{children}</div>

        {/* Left handles */}
        {
            inputs.map((input,index)=>{

                return <Handle
                key={input.id}
                type="target"
                position={Position.Left}
                id={`${id}-${input.id}`}
                style={{
                    top: `${((index + 1) * 100) / (inputs.length + 1)}%` // improves handle position so right and left dont overlap
                }}
              />
            })
        }

        {/* Right handle */}
        {
            outputs.map((output,index)=>{
                return <Handle
                key={output.id}
                type="source"
                position={Position.Right}
                id={`${id}-${output.id}`}
                style={{
                    top: `${((index + 1) * 100) / (outputs.length + 1)}%`, // improves handle position so right and left dont overlap
                }}
              />
            })
        }
        </div>
    )
}
