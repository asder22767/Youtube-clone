import { Cards } from "./Cards";
import { SmallCard } from "./SmallCard";

export function PostsHandler (posts) {

    const postsArray = posts.map((item) => {
        return {
            title: item.name,
            publishingDate: item.createdAt,
            // categories: item.Categories,
            // movieAbout: item.summary,
            // ytid: item.ytid,
            imageUrl: item.avatar,
            // trailerUrl: `https://www.youtube.com/watch?v=${item.ytid}`,
            // imdbRating: item.imdb_rating
        }
    });
};