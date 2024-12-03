import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen'; // Importando a tela de boas-vindas
import FuncionarioPage from './FuncionarioPage'; // Importando a página do funcionário
import EmpresaPage from './EmpresaPage'; // Importando a página da empresa

const App: React.FC = () => {
  const [userType, setUserType] = useState<'funcionario' | 'empresa' | null>(null);

  return (
    <div>
      {/* Tela de boas-vindas */}
      {userType === null ? (
        <WelcomeScreen 
          onFuncionarioClick={() => setUserType('funcionario')} 
          onEmpresaClick={() => setUserType('empresa')} 
        />
      ) : (
        // Navegação entre as páginas de funcionário ou empresa
        userType === 'funcionario' ? (
          <FuncionarioPage />
        ) : (
          <EmpresaPage />
        )
      )}
    </div>
  );
};

export default App;
