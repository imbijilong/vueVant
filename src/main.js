import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'amfe-flexible'//rem适配
import './utils/allcss.less'//设置全局的样式
// 解决移动端点击延迟300毫秒
FastClick.attach(document.body)

import { Dialog, Loading, Toast, Lazyload, Button, RadioGroup, Radio, Field, Col, Row, Cell, Icon, CellGroup} from 'vant'
import 'vant/lib/index.css';

Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(CellGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
