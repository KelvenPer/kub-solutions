import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onFuncionarioClick: () => void;
  onEmpresaClick: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFuncionarioClick, onEmpresaClick }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Seja Bem-vindo à Kub Solutions</h1>
        <p className="welcome-message">
          Conectamos empresas com funcionários de alta performance!
        </p>

        <div className={`button-container ${showButtons ? 'show' : ''}`}>
          <button className="button" onClick={onFuncionarioClick}>
            Eu sou um Funcionário
          </button>
          <button className="button" onClick={onEmpresaClick}>
            Eu sou uma Empresa
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
