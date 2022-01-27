// Generated by https://quicktype.io

export interface Movie {
    id:             number;
    title:          string;
    posterUrl:      string;
    backdropUrl:    string;
    rating:         number;
    overview:       string;
    tagline:        string;
    budget:         number;
    revenue:        number;
    imdbUrl:        string;
    tmdbUrl:        string;
    releasedate:    string;
    runTime:        number;
    price:          number;
    favoritesCount: number;
    casts:          Cast[];
    genres:         Genre[];
    reviews:        any[];
    trailers:       Trailer[];
}
