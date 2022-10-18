import { NumberFormatter } from '../index';

test('Number Formatter', () => {
    expect(NumberFormatter({value : 10000000, length : 3})).toBe('10.000.000');
});

