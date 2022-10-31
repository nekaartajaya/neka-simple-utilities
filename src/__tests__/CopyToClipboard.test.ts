import CopyToClipboard from '../CopyToClipboard';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

test('Copy To Clipboard', async () => {
  console.log = jest.fn();
  await CopyToClipboard({ text: 'Test' });
  expect(console.log).toHaveBeenCalledWith('Test Copied');
});
