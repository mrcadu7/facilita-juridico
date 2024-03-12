import { useEffect, useState } from 'react';
import styles from './Cadastros.module.css';

import ModalRoutes from '../modal/ModalRoutes';

function Cadastros() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [route, setRoute] = useState([]);

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

  const openModal = () => {
    fetch('http://localhost:3000/api/routeCalculator/')
      .then(response => response.json())
      .then(data => {
        setRoute(data);
        setIsModalOpen(true);
      })
      .catch(error => console.error(error));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.cadastros_container}>
      <h1>Clientes</h1>

      <input
        type="text"
        placeholder="Digite algum dado do cliente.."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={openModal}>Calcular Melhor Rota</button>
      <ModalRoutes isOpen={isModalOpen} onClose={closeModal} route={route} />
      <ul/>

      {displayedClients.map(client => (
        <div key={client.id} className={styles.client}>
          <h2>{client.name}</h2>
          <p>Email: {client.email}</p>
          <p>Telefone: {client.phone}</p>
          <p>Localização: ({client.x},{client.y})</p>
        </div>
      ))}

      

      <div className={styles.pagination}>
        {hasPreviousPage && (
          <button 
            onClick={() => { 
              setPage(page => Math.max(page - 1, 1));
              window.scrollTo(0, 0);
            }}
          >
            Anterior
          </button>
        )}

        <span>Página {page}</span>

        {hasNextPage && (
          <button 
          onClick={() => {
            setPage(page => page + 1);
            window.scrollTo(0, 0);
          }}
        >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
}

export default Cadastros;
