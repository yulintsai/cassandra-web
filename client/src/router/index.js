import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/components/home';
import Demo from '@/components/demo';
import DemoTable from '@/components/demoTable';
import DemoTable2 from '@/components/demoTable2';
// import Keyspace from '@/components/keyspace';
// import Table from '@/components/table';
// import Row from '@/components/row';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      children: [
        {
          path: ':id',
          component: DemoTable,
          children: [
            {
              path: ':id',
              component: DemoTable2,
            },
            {
              path: 'table',
              component: DemoTable2,
            }
          ]
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home,
    // },
    // {
    //   path: '/keyspace',
    //   name: 'keyspace',
    //   component: Keyspace,
    // },
    // {
    //   path: '/table',
    //   name: 'table',
    //   component: Table,
    // },
    // {
    //   path: '/row',
    //   name: 'row',
    //   component: Row,
    // },
  ],
});
