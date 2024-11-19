'use client';

import { useState, useEffect } from 'react';
import { fetchDest } from '@/lib/data';
import { BannerData } from '@/lib/definitions';
import Image from 'next/image';
import styles from '@/app/ui/banner.module.css';
import { FaHeart } from 'react-icons/fa';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IBM } from '@/app/ui/fonts';
import { FavButton } from './favButton';

export const Banner = () => {
  const [dataFetch, setDataFetch] = useState<BannerData | null>(null);
  const pathImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await fetchDest();
        setDataFetch(results);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };
    getData();
  }, []);

  return (
    <section className={styles.banner}>
      {dataFetch ? (
        <div className={styles.container}>
          <div className={styles.info}>
            <h2 className={IBM.className}>{dataFetch.title}</h2>
            <p className={IBM.className}>{dataFetch.overview}</p>
          </div>
          <div className={styles.actions}>
            <div className={styles.favContainer}>
              <FavButton ident={dataFetch.id} key={dataFetch.id} />
            </div>

            <div className={styles.userScore}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: '#4DA14F',
                  trailColor: '#4da14e7b',
                  textColor: '#fff',
                  textSize: '25px',
                })}
                strokeWidth={6}
                value={dataFetch.vote_average * 10}
                text={`${(dataFetch.vote_average * 10).toFixed(0)}%`}
              />
            </div>
          </div>

          <Image
            src={`${pathImage}${dataFetch.backdrop_path}`}
            alt={dataFetch.title}
            width={500}
            height={300}
            className={styles.imgFondo}
          />
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </section>
  );
};
