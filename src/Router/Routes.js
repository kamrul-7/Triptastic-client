import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Others/About/About";
import Login from "../Others/Login/Login";
import Review from "../Others/Review/Review";
import SignIn from "../Others/SignIn/SignIn";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import AddService from "../Pages/Home/Service/AddService";
import AllPlaces from "../Pages/Home/Service/AllPlaces";
import PlaceDetails from "../Pages/Home/Service/PlaceDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
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
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/AllPlaces',
                element: <PrivateRoute><AllPlaces></AllPlaces></PrivateRoute>,
                loader: () => fetch('https://music-album-pearl.vercel.app/place')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <PlaceDetails></PlaceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://music-album-pearl.vercel.app/place/${params.id}`)

            }
        ]
    }
])
export default router;