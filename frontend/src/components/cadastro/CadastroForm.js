import { useEffect, useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'


function CadastroForm ( { handleSubmit ,btnText } ) {

    const [client, setClient] = useState({})
    
    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
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
            <SubmitButton text={btnText} />
        </form>
    )
}

export default CadastroForm