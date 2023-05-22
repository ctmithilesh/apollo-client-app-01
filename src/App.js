import './App.css';
import Employees from './Components/Employees';
import Countries from './Components/Countries';
import { ApolloProvider } from '@apollo/client'
import one from './Clients/one'
import two from './Clients/two'
function App() {
  return (
    <>
    <h3> Data from Apollo Server - http://localhost:4000 </h3>
      <ApolloProvider client={one}>
          <Employees />
      </ApolloProvider>
      <h3> Data from Apollo Server - https://countries.trevorblades.com/ </h3>
     <ApolloProvider client={two}>
         <Countries />
     </ApolloProvider>
    </>
  );
}

export default App;
