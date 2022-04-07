import React from 'react';
import './App.css';
// import Navbar from './components/Navbar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import {Auth} from './features/Auth/Auth';
import { Parent } from './features/Communication/Parent';
import { AuthContextProvider } from './features/Auth/Auth.context';
import BookNow from './pages/booknow';
import Artists from './pages/artists'


import { AuthGuard } from './components/AuthGuard';
import { MovieList } from './features/Movies/MovieList';
import { MovieDetails } from './features/Movies/MovieDetails';
import { MovieEdit } from './features/Movies/MovieEdit';
import { MovieAdd } from './features/Movies/MovieAdd';



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
      <Route path='/' element={<Home/>}/>
          <Route path='/booknow' element={<BookNow />} />

          <Route path='/artists' element={<Artists />} />

          <Route path="/" element={<Home />}>
            <Route path="" element={<h1 className="text-2xl">Homepage</h1>} />           <Route path="login" element={<Auth />} />
            <Route path="register" element={<Auth />} />
            <Route path="movies" element={<MovieList />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route
              path="movies/:movieId/edit"
              element={
                <AuthGuard>
                  <MovieEdit />
                </AuthGuard>
              }
            />
            <Route
              path="movies/add"
              element={
                <AuthGuard>
                  <MovieAdd />
                </AuthGuard>
              }
            />
            <Route path="comm" element={<Parent />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>

      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;