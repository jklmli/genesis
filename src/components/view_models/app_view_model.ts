import { Sleep } from '../../models/sleep';

class AppViewModel {
  static DEFAULT_SLEEP_NUMBER: number = 10;

  name: string;
  sleep: Sleep;

  constructor(name: string = 'world', sleep: Sleep = new Sleep(AppViewModel.DEFAULT_SLEEP_NUMBER)) {
    this.name = name;
    this.sleep = sleep;
  }
}

export { AppViewModel };
