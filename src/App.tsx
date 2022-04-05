import React from 'react';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section className="todoapp">
      <Header />
      <ToDoList />
      <Footer />
    </section>
  );
}

export default App;
