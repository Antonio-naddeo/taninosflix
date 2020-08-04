/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { videoBanner } from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefaut from '../../components/PageDefault';
import aluraRepository from '../../repositories/alura';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={375} width={375} />
);

const carregando = styled.div`
  align-content:center;
  vertical-align:center;
  width:100%;
  height:100%;
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  function AgruparBDAlura(categoriasBD, formacoes) {
    const dadosAgrupados = [
      {
        nome: 'Formações Alura',
        descricao: 'Aqui voce encontra todas as formações ofertadadas pela queridissima Alura',
        id: 5000,
        cor: '#2a7ae4',
        link_extra: {
          text: 'Aqui voce encontra todas as formações ofertadadas pela queridissima Alura',
          url: 'https://www.alura.com.br/formacoes',
        },
        videos: formacoes,
      },
      ...categoriasBD,
    ];
    return dadosAgrupados;
  }

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(async (categoriasComVideos) => {
        const formacoes = await aluraRepository.getCursosAlura();
        const categoriasBdEAlura = AgruparBDAlura(categoriasComVideos, formacoes);
        setDadosIniciais(categoriasBdEAlura);
        console.log(categoriasBdEAlura);
      })
      .catch((err) => {
        console.log(`----${err.message}`);
      });
  }, []);

  return (
    <PageDefaut paddingAll={0}>

      {dadosIniciais.length === 0 && (<carregando><Loading type="spinningBubbles" color="#2a7ae4" /></carregando>)}
      {dadosIniciais.map((categoria, indice) => {
        //console.log(categoria);
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={videoBanner.titulo}
                url={videoBanner.url}
                urlImage={videoBanner.urlImage}
                videoDescription="video secreto do Dev Soutinho com os desafio prontos"
              />

              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

    </PageDefaut>
  );
}

export default Home;
