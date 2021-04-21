import { Component } from 'react';
import Quiz from './container/Quiz/Quiz';
import Layout from './hoc/Layout/Layout'




class App extends Component {
  render() {

    return (
      <Layout>
       
      <Quiz/>
      </Layout>
    )
  }
}

export default App;
