import React from 'react';

const SubMenu = React.lazy(() => import('./views/menus/sub-menu/SubMenu'));
const CodeTesting = React.lazy(() => import('./views/menus/CodeTesting/codeTesting'));
const subMenu1 = React.lazy(() => import('./views/menus/sub-menu-1/subMenu1'));
const SampleMenu = React.lazy(() => import('./views/menus/SampleMenu/SampleMenu'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/menus/sub-menu', name: 'Sub Menu', component: SubMenu },
  { path: '/menus/CodeTesting', name: 'Code Testing', component: CodeTesting },
  { path: '/menus/sub-menu-1', name: 'Sub Menu 1', component: subMenu1 },
  { path: '/menus/SampleMenu', name: 'User Info', component: SampleMenu },

];

export default routes;
