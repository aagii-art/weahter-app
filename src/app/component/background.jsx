import { Black } from "./black"
import { White } from "./white"



export const Background = () => {
    return (
        <div className=" flex min-h-screen bg-[green] " >
             <White/>
             <Black/>
        </div>
    )
}