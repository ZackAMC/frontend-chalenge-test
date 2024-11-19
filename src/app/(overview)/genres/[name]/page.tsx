export default function Selectgenre({ params }: { params: { name: string } }): JSX.Element {
    return(
        <div>
            <h1>{params.name}</h1>
        </div>
    )
}
