// Usestate
import { useState } from 'react';
import React from 'react';
import {
  CardSearch,
  FormSearch,
  ParagraphSearch,
  HeadingSearch,
  NoteSearch,
  ErrorSearch,
} from '../Styles/GlobalStyles.js';

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
      setFeedback('Por favor, insire o nome do conteúdo que procuras.');
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
      <CardSearch>
        <HeadingSearch>Pesquisa</HeadingSearch>
        <ParagraphSearch>
          Para pesquisar tens de introduzir o <b>nome do filme</b> e,
          opcionalmente, poderás contribuir com mais informações. No final,
          clica em "procurar".
        </ParagraphSearch>
        <ErrorSearch>{feedback}</ErrorSearch>
        <FormSearch>
          <label htmlFor="title">
            Nome
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="Nome"
            />
          </label>
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
          <button type="submit" onClick={handleFormSubmit}>
            Procurar
          </button>
        </FormSearch>
        <NoteSearch>
          Os dados vêm de um fornecedor externo, pelo que deverás fazer a tua
          pesquisa em inglês.
        </NoteSearch>
      </CardSearch>
    </>
  );
}
