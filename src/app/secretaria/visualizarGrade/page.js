'use client'

import cardStyle from '@/styles/card.module.css'
import camposStyle from '@/styles/campos.module.css'

import { card } from '@/components/layoutsComponents';
import { select } from '@/components/crudComponents';

import { useEffect, useState, useRef } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Page() {
    //REDIRECT
    const router = useRouter()
    
    //MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //ELEMENTOS DO HTML
    const myElementRef = useRef(null);
    const [listaDeObjetos, setListaDeObjetos] = useState([]);
    const [listaFuncs, setlistaFuncs] = useState([]);

    useEffect(() => {

        async function selectAll() {
            try {
                const response = await axios.get('http://localhost:8080/AGIS/gradeCurricular');
                const dados = response.data;

                const listaDeObjetos = dados.map(item => ({
                    body: [item.cod, item.ano, item.semestre, item.curso]
                }));

                setListaDeObjetos(listaDeObjetos);
            } catch (error) {
                console.log(error);
            }
        }

        selectAll();

    }, []);

    return (
        <section className={cardStyle.layout} ref={myElementRef}>
            <div className={cardStyle.title}>
                <h1>Visualizar Grade</h1>
                <FontAwesomeIcon className={cardStyle.bt} onClick={handleShow} icon={faPlus}></FontAwesomeIcon>
            </div>
            <div className={cardStyle.overflow}>

                {card(
                    [
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                        { titulo: 'Curso - turno', p1: 'Semestre: 1', p2: 'Ano: ' + '2024' },
                    ]
                )}

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecione o Curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={camposStyle.campo}>
                        {select({ name: 'Selecione o curso', options: [] })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => router.push('/secretaria/montarGrade')}>
                        Criar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}