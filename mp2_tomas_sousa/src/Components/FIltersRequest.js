// Usestate
import { useState } from 'react';

export default function FiltersRequest({ onFilterChange }) {
  // Pesquisa
  const [title, settitle] = useState(''); //Obrigatorio NOME FILME
  const [year, setYear] = useState(''); //Opcional ANO FILME
  const [type, setType] = useState(''); //Opcional SERIE,FILME,EPISODIO
  const [plot, SetPlot] = useState('short'); //OPCIONAL PLOT CURTO OU EXTENSO (short or full)

  const [feedback, setFeedback] = useState('');

  // FORM PARA PEDIDO
  const handleFormSubmit = (e) => {
    // NAO SUBMETER VAZIO
    e.preventDefault();

    if (!title) {
      // FALTA NOME
      setFeedback('Por favor, insira o nome do filme.');
    } else {
      // VAI PROCURAR
      setFeedback('');

      //FILTROS
      const filters = {
        title,
        year,
        type,
        plot,
      };

      // CALLBACK QUE LEVA FILTROS
      onFilterChange(filters);
    }
  };

  return (
    <>
      <p>{feedback}</p>
      <form>
        <label>
          Nome Filme
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Nome do Filme"
          />
        </label>
        <br />
        <label>
          Ano de Lançamento
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Ano"
          />
        </label>
        <br />
        <label>
          Tipo
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value=""></option>
            <option value="movie">Movie</option>
            <option value="series">Serie</option>
            <option value="episode">Episode</option>
          </select>
        </label>
        <br />
        <label>
          Plot
          <select value={plot} onChange={(e) => SetPlot(e.target.value)}>
            <option value=""></option>
            <option value="short">Curto</option>
            <option value="full">Extenso</option>
          </select>
        </label>
        <br />

        <button type="submit" onClick={handleFormSubmit}>
          Procurar
        </button>
      </form>
    </>
  );
}
