import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/HomePage"
import BlogPost from "./pages/BlogPostPage"
import App from "./App"
import About from "./pages/AboutPage"

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: "blog/:id", element: <BlogPost /> },
                { path: "about-me", element: <About /> },
                { path: "*", element: <Home /> },
            ],
        },
    ], { 
        basename: "/learning-journal/", 
    }
)