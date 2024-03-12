import { useEffect } from 'react';
import styles from './ModalRoutes.module.css'; // Importando o arquivo CSS

function ModalRoutes({ isOpen, onClose, route }) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.id === styles.modal) {
        onClose();
      }
    }

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div id={styles.modal} className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Melhor rota calculada:</h2>
        <ul>
          {route.map((client, index) => (
            <li key={index}>{client.name}, ({client.x},{client.y})</li>
          ))}
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ModalRoutes;
