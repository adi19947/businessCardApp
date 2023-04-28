
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import Layout from './layout/Layout';

import Router from './routs/Router';


import ThemeProvider from './providers/ThemeProvider';
import SnackbarProvider from './providers/SnackbarProvider';
import UserProvider from './users/providers/UserProvider';
import { CardsProvider } from './providers/CardsProvider';
import useAxios from './hooks/useAxios';





function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>

            <UserProvider>
              <CardsProvider>
                <Layout>
                  <Router />
                </Layout>
              </CardsProvider>
            </UserProvider>

          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>


    </div>
  );
}
///
export default App;
