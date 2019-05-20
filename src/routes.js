import { Dashboard, FormInput } from "./container/layout";
import ComingSoon from './container/layout/ComingSoon'
const routes = [
  ,{
    path: "/",
    exact: true,
    component: Dashboard
  },
  {
    path: "/template",
    exact: true,
    component: Dashboard
  },
  {
    path: "/template/form-input",
    exact: true,
    component: FormInput
  },
  {
    component: ComingSoon
  },
];

export default routes;
