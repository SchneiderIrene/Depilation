import { IconSVGComponent } from "./styles"
import type { IconSVGProps } from "./types"


function IconSVG({path, path2, hidde}: IconSVGProps){

    return(
        <IconSVGComponent $hidde={hidde} viewBox="0 0 40 41" xmlns="http://www.w3.org/2000/svg">
            <path d={path } fill="currentColor" stroke="currentColor" strokeWidth="0"/>
            {path2 && <path d={path2} fill="currentColor" stroke="currentColor" strokeWidth="0"/>} 
        </IconSVGComponent>
    )
}

export default IconSVG