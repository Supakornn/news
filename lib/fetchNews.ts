import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async  (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {
    const query = gql`    
    query myQuery($access_key: String!, $categories: String!, $keywords: String) {
        myQuery(access_key: $access_key, categories: $categories, keywords: $keywords, sort: "published_desc") {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }`;
    
    const res = await fetch(`https://bhola.stepzen.net/api/hissing-sparrow/__graphql`, {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            }
        })
    })

    console.log("Loading Data", category, keywords);

    const newsResponse = await res.json()    

    const news = sortNewsByImage(newsResponse.data.myQuery);

    return news
}

export default fetchNews;

