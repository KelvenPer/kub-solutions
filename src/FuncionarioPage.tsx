import React, { useState } from 'react';
import './FuncionarioPage.css'; // Arquivo CSS para estilização

const FuncionarioPage: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Estado para saber se o usuário é registrado
  const [email, setEmail] = useState(''); // Para armazenar o e-mail do usuário

  // Função para lidar com o submit do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistered) {
      // Se o usuário já é registrado, apenas enviar o e-mail
      alert(`Bem-vindo de volta, ${email}`);
    } else {
      // Se o usuário não tem cadastro, redireciona para a página de cadastro
      alert('Redirecionando para cadastro...');
    }
  };

  return (
    <div className="funcionario-container">
      <div className="funcionario-card">
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

export default FuncionarioPage;
