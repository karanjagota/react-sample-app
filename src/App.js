import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import NextPage from './components/Next_page';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
  return (
    <div className='App'>
      <Route path="/" render={()=>(
        <Header/>
      )}/>
      <Route exact path ="/" component={Body}/>
      <Route exact path="/nextpage" component={NextPage}/>
      <Route path = "/" component={Footer}/>
    </div>  
  );
}
}
export default App;
