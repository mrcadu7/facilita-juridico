import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^\d+$/;
    return re.test(phone);
}

function CadastroForm({ handleSubmit, btnText }) {

    const [client, setClient] = useState({})

    const submit = (e) => {
        e.preventDefault()
        if (!client.name || client.name.trim() === '') {
            alert('Nome é obrigatório');
            return;
        }
        if (!validateEmail(client.email)) {
            alert('Email inválido');
            return;
        }
        if (!validatePhone(client.phone)) {
            alert('Telefone inválido');
            return;
        }
        handleSubmit(client)
    }

    function handleChange(e) {
        setClient({ ...client, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="name"
                placeholder="Insira o nome aqui!"
                handleOnChange={handleChange}
                value={client.name || ''}
            />
            <Input
                type="text"
                text="Email"
                name="email"
                placeholder="Insira o email aqui!"
                handleOnChange={handleChange}
                value={client.email || ''}
            />
            <Input
                type="text"
                text="Telefone"
                name="phone"
                placeholder="Insira o seu número de telefone aqui!"
                handleOnChange={handleChange}
                value={client.phone || ''}
            />
            <div>
                <h2>Localização</h2>
                <Input
                    type="number"
                    text="Eixo X"
                    name="x"
                    placeholder="Insira a eixo X aqui!"
                    handleOnChange={handleChange}
                    value={client.x || ''}
                />
                <Input
                    type="number"
                    text="Eixo Y"
                    name="y"
                    placeholder="Insira a eixo Y aqui!"
                    handleOnChange={handleChange}
                    value={client.y || ''}
                />
            </div>

            <SubmitButton text={btnText} />
        </form>
    )
}

export default CadastroForm;
