import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Header from './components/header';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Header/>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Home} />

    </Switch>

    <Footer />

    </BrowserRouter>
  );
}

export default App;
