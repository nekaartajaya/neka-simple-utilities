const TextEllipsis: ({
  position,
  text,
  length,
}: {
  position?: 'start' | 'middle' | 'end';
  text: string;
  length: number;
}) => string = ({ position, text, length }) => {
  let first: string  = '';
  let middle: string  = '';
  let last: string  = '';

  if (text) {
    switch (position) {
      case 'start':
        first = '...';
        last = text.substring(text.length - length);
				return first + last;
      case 'middle':
        first = text.substring(0, length);
        middle = '...';
        last = text.substring(text.length - length);
				return first + middle + last;
      default:
        first = text.substring(0, length);
        last = '...';
				return first + last;
    }
  }

  return '';
};

export default TextEllipsis;
