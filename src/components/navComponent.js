import 'bootstrap/dist/css/bootstrap.css';
import navStyle from '../styles/nav.module.css'

import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function nav() {
    return (
        <nav className={navStyle.navBar}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/secretaria">
                        <Image src="/imgs/logo2.png" width={60} height={60} priority={true} alt='Logo' />
                        Agis
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Alunos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/secretaria/alunos/lista">Lista de Alunos</NavDropdown.Item>
                                <NavDropdown.Item href="/secretaria/alunos/matricular">Matricular</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Inserir" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/secretaria/crudCurso">Inserir Curso</NavDropdown.Item>
                                <NavDropdown.Item href="/secretaria/crudDisciplina">Inserir Disciplina</NavDropdown.Item>
                                <NavDropdown.Item href="/secretaria/crudProf">Inserir Professor</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/secretaria/montarGrade">Montar a Grade</Nav.Link>

                            <Nav.Link href="/secretaria/calendarioAcademico">Calendário Acadêmico</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )

}