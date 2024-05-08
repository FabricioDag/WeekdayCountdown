function Counter() {
  // pega dia atual
  let today = new Date();
  // pega data final
  let lastDay = new Date('September 4, 2024 23:59:59');
  // verifica cada dia até data final se é dia util

  const calcularDiasRestantes = (lastDay) => {
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    let diasRestantes = Math.ceil(
      (lastDay.getTime() - Date.now()) / umDiaEmMilissegundos
    ); // Calcula o número de dias restantes
    return diasRestantes;
  };

  const calcularDiasUteis = (lastDay) => {
    let dia = today;
    let counter = 0;

    for (let i = 0; i < calcularDiasRestantes(lastDay); i++) {
      if (isDiaUtil(dia)) {
        counter++;
      }
      dia.setDate(dia.getDate() + 1);
    }
    return counter;
  };

  const isDiaUtil = (date) => {
    const diaDaSemana = date.getDay();
    return diaDaSemana !== 0 && diaDaSemana !== 6; // Retorna verdadeiro se não for doming(0) nem sábado (6)
  };

  return (
    <div
      className="counter"
      style={{ backgroundColor: isDiaUtil(today) ? '#3CB371' : '#FA8072' }}
    >
      <h1>{calcularDiasUteis(lastDay)}</h1>
      <p>de {calcularDiasRestantes(lastDay)} totais</p>
    </div>
  );
}

export default Counter;
