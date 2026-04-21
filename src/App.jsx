import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import MoviesPage from "./pages/MoviesPage"
import MovieDetails from "./pages/MovieDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
