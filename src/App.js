import './App.css';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView/HomeView';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MoviesDetailsPage from './views/MovieDetailsPage';
import ErrorView from './views/ErrorView/ErrorView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MoviesDetailsPage />
        </Route>
        <Route>
          <ErrorView />
        </Route>
      </Switch>
    </Container>
  );
}
