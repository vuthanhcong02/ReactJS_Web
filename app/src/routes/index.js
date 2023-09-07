import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Course from "../pages/MyCourse/MyCourse";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
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
        path: '/my-courses',
        component: Course
    }
];

const privateRoutes = [
    {path: '/course/view/:id', component: CourseDetail},
];
export {publicRoutes, privateRoutes};