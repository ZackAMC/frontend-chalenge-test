'use client';
import { fecthDataMovie } from '@/lib/data';
import { Movie } from '@/lib/definitions';
import { useEffect, useState } from 'react';
import styles from '@/app/movies/[id]/page.module.css';
import Image from 'next/image';
import { CiPlay1 } from 'react-icons/ci';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FavButton } from '@/app/ui/favButton';
import { FilaPelisRelated } from '@/app/filaPelisRelated';

export default function Page({ params }: { params: { id: number } }) {
  const pathImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  const [dataPeli, setDataPeli] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    const fetchPeli = async () => {
      try {
        const results = await fecthDataMovie(params.id);
        setDataPeli(results);
        // console.log(results);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };
    fetchPeli();
  }, []);

  // console.log(dataPeli)

  // Procesamieno de valor Score
  const votos = dataPeli?.vote_average;
  const votosFinal = votos ? votos * 10 : 0;

  // Procesamos el tiempo de la pelicula para obtener el formato correcto
  const minutosTotales = dataPeli ? dataPeli.runtime : 0;
  const horas = Math.floor(minutosTotales / 60);
  const minutos = minutosTotales % 60;
  const resultado = `${horas}H ${minutos}Min`;

  // Procesamos el formato de la fecha de estreno
  const fechaOriginal = dataPeli ? dataPeli.release_date : '';
  const fecha: Date = new Date(fechaOriginal);
  const opciones: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const fechaFormateada: string = fecha.toLocaleDateString('en-US', opciones);

  // Procesamos el id de los generos para la lista de peliculas relacionadas
  const generos = dataPeli?.genres;
  const generosId = generos?.map((item) => item.id);
  const generosProcesados: string = generosId?.join(',')!;

  console.log(generosProcesados);

  return (
    <>
      <section className={styles.mainSection}>
        <Image
          src={`${pathImage}${dataPeli?.backdrop_path}`}
          alt={`${dataPeli?.title}`}
          width={1920}
          height={2200}
          className={styles.imgFondo}
        />
        <main className={styles.container}>
          <div className={styles.cover}>
            <div className={styles.imgCont}>
              <Image
                src={`${pathImage}${dataPeli?.poster_path}`}
                alt={`${dataPeli?.title} cover`}
                width={305}
                height={395}
                className={styles.img}
              />
            </div>
            <div className={styles.video}>
              <a href="#">
                <span>Official Trailer</span>
                <CiPlay1 />
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.encabezado}>
              <h1>{dataPeli?.title}</h1>
              <span className={styles.fechaEstreno}>{fechaFormateada}</span>
              <span className={styles.duracion}>{resultado}</span>
            </div>

            <div className={styles.sinopsis}>
              <h2>Overview:</h2>
              <p>{dataPeli?.overview}</p>
            </div>

            <div className={styles.scoreFav}>
              <div className={styles.score}>
                <CircularProgressbar
                  styles={buildStyles({
                    pathColor: '#4DA14F',
                    trailColor: '#4da14e7b',
                    textColor: '#fff',
                    textSize: '25px',
                  })}
                  strokeWidth={6}
                  value={votosFinal}
                  text={`${votosFinal.toFixed(0)}%`}
                />
                <span className={styles.spanUsersScore}>
                  Users <br /> Score
                </span>
              </div>

              <div className={styles.fav}>
                <FavButton ident={params.id} key={params.id} />
              </div>
            </div>
            <div className={styles.genres}>
              {dataPeli?.genres.map((item) => (
                <span key={item.id}>{item.id}</span>
              ))}
            </div>
          </div>
        </main>
      </section>
      <section className={styles.recommendetSection}>
        <main className={styles.container}>
          <h3>Recommendations</h3>

          {dataPeli ? <FilaPelisRelated genreList={generosProcesados} /> : null}
        </main>
      </section>
    </>
  );
}
