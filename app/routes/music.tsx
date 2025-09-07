
import type { Route } from "./+types/music";

// TESTING: imports
import { SERVER_INFO } from "../../.testing/serverInfo";

export default function Music() {

    // TESTING: function calls
    const testFetch = async () => {
        try {
            const data = await fetch(`${SERVER_INFO.URL}/api/data`)

            if (!data.ok) {
                throw new Error("Failed to fetch data");
            }

            const jsonData = await data.json();
            console.log(jsonData);

        } catch (e) {
            console.error(e)
        }
    }

    
    return (
        <>
            <h1>Music</h1>
            <button onClick={testFetch}>
                Fetch Data
            </button>
        </>
    )
}
