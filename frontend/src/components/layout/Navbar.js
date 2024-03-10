import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/facilita_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Facilita" className={styles.logo}/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadastrar">Cadastrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadastros">Cadastros</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar