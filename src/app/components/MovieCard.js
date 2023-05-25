import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";


// {
//     adult: false,
//     backdrop_path: '/9zXPnbVpaDfTniLBuc5vgXGfzAP.jpg',
//     genre_ids: [ 28, 53, 80 ],
//     id: 818397,
//     original_language: 'en',
//     original_title: 'Memory',
//     overview: "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",      
//     popularity: 111.323,
//     poster_path: '/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg',
//     release_date: '2022-04-28',
//     title: 'Memory',
//     video: false,
//     vote_average: 7,
//     vote_count: 1201
//   }

const MovieCard = (curElem) => {
    const { backdrop_path, title, overview, id } = curElem
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} width={400} height={200} alt={title} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>{`${overview.substring(0, 75)}...`}</p>
                    <Link href={`/movie/${id}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard