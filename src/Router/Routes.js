import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllPlaces from "../Pages/Home/Service/AllPlaces";
import PlaceDetails from "../Pages/Home/Service/PlaceDetails";

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
                path: '/AllPlaces',
                element: <AllPlaces></AllPlaces>,
                loader: () => fetch('http://localhost:5000/place')
            },
            {
                path: '/details/:id',
                element: <PlaceDetails></PlaceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/place/${params.id}`)

            }
        ]
    }
])
export default router;