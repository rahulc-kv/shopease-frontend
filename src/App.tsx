import { Provider } from "react-redux";
import store from "redux/store";
import "styles/global.css";
import "./i18n";

import RouteLayout from "routes/RouteLayout";
import { HashRouter as Router } from "react-router-dom";

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
