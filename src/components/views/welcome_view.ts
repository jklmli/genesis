import { Component, p, Prop, Watch } from 'av-ts';
import { default as Vue } from 'vue';

import { AppViewModel } from '../view_models/app_view_model';
import { WelcomeViewModel } from '../view_models/welcome_view_model';

require('../styles/welcome_view.scss');

/**
 * Initial screen that the user first enters into.
 */
@Component({
  template: require('../templates/welcome_view.html')
})
class WelcomeView extends Vue {
  @Prop
  props: WelcomeViewModel.Props = p({
    required: true,
    type: WelcomeViewModel.Props
  });

  state: WelcomeViewModel;

  constructor() {
    super();

    this.state = new WelcomeViewModel(this.props);
  }

  get formattedSleep(): string {
    const sleepDescription: string = ((): string => {
      if (this.state.sleepNumber < AppViewModel.DEFAULT_SLEEP_NUMBER) {
        return 'bad';
      }
      else if (this.state.sleepNumber === AppViewModel.DEFAULT_SLEEP_NUMBER) {
        return 'okay';
      }
      else {
        return 'great';
      }
    })();

    return `${this.state.sleepNumber}: ${sleepDescription}`;
  }

  protected increaseSleep(): void {
    this.state.sleepNumber += 1;
  }

  @Watch(['state', 'sleepNumber'])
  protected alertOnOversleep(newVal: number, oldVal: number): void {
    if (newVal > AppViewModel.DEFAULT_SLEEP_NUMBER) {
      alert("You've gotten a lot of sleep!");
    }
  }
}

export { WelcomeView };
