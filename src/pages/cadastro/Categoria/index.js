import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais={
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave,valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(info) {
        
        setValue(
            info.target.getAttribute('name'),
            info.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)

            }}>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cor:
                    <input
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />
                </label>


                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria,indice)=>{
                    return(
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>



            <Link to="/">
                Voltar para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;