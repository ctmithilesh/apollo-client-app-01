import './App.css';

import Countries from './Components/Countries';
import { ApolloProvider } from '@apollo/client'
import two from './Clients/two'
import EmployeePage from './Containers/EmployeePage';
import CountriesPage from './Containers/CountriesPage';
function App() {
  return (
    <>
      <EmployeePage />
      <CountriesPage />
    </>
  );
}

export default App;
