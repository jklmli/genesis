import { Component } from 'av-ts';
import { default as Vue } from 'vue';

import { AppViewModel } from '../view_models/app_view_model';
import { WelcomeView } from './welcome_view';
import { WelcomeViewModel } from '../view_models/welcome_view_model';

require('../styles/app_view.scss');

/**
 * Container view that holds the rest of the app.
 */
@Component({
  components: {
    'welcome-view': WelcomeView
  },
  template: require('../templates/app_view.html')
})
class AppView extends Vue {
  state: AppViewModel;

  constructor() {
    super();

    this.state = new AppViewModel();
  }

  get welcomeViewProps(): WelcomeViewModel.Props {
    return new WelcomeViewModel.Props(this.state);
  }
}

export { AppView };
