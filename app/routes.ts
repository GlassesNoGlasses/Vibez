import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("posts/:postId", "routes/posts.tsx"),

    // nested routes format
    // route("posts/:postId/comments", "routes/posts/comments.tsx", [
    //     index("routes/posts/comments/index.tsx"),
    //     route(":commentId", "routes/posts/comments/$commentId.tsx"),
    // ]),

    // NOTE: Use "Outlet" component to render child routes in parent route components

    // On Layouts
    // layout("routes/dashboard.tsx", [
    //     route("stats", "routes/dashboard/stats.tsx"),
    //     route("settings", "routes/dashboard/settings.tsx"),
    // ])
    // layouts renders the parent element IN ANY child route that is nested inside it. Use 'Outlet' component to specify where the child route should be rendered

] satisfies RouteConfig;
