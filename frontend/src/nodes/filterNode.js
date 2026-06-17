import { BaseNode } from "../components/BaseNode"
import {useState} from "react"

export const FilterNode =({id})=>{
    const [filter, setFilter] = useState("");

    function handleFilterCondition (e){
        setFilter(e.target.value)
    }
    return(
        <BaseNode
        id={id}
        title="Filter"
        inputs={
            [
                {
                    id: "data"
                }
            ]
        }
        outputs={
            [
                {
                    id: "filtered"
                }
            ]
        }
        >
            <div>
                <label >
                Condition:
                <input
                type="text"
                value={filter}
                onChange={handleFilterCondition}
                />
                </label>
            </div>
        </BaseNode>
    )
}