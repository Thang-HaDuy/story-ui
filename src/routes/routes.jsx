import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';
import Hot from '~/pages/Hot';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.signup, component: Signup, layout: HeaderOnly },
    { path: config.routes.Login, component: Login, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.hot, component: Hot, layout: HeaderOnly },
    { path: config.routes.category, component: Signup, layout: HeaderOnly },
    { path: config.routes.history, component: Signup, layout: HeaderOnly },
    { path: config.routes.follow, component: Signup, layout: HeaderOnly },
    { path: config.routes.rating, component: Signup, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
