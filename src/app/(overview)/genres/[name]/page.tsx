export default function Selectgenre ({ params }: { params: { name: string } }){
    return(
        <div>
            <h1>{params.name}</h1>
        </div>
    )
}
