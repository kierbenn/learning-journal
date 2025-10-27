
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import BlogPost from "./pages/BlogPost"
import App from "./App"

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: "blog/:id", element: <BlogPost /> },
                { path: "*", element: <Home /> },
            ],
        },
    ], { 
        basename: "/learning-journal/", 
    })