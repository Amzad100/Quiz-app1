import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Singup/Signup";
import CreateQuiz from "../Pages/CreateQuiz/CreateQuiz";
import JoinQuiz from "../Pages/JoinQuiz/JoinQuiz";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/createquiz',
                element: <CreateQuiz></CreateQuiz>
            },
            {
                path: '/joinquiz',
                element: <JoinQuiz></JoinQuiz>
            }
        ]
    },
]);

export default router;