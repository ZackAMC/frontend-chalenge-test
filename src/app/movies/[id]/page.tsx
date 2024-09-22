
export default function Page({ params }: { params: { id: number } }){
    return(
        <p><br /><br /><br />{params.id}</p>
    )
}
