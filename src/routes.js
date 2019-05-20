import { Dashboard, FormInput } from "./container/layout";
import ComingSoon from "./container/layout/ComingSoon";
import InputGroup from "./container/layout/InputGroup";
import CheckBoxRadio from "./container/layout/CheckBoxRadio";
import {
  LINK_CHECKBOX_RADIO,
  LINK_DEFAULT,
  LINK_FORM_INPUT,
  LINK_HOME,
  LINK_INPUT_GROUPS
} from "./common/constant";
const routes = [
  {
    path: LINK_DEFAULT,
    exact: true,
    component: Dashboard
  },
  {
    path: LINK_HOME,
    exact: true,
    component: Dashboard
  },
  {
    path: LINK_FORM_INPUT,

    component: FormInput
  },
  {
    path: LINK_CHECKBOX_RADIO,

    component: CheckBoxRadio
  },
  {
    path: LINK_INPUT_GROUPS,
    component: InputGroup
  },
  {
    component: ComingSoon
  }
];

export default routes;
