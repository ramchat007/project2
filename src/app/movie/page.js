import styles from "@/app/styles/common.module.css"
import MovieCard from "../components/MovieCard";

const Movie = async () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTZjYTQ5MGNlNzZjODZlODYyNjE2NjY2MWExZDcyYyIsInN1YiI6IjYwZjAyMGQzODdlNjNlMDA0NjAwMGUxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmF6PcGmGFuQLKjiFJlrWMVKc1ynMBqO-QxJAxZJo_I'
        }
    };


    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.results;
    console.log(main_data[0].backdrop_path);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movie Page</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie