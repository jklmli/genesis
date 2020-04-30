/* tslint:disable:no-any */
const logRocket: any = require('logrocket');
logRocket.init('rhq1s4/rapid');

import { AppView } from './components/views/app_view';

new AppView()
  .$mount('#app');
