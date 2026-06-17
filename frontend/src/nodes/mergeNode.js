import { BaseNode } from "../components/BaseNode"

export const MergeNode =({id})=>{
    return(
        <BaseNode
        id={id}
        title="Merge"
        inputs={
            [
                {
                    id: "input1"
                },{
                    id: "input2"
                }
            ]
        }
        outputs={
            [
                {
                    id: "merged"
                }
            ]
        }
        >
            <div>
                <span>Merged Two inputs</span>
            </div>
        </BaseNode>
    )
}