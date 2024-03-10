import { useNavigate } from 'react-router-dom'
import CadastroForm from '../cadastro/CadastroForm'
import styles from './Cadastrar.module.css'

function NovoCadastro() {
    const navigate = useNavigate()

    function createClient(client) {
        fetch('http://localhost:3000/api/clients/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/cadastros', {state: {message: 'Cliente cadastrado com sucesso!'}})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.cadastrar_container}>
            <h1>Criar Cadastro</h1>
            <p>Complete o formulário abaixo!</p>
            <CadastroForm handleSubmit={createClient} btnText="Criar Cliente" />
        </div>
    )
}

export default NovoCadastro