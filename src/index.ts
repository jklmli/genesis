/* tslint:disable:no-any */
const logRocket: any = require('logrocket');
logRocket.init('rhq1s4/rapid');

/* tslint:disable:no-any */
const fullstory: any = require('@fullstory/browser');
fullstory.init({ orgId: 'TWM20' });

import { AppView } from './components/views/app_view';

new AppView()
  .$mount('#app');
