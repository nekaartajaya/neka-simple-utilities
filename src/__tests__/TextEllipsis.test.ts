import { TextEllipsis } from '../index';

test('Text Ellipsis Start', () => {
    expect(TextEllipsis({position : 'start', text : 'How To Make Money', length : 6})).toBe('... Money');
});

test('Text Ellipsis Middle', () => {
    expect(TextEllipsis({position : 'middle', text : 'How To Make Money', length : 6})).toBe('How To... Money');
});

test('Text Ellipsis End', () => {
    expect(TextEllipsis({text : 'How To Make Money', length : 6})).toBe('How To...');
});