import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import MoviesPage from "./pages/MoviesPage"
import MovieDetails from "./pages/MovieDetails"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter >
    </>
  )
}

export default App
