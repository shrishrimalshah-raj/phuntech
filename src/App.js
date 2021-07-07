import { ToastProvider } from "react-toast-notifications";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Subscribe from "./components/subscribe/Subscribe";
import Unsubscribe from "./components/unsubscribe/Unsubscribe";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <ToastProvider>
        <Switch>
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/unsubscribe" component={Unsubscribe} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </ToastProvider>
    </Router>
  );
}

export default App;
