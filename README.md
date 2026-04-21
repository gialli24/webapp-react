# Setup Web App React

repo: **webapp-react**

## Milestone 0

Ragionare e preparare uno schemino per ompostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props.

### Packages
- react-router-dom (To manage routes)

### Api Calls
Made to localhost server made using express

- fetch

### Pages

- `/movies` MoviesPage (That shows movies list)
- `/movies/:movieId` MovieDetails (That shows movie details getting id as parameter from Url)

### Layouts
- Default Layout
    - AppHeader
    - Outlet
    - AppFooter

### Components
- AppHeader
- AppFooter
- MoviesList
- MovieCard

## Milestone 1

- Mettiamo su un nuovo progetto React aiutandoci con Vite
- Ripuliamo come sempre l’app da file e codice di esempio non necessari
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

## Milestone 2

- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.

- Creiamo 2 pagine:
    - La home, in cui mostreremo la lista dei film
    - La pagina di dettaglio di un singolo film


## Milestone 3

- Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri


## Milestone 4

- In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni