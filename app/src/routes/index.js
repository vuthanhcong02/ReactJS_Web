import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Course from "../pages/MyCourse/MyCourse";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import DashboardAdmin from "../pages/DashboardAdmin/index.js";
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
    },
    // {path: 'admin/login', component: AdminLogin},
];

const privateRoutes = [
    {path: '/course/view/:id', component: CourseDetail},
    {path: '/course/view/:id/test/:part', component: TestInCourse},
    {path:'admin', component: DashboardAdmin},
    // {path:'admin/course', component: CourseControl},
];
export {publicRoutes, privateRoutes};