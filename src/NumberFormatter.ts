const NumberFormatter: ({value, separator}: {value: number; separator? : string}) => string = ({
    value,
    separator = "."
  }) => {
    const i = Math.abs(Number(value) || 0)
      .toFixed()
      .toString();
    const j = i.length > 3 ? i.length % 3 : 0;
    return (j ? i.substr(0, j) + separator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + separator);
  };
  
  export default NumberFormatter