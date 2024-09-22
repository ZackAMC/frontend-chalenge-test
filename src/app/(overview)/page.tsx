import { FilaPelis } from "../filaPelis";


export default function Page({ children }: { children: JSX.Element }) {

  const criteria = [
    "Popular",
    "Now Playing",
    "Upcoming",
    "Top Rated"
  ]
  
  return (
      <>
        {
          criteria.map((item, i)=>{
            return(
              <FilaPelis key={i} titleList={item} />
            )
          })
        }
      </>
  );
}