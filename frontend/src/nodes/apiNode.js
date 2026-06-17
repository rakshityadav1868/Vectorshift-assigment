import { useState } from "react"
import { BaseNode } from "../components/BaseNode"

export const ApiNode =({id})=>{
    const [endpoint,setEndpoint] =useState("")

    function handleEndpointChange(e){
        setEndpoint(e.target.value)
    }

    return (
        <BaseNode
        id={id}
        title="API"
        inputs={
            [
                {
                    id: "request"
                }
            ]
        }
        outputs={
            [
                {
                    id: "response"
                }
            ]
        }
        >
            <div>
                <label>
                    Endpoint:
                <input
                type="text"
                value={endpoint}
                onChange={handleEndpointChange}
                />
                </label>
            </div>
        </BaseNode>
    )
}