import { useState } from "react";
import { BaseNode } from "../components/BaseNode"

export const ConditionNode =({id})=>{
    const [expression, setExpression] = useState("");

    function handleCondition (e){
        setExpression(e.target.value)
    }
    return(
        <BaseNode
        id={id}
        title="Condition"
        inputs={
            [
                {
                    id: "condition"
                }
            ]
        }
        outputs={
            [
                {
                    id: "true"
                },{
                    id: "false"
                }
            ]
        }
        >
            <div>
                <label>
                Expression:
                <input
                type="text"
                value={expression}
                onChange={handleCondition}
                />
                </label>
            </div>
        </BaseNode>
    )
}