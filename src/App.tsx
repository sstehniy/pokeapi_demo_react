import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';

const App: React.FC = () => {
  return (
    <div className='container-fluid h-100 p-0 d-flex flex-column bg-alert'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
