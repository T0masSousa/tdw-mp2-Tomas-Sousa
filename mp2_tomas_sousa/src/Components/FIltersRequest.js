// Usestate
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

//STYLES
import {
  CardSearch,
  FormSearch,
  ParagraphSearch,
  HeadingSearch,
  NoteSearch,
  ErrorSearch,
} from '../Styles/GlobalStyles.js';

export default function FiltersRequest() {
  // Pesquisa
  const [title, settitle] = useState(''); //Obrigatorio NOME FILME
  const [year, setYear] = useState(''); //Opcional ANO FILME
  const [plot, SetPlot] = useState('short'); //OPCIONAL PLOT CURTO OU EXTENSO (short or full)

  //MENSAGEM
  const [feedback, setFeedback] = useState('');

  //HISTORY
  const Navigate = useNavigate();

  // FORM PARA PEDIDO
  const handleFormSubmit = (e) => {
    // NAO SUBMETER VAZIO
    e.preventDefault();

    //SE TENTAR PESQUISAR SEM NOME || É LIMITAÇÃO DA API
    if (!title) {
      // FALTA NOME
      setFeedback('Por favor, identifica o conteúdo que procuras.');
    } else {
      // VAI PROCURAR
      setFeedback('');

      //FILTROS
      const filters = {
        title,
        year,
        plot,
      };

      //MANDA O TITLE NO STATE DO NAVIAGTE PARA IR PARA OUTRA PÁGINA VER OS RESULTADOS
      Navigate('/results', { state: { filters } });
    }
  };

  return (
    <>
      <CardSearch>
        <HeadingSearch>Pesquisa</HeadingSearch>
        <ParagraphSearch>
          Para pesquisar tens de <b>identificar o conteúdo</b> e, opcionalmente,
          poderás contribuir com mais informações. No final, clica no botão
          abaixo.
        </ParagraphSearch>
        <ErrorSearch>{feedback}</ErrorSearch>
        <FormSearch>
          <label htmlFor="title">
            <b>Nome</b>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="Nome"
            />
          </label>
          <label htmlFor="year">
            <b>Ano</b>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Ano"
            />
          </label>
          <label htmlFor="plot">
            <b>Plot</b>
            <select
              id="plot"
              value={plot}
              onChange={(e) => SetPlot(e.target.value)}
              placeholder="Plot"
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
