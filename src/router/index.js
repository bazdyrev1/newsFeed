import About from "../pages/About";
import Login from "../pages/Login";
import PostidPage from "../pages/PostidPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', element: <About />, exact: true },
    {path: '/posts', element: <Posts />, exact: true },
    {path: '/posts/:id', element: <PostidPage />, exact: true },
    {path: '*', element: <Login />, exact: true },
]
 
export const publicRoutes = [
    {path: '/login', element: <Login />, exact: true },
    {path: '*', element: <Login />, exact: true },
]