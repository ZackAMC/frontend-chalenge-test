import { Pelis } from "@/lib/definitions";
import styles from '@/app/ui/card.module.css';
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { FavButton } from "./favButton";

export const Card = ({ pelis }: { pelis: Pelis }) =>{

    const {id, title, release_date, vote_average, backdrop_path, overview, poster_path} = pelis
    const vote = vote_average * 10
    const palabras = overview.split(" ")
    const textoReducido = palabras.slice(0, 30).join(" ")

    const pathImage = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"

    return(
    
        <div
            className={styles.card}>

            <Image
                src={`${pathImage}${backdrop_path}`}
                alt={title}
                className={styles.imgHover}
                width={100}
                height={100}
            />

            <div className={styles.img}>
                <div className={styles.ar}></div>
                <Image
                    src={`${pathImage}${poster_path}`}
                    alt={title}
                    width={100}
                    height={100}
                    className={styles.imgCover}
                />
            </div>

            <div className={styles.info}>
                <p><strong>{title}</strong></p>
                <span>{release_date}</span>
                <div className={styles.actions}>
                    
                    <div className={styles.rate}>
                        <span>Rating</span>
                        <div className={styles.grafica}>
                            <CircularProgressbar
                                styles={buildStyles({
                                    pathColor: vote > 70 ? '#4DA14F' : '#FF8800',
                                    trailColor: vote > 70 ? '#4da14e7b' : '#ff880053',
                                    textColor: '#fff',
                                    textSize: '25px'
                                })}
                                strokeWidth={5 }
                                value={vote}
                                text={`${vote.toFixed(0)}%`}
                            />
                        </div>
                    </div>

                    <div className={styles.fav}>
                        <span>Favorites</span>
                        <FavButton ident={id} key={id} />
                    </div>
                </div>
            </div>

            <Link
                href={`/movies/${id}`}
                className={styles.cardHover}>
                <p><strong>{title}</strong></p>
                <p className={styles.sinopsis}>{textoReducido}</p>
                <span className={styles.fecha}>{release_date}</span>
                <div className={styles.actions}>
                    <div className={styles.rate}>
                        <span>Rating</span>
                        <div className={styles.grafica}>
                            <CircularProgressbar
                                styles={buildStyles({
                                    pathColor: vote > 70 ? '#4DA14F' : '#FF8800',
                                    trailColor: vote > 70 ? '#4da14e7b' : '#ff880053',
                                    textColor: '#fff',
                                    textSize: '25px'
                                })}
                                strokeWidth={5 }
                                value={vote}
                                text={`${vote.toFixed(0)}%`}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.fav}>
                        <span>Favorites</span>
                        <FavButton ident={id} key={id} />
                    </div>
                </div>
            </Link>
        </div>
)
} 