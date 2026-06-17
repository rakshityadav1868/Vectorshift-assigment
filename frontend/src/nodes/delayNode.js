import { useState } from "react";
import { BaseNode } from "../components/BaseNode"

export const DelayNode =({id})=>{
    const [delay, setDelay] = useState(1000);

    function handleDelay (e){
        setDelay(e.target.value)
    }
    return(
        <BaseNode
        id={id}
        title="Delay"
        inputs={
            [
                {
                    id: "value"
                }
            ]
        }
        outputs={
            [
                {
                    id: "delayed"
                }
            ]
        }
        >
            <div>
                <label>
                Delay (ms):
                <input
                type="number"
                value={delay}
                onChange={handleDelay}
                />
                </label>
            </div>
        </BaseNode>
    )
}