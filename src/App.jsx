import { Layout } from 'antd';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MyProjectsPage from './components/MyProjectsPage/MyProjectsPage';

function App() {
  const CurrentPage = {
    Title: 'My Projects',
    Content: MyProjectsPage,
  };
  return (
    <div className="App">
      <Layout>
        <Header pageTitle={CurrentPage.Title} />
        <CurrentPage.Content />
      </Layout>
    </div>
  );
}

export default App;
