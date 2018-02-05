import { InterfaceAsClass } from '../../helpers/interface_as_class';
import { Sleep } from '../../models/sleep';

class WelcomeViewModel {
  protected props: WelcomeViewModel.Props;

  get name(): string {
    return this.props.value.name;
  }

  get sleepNumber(): number {
    return this.props.value.sleep.number;
  }

  set sleepNumber(sleepNumber: number) {
    this.props.value.sleep.number = sleepNumber;
  }

  constructor(props: WelcomeViewModel.Props) {
    this.props = props;
  }
}

module WelcomeViewModel {
  export interface IProps {
    readonly name: string;
    readonly sleep: Sleep;
  }

  export class Props extends InterfaceAsClass<IProps>{}
}

export { WelcomeViewModel };
