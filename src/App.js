import { ToastProvider } from "react-toast-notifications";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Subscribe from "./components/subscribe/Subscribe";
import Unsubscribe from "./components/unsubscribe/Unsubscribe";

function App() {
  return (
    <Router>
      <ToastProvider>
        <Switch>
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/unsubscribe" component={Unsubscribe} />
          {/* <Redirect to="/subscribe" /> */}
        </Switch>
      </ToastProvider>
    </Router>
  );
}

export default App;
