import React, {Suspense, lazy} from 'react';
import './App.scss';
import { Switch, Route } from 'react-router';
import LayoutWrapper from './components/LayoutWrapper';
import Home from './pages/home';
import Navbar from './components/Navbar';

/*const home = lazy(() => import("./pages/home"));*/
const carmodels = lazy(() => import('./pages/carmodels'));
const allVechicals = lazy(() => import('./pages/all-vechicals'));
const support = lazy(() => import('./pages/support'));
const dealer = lazy(() => import('./pages/dealership'));

function App() {
  return (
    <>
     <LayoutWrapper>
    <div>
      <Suspense fallback={<h1>Please Wait</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/carmodels" component={carmodels} />
        <Route path="/all-vechicals" component={allVechicals} />
        <Route path="/support" component={support} />
        <Route path="/dealership" component={dealer} />
      </Switch>
      </Suspense>
    </div>
    </LayoutWrapper>
    </>
  );
}

export default App;
