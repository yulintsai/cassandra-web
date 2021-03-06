/*
* NOTE: element components
* https://github.com/ElemeFE/element/blob/master/components.json
*/
import Vue from 'vue';
import {
  Loading,
  Table,
  TableColumn,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Aside,
  Radio,
  RadioGroup,
  RadioButton,
  Pagination,
  Message,
  MessageBox,
  Input,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/style/theme/index.css';

locale.use(lang)

Vue.use(Loading.directive);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Pagination);
Vue.use(Input);

Vue.config.lang = 'en-us'
Vue.prototype.$loading = Loading.service;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
