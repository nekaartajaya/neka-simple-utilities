const KiloFormatter: ({value}: {value: number}) => string = ({
    value
  }) => {
    return (Math.abs(value) > 999 ? Math.sign(value)*Math.round(Math.abs(value)/100)/10 + 'K' : Math.sign(value)*Math.abs(value)).toString();
  };
  
  export default KiloFormatter