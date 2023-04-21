import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function Homepage() {
    const news: NewsResponse = await fetchNews(categories.join(","));
    return <div>Home</div>;
}

export default Homepage;
