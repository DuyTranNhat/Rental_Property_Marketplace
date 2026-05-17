import config from '~/config';
import * as Pages from '~/pages';
import * as Layouts from '~/layouts';

const routes = [
    { path: config.routes.default, component: Pages.Home, layout: Layouts.default, title: 'Dashboard' },
    { path: config.routes.signIn, component: Pages.SignIn, layout: Layouts.SignInLayout, title: 'Đăng nhập' },
    { path: config.routes.signUp, component: Pages.SignUp, layout: Layouts.SignInLayout, title: 'Đăng ký' },
    { path: config.routes.home, component: Pages.Home, layout: Layouts.default, title: 'Dashboard' },
    {
        path: config.routes.createListting,
        component: Pages.CreateListing,
        layout: Layouts.default,
        title: 'Cài đặt'
    },
    { path: config.routes.profile, component: Pages.Profile, layout: Layouts.default, title: 'Task chờ xử lý' },
    {
        path: config.routes.updateListing,
        component: Pages.UpdateListing,
        layout: Layouts.default,
        title: 'Profile'
    },
];

export default routes;
