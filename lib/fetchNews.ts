import { gql } from "graphql-request"

const fetchNews = async  (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {
    const GET_QUERY = gql`    
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
        
    })
}

export default fetchNews;

