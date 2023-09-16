import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Course from "../pages/MyCourse/MyCourse";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import TestInCourse from "../components/TestInCourse/TestInCourse";
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
    {path: '/course/view/:id/test/:part', component: TestInCourse},
];
export {publicRoutes, privateRoutes};