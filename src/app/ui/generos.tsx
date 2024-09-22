"use client"
import { fetchGenres } from "@/lib/data"
import { useActionState, useEffect, useState } from "react"
import { Generos } from "@/lib/definitions";
import { redirect } from "next/navigation";
import Link from "next/link";

export const GenerosSelect = () =>{
    const [ seleccion, setSeleccion ] = useState<Generos[]>([])
    const [ genreSelect, setGenreSelect ] = useState<string>('')

    useEffect(() => {
        const fetchGeneros = async ()=>{
            try {
                const genres = await fetchGenres()
                setSeleccion(genres)
            } catch (error) {
                console.error("Error al obtener los datos", error);
            }
        }
        fetchGeneros()
    }, [])


    return(
        <form>
            <p><strong>Genres</strong></p>
            <div className="contSelect">
                <select onChange={(e)=>{
                    e.target.value == '' ? setGenreSelect('/') : setGenreSelect(`/genres/${e.target.value}`)
                }}>
                    <option value="">____________</option>
                    {
                        seleccion.map(item=>{
                            return(
                                <option key={item.id} value={item.name}>{item.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <Link
                href={genreSelect}
            >Buscar
            </Link>
        </form>
    )
}