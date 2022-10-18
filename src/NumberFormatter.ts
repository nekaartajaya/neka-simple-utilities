const NumberFormatter: ({value, length, separator}: {value: number; length: number, separator? : string}) => string = ({
    value,
    length,
    separator = "."
  }) => {
    const i = Math.abs(Number(value) || 0)
      .toFixed()
      .toString();
    const j = i.length > length ? i.length % length : 0;
    return (j ? i.substr(0, j) + separator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + separator);
  };
  
  export default NumberFormatter