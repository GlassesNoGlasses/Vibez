
import SideList from "~/components/lists/SideList";

// TESTING: imports
import { SERVER_INFO } from "../../.testing/serverInfo";

export default function Music() {

    // // TESTING: function calls
    // const testFetch = async () => {
    //     try {
    //         const data = await fetch(`${SERVER_INFO.URL}/api/data`)

    //         if (!data.ok) {
    //             throw new Error("Failed to fetch data");
    //         }

    //         const jsonData = await data.json();
    //         console.log(jsonData);

    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    
    return (
        <div className="flex h-full w-full flex-1 flex-row bg-gray-900 text-white">
            <SideList params={{}} />
        </div>
    )
}
