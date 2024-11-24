// Usestate
import { useState } from 'react';
import React from 'react';

export default function FiltersRequest({ onFilterChange }) {
  // Pesquisa
  const [title, settitle] = useState(''); //Obrigatorio NOME FILME
  const [year, setYear] = useState(''); //Opcional ANO FILME
  const [plot, SetPlot] = useState('short'); //OPCIONAL PLOT CURTO OU EXTENSO (short or full)

  //MENSAGEM
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
        <label htmlFor="title">
          Nome
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Nome"
          />
        </label>
        <br />
        <label htmlFor="year">
          Ano
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Ano"
          />
        </label>
        <br />

        <label htmlFor="plot">
          Plot
          <select
            id="plot"
            value={plot}
            onChange={(e) => SetPlot(e.target.value)}
          >
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
