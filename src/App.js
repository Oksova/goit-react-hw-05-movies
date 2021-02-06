import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView/HomeView';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MoviesDetailsPage from './views/MovieDetailsPage';
import ErrorView from './views/ErrorView/ErrorView';
import Loader from './views/Loader/Loader';

// const HomeView = lazy(() =>
//   import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
// );

// const MoviesPage = lazy(() =>
//   import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
// );

// const MoviesDetailsPage = lazy(() =>
//   import(
//     './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
//   ),
// );

// const ErrorView = lazy(() =>
//   import('./views/ErrorView/ErrorView' /* webpackChunkName: "error-view" */),
// );

// const Loader = lazy(() =>
//   import('./views/Loader/Loader' /* webpackChunkName: "loader" */),
// );

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Container>
  );
}
