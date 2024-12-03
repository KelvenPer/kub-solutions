import React, { useState } from 'react';
import './EmpresaPage.css'; // Arquivo CSS para estilização

const EmpresaPage: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Estado para saber se a empresa é registrada
  const [email, setEmail] = useState(''); // Para armazenar o e-mail da empresa

  // Função para lidar com o submit do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistered) {
      // Se a empresa já é registrada, apenas enviar o e-mail
      alert(`Bem-vindo de volta, empresa ${email}`);
    } else {
      // Se a empresa não tem cadastro, redireciona para a página de cadastro
      alert('Redirecionando para cadastro...');
    }
  };

  return (
    <div className="empresa-container">
      <div className="empresa-card">
        <h1>Você já passou cadastro?</h1>
        <p>Entre com seu e-mail para continuar:</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <div className="button-container">
            <button className="button" type="submit">
              {isRegistered ? 'Entrar' : 'Cadastrar'}
            </button>
          </div>
        </form>

        <div className="toggle-link">
          <p>
            {isRegistered ? 'Ainda não possui cadastro?' : 'Já tem cadastro?'}
            <span onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? ' Cadastre-se' : ' Entrar'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpresaPage;
