import './App.css';
import Routes from './Routes';
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  return (
    <>
      <Routes />
      <QueryClientProvider client={QueryClient}/>
    </>
  );
}

export default App;
