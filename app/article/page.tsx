import { notFound } from "next/navigation";

type Props = {
    searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }
    return (
        <article>
            <Section></Section>
        </article>
    );
}

export default ArticlePage;
