import styles from "@/app/styles/common.module.css"
import Image from "next/image";
async function Page({ params }) {
    const id = params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c96ca490ce76c86e8626166661a1d72c`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTZjYTQ5MGNlNzZjODZlODYyNjE2NjY2MWExZDcyYyIsInN1YiI6IjYwZjAyMGQzODdlNjNlMDA0NjAwMGUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmF6PcGmGFuQLKjiFJlrWMVKc1ynMBqO-QxJAxZJo_I'
        }
    };


    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data);
    let genere_data = data.genres;


    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \ {genere_data.map((curElem, index) => {
                return <span key={curElem.id}>{(index ? ', ' : '') + curElem.name}</span>
            })}</h2>

            <div className={styles.card_section}>
                <div>
                    <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{data.title}</h1>
                    <h2>{data.tagline}</h2>
                    <p>{data.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Page