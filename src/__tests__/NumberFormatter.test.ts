import { NumberFormatter } from '../index';

test('Number Formatter', () => {
    expect(NumberFormatter({value : 10000000})).toBe('10.000.000');
});

test('Number Formatter 2', () => {
    expect(NumberFormatter({value : 10000000, separator : ','})).toBe('10,000,000');
});

