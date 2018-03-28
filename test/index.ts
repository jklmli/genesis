import { test, TestContext } from 'ava';

import { Sleep } from '../src/models/sleep';

test('sample', (t: TestContext) => {
  const answer: number = 42;

  t.is(new Sleep(answer).number, answer);
});
