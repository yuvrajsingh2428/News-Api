import { getImageUrl } from "../utils/helper.js";

class NewsApiTransform {
    static transform(news){
        return {
            id: news.id,
            heading:news.title,
            news:news.content,
            image: getImageUrl(news.image),
            created_at: news.created_at,
            reporter:{
                id:news?.user.id,
                name:news?.user.name,
                profile:news?.user?.profile != null ?getImageUrl(news?.user?.profile):"https://thumbs.dreamstime.com/b/man-news-anchor-isolated-vector-illustration-flat-style-man-news-anchor-isolated-vector-illustration-flat-style-you-can-use-187320148.jpg",
            }
        }
    }
}

export default NewsApiTransform