import { Provider } from "react-redux";
import "styles/global.css";
import "./i18n";

import RouteLayout from "routes/RouteLayout";
import { HashRouter as Router } from "react-router-dom";
import store from "store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <RouteLayout />
      </Router>
    </Provider>
  );
}

export default App;
