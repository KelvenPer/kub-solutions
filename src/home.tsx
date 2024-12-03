import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo à Home</h1>
      <Link to="/employee-register">
        <button>Cadastrar Funcionário</button>
      </Link>
    </div>
  );
};

export default Home;
