import { test, TestContext } from 'ava';

test('sample', (t: TestContext) => {
  t.deepEqual('hello' + 'world', 'helloworld');
});
