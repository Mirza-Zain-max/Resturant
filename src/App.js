import { useAuthContext } from 'Components/Pages/Context/Auth';
import './App.scss';
import Screenloader from 'Components/Pages/FrontEnd/Screenloader';
import Index from './Components/Pages/FrontEnd/Routes/Routes';


function App() {

  const { isAppLoading } = useAuthContext()

  return (
    <>
      {isAppLoading
        ? <Screenloader />
        : <Index />
      }
    </>
  );
}

export default App;
