import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import logo_facilita_original from '../../img/logo-facilita-original.webp'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao <span>Facilita Juridico</span>
            </h1>
            <p>Cadastre-se agora mesmo!</p>
            <LinkButton to="/cadastrar" text="Cadastrar" />
            <img src={logo_facilita_original} alt="Facilita" />
        </section>
    )
}

export default Home