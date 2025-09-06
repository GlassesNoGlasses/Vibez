
import type { Route } from "./+types/posts";

// Same thing as a loader but only runs on the client side
// export async function clientLoader({params}: Route.LoaderArgs) {}

// loads data from a database or an internal server 
export async function loader({params}: Route.LoaderArgs) {
    const { postId } = params;
    // Fetch the post data using the postId
    // const post = await fetchPostById(postId);
    return { postId };
}

// handles POST, PUT, DELETE requests. Automatically re-renders the component after the action is complete.
// Similar to `loader`, has clientAction and serverAction (action) variants too.
export async function action() {}


export default function Posts({loaderData} : Route.ComponentProps) {
    // Consider useFetcher when staying on the same page without reloading
    // https://reactrouter.com/en/main/hooks/use-fetcher
    // const fetcher = useFetcher();
    // fetcher.load("/posts/123") // loads data from the loader function of the given route 


    // Navigating programmatically inside component
    // const navigate = useNavigate();
    // navigate("/posts/123")
    // NOTE: in an action or loader function, use redirect("/posts/123") instead
    // NOTE: Can also use <Link to="/posts/123">Post 123</Link> component to navigate
    return (
        <div>Posts {loaderData.postId}</div>
    )
}

