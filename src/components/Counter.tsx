interface DataCounter {
  endDate: string;
  title: string;
}

function Counter({ dataCounter }: { dataCounter: DataCounter }) {
  let today: Date = new Date();
  let lastDay: Date = new Date(dataCounter.endDate);

  const feriados_nacionais = [
    "2025-01-01",
    "2025-02-17",
    "2025-04-18",
    "2025-04-21",
    "2025-05-01",
    "2025-09-07",
    "2025-10-12",
    "2025-11-02",
    "2025-11-15",
    "2025-12-25",
  ];

  const calcularDiasRestantes = (lastDay: Date) => {
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    return Math.ceil(
      (lastDay.getTime() - today.getTime()) / umDiaEmMilissegundos
    );
  };

  const isFeriado = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Transforma em "YYYY-MM-DD"
    return feriados_nacionais.includes(formattedDate);
  };

  const isDiaUtil = (date: Date) => {
    const diaDaSemana = date.getDay();
    return diaDaSemana !== 0 && diaDaSemana !== 6 && !isFeriado(date);
  };

  const calcularDiasUteis = (lastDay: Date) => {
    let counter = 0;
    let dia = new Date(today);

    for (let i = 0; i < calcularDiasRestantes(lastDay); i++) {
      if (isDiaUtil(dia)) {
        counter++;
      }
      dia.setDate(dia.getDate() + 1); // Avança um dia
    }
    return counter;
  };

  return (
    <div
      className="counter"
      style={{ color: isDiaUtil(today) ? "rgba(142, 222, 247, 1)" : "#FA8072" }}
    >
      <p>{dataCounter.title}</p>
      <h1>{calcularDiasUteis(lastDay)}</h1>
      <p>de {calcularDiasRestantes(lastDay)} totais</p>
    </div>
  );
}

export default Counter;
