import {useAtom} from "jotai";
import { sideBarActiveItem } from "@/app/Common/links";

const useRouteChange=()=>{
    const [activeRoute,setActiveRoute]=useAtom(sideBarActiveItem)

    return {activeRoute,setActiveRoute};
}

export default useRouteChange