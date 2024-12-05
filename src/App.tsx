import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen'; 
import FuncionarioPage from './FuncionarioPage'; 
import EmpresaPage from './EmpresaPage'; 

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
