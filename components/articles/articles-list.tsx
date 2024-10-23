import { getArticles } from "@/lib/actions/articles/articlesActions";
import { ArticlesSearchParams } from "@/lib/interfaces/articles/ArticlesSearchParams";
import { ArticleViewModel } from "@/lib/interfaces/articles/ArticleViewModel";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { Provider } from "@/lib/interfaces/general-types";
import ArticleBox from "./article-box";

interface Props {
  searchParams: ArticlesSearchParams;
  provider: Provider;
}

export default async function ArticlesList({ searchParams, provider }: Props) {
  const {
    count,
    message,
    ok,
    res: articles,
    status,
  }: FetchResposne<ArticleViewModel[]> = await getArticles({
    ...searchParams,
    articleStatus: 1,
    provider: provider,
  });

  return (
    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      {articles &&
        articles.map((article) => <ArticleBox {...article} key={article.id} />)}
    </ul>
  );
}
