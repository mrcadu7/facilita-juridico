import { useEffect, useState } from 'react';
import styles from './Cadastros.module.css';

function Cadastros() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/api/clients/')
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error(error));
  }, []);

  const clientsPerPage = 5;
  const startIndex = (page - 1) * clientsPerPage;
  const endIndex = startIndex + clientsPerPage;

  const filteredClients = clients
    .filter(client =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase()) ||
      client.phone.toLowerCase().includes(search.toLowerCase())
    );

  const displayedClients = filteredClients.slice(startIndex, endIndex);
  const hasNextPage = endIndex < filteredClients.length;
  const hasPreviousPage = page > 1;

  return (
    <div className={styles.cadastros_container}>
      <h1>Clientes cadastrados</h1>

      <input
        type="text"
        placeholder="Digite algum dado do cliente.."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {displayedClients.map(client => (
        <div key={client.id} className={styles.client}>
          <h2>{client.name}</h2>
          <p>{client.email}</p>
          <p>{client.phone}</p>
        </div>
      ))}

      <div className={styles.pagination}>
        {hasPreviousPage && (
          <button 
            onClick={() => setPage(page => Math.max(page - 1, 1))}
          >
            Anterior
          </button>
        )}

        <span>Página {page}</span>

        {hasNextPage && (
          <button 
            onClick={() => setPage(page => page + 1)}
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
}

export default Cadastros;
