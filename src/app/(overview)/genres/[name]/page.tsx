export default function SelectGenre ({ params }: { params: { name: string } }){
    return(
        <div>
            <h1>{params.name}</h1>
        </div>
    )
}
