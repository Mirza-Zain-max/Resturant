import  { useAuthContext } from './Pages/Context/Auth';
import './App.scss';
import Screenloader from './Pages/FrontEnd/Screenloader';
import Index from './Pages/Routes/Routes';

function App() {
  const { isAppLoading } = useAuthContext();

  return (
    <>
      {isAppLoading ? <Screenloader /> : <Index />}
    </>
  );
}

export default App;