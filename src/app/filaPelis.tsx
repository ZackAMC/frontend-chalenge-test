"use client"

import { fetchDataRows } from "@/lib/data"
import { useEffect, useState } from "react"
import { Pelis } from "@/lib/definitions"
import { Card } from "./ui/card"
import styles from  "@/app/filaPelis.module.css"
import { IBM } from "@/app/ui/fonts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FilaPelis = ({ titleList }: { titleList: string }) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        lazyLoad: true,
        // slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 5000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1660,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    const [ listaPelis, setListaPelis ] = useState<Pelis[]>([])

    useEffect(() => {

        const fetchPelisSep = async ()=>{
            
            try {
                const results = await fetchDataRows(titleList)
                setListaPelis(results)
            } catch (error) {
                console.error("Error al obtener los datos", error);
            }
        }
        fetchPelisSep()
    }, [])

    return(
      <>
        <h2 className={`${styles.titulo} ${IBM.className}`}>{titleList}</h2>
        <div className={`slider-container ${styles.contSliders}`}>
          <Slider {...settings} >
            {
              listaPelis.map(item=>{
                  return(
                    <Card pelis={item} />
                  )
              })
            }
          </Slider>
        </div>
      </>
    )
}