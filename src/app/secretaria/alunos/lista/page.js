'use client'

import css from '@/styles/estilos.module.scss'
import url from '@/components/utils'

import { card } from '@/components/layoutsComponents';

import { useEffect, useState, useRef } from 'react';

import axios from 'axios';

export default function Page() {
    const myElementRef = useRef(null);

    const [listaDeObjetos, setListaDeObjetos] = useState([]);

    useEffect(() => {

        async function selectAll() {
            try {
                const response = await axios.get(url.alunos)
                const dados = response.data;

                const listaDeObjetos = dados.map(item => (
                    {
                        body: {
                            cod: item.ra,
                            titulo: `${item.usuario.nome}`,
                            p: [
                                `Ra: ${item.ra}`,
                                `Curso: ${item.curso.sigla} - ${item.curso.turno}`
                            ]
                        }
                    }
                ))

                setListaDeObjetos(listaDeObjetos);

            } catch (error) {
                console.log(error);
            }

        }

        selectAll()

    }, []);


    return (
        <section className={css.form} ref={myElementRef}>
            <div>
                <h1 className={css.h1}>Visualizar Alunos</h1>
            </div>

            {card(listaDeObjetos, '/secretaria/alunos/lista', [])}

        </section>
    )
}