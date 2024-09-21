import { BannerData } from "./definitions"

export async function fetchDest(){
    try{

        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
            method: 'GET',
            headers: new Headers({
                "accept": 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME"
            })
        })

        const data = await response.json()
        const { results } = data
        const dataPrimero = results[0]
        return dataPrimero
    }
    catch(error){
        console.error('Error en el Fetch')
    }
}

