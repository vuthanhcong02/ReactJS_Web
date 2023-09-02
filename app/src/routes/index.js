import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Course from "../pages/Course/Course";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/courses',
        component: Course
    }
];
const privateRoutes = [];
export {publicRoutes, privateRoutes};