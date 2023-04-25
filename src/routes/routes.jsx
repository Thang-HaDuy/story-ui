import config from '~/config';

// Layouts
import { HeaderOnly, SmallLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Signup from '~/pages/Signup';
import Hot from '~/pages/Hot';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import Story from '~/pages/Story';
import Chapter from '~/pages/Chapter';
import Forgot from '~/pages/Forgot';
import ResetPassword from '~/pages/ResetPassword';
import Verify from '~/pages/Verify';
import CheckMail from '~/pages/CheckMail';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.signup, component: Signup, layout: HeaderOnly },
    { path: config.routes.Login, component: Login, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: SmallLayout },
    { path: config.routes.story, component: Story, layout: SmallLayout },
    { path: config.routes.chapter, component: Chapter, layout: HeaderOnly },
    { path: config.routes.forgot, component: Forgot, layout: HeaderOnly },
    { path: config.routes.verify, component: Verify, layout: HeaderOnly },
    { path: config.routes.resetpassword, component: ResetPassword, layout: HeaderOnly },
    { path: config.routes.checkmail, component: CheckMail, layout: HeaderOnly },
    { path: config.routes.hot, component: Hot, layout: HeaderOnly },
    { path: config.routes.category, component: Signup, layout: HeaderOnly },
    { path: config.routes.history, component: Signup, layout: HeaderOnly },
    { path: config.routes.follow, component: Signup, layout: HeaderOnly },
    { path: config.routes.rating, component: Signup, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
