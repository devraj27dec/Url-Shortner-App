import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <>
       <Header/> 
       <Hero/>
       <Footer/>
      </>
    );
  }
}
