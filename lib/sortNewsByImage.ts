export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = news.data.filter((item) => item.image !== null);
    const NewsWithoutImage = news.data.filter((item) => item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...NewsWithoutImage],
    }
    return sortedNewsResponse;
}