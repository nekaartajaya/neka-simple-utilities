import KiloFormatter from "../KiloFormatter"

test('Kilo Formatter', () => {
    expect(KiloFormatter({value : 1000})).toBe('1K');
})

test('Kilo Formatter 2', () => {
    expect(KiloFormatter({value : 2310})).toBe('2.3K');
})

test('Kilo Formatter 3', () => {
    expect(KiloFormatter({value : 10000})).toBe('10K');
})