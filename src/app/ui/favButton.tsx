import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FavButtonProps } from "@/lib/definitions";
import styles from "@/app/ui/favButton.module.css"

export const FavButton: React.FC<FavButtonProps> = ({ ident }) => {

    const [ isFav, setIsFav ] = useState(false)

    const handleClick = ()=>{
        console.log(ident)
    }

    return(
        <button className={styles.button} onClick={handleClick}><FaHeart /></button>
    )
}