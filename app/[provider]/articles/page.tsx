import ArticlesList from "@/components/articles/articles-list";
import ConsultationsList from "@/components/consultations/consultations-list";
import { ArticlesSearchParams } from "@/lib/interfaces/articles/ArticlesSearchParams";
import { ConsultationsSearchParams } from "@/lib/interfaces/consultations/ConsultationsSearchParams";
import { Provider } from "@/lib/interfaces/general-types";

interface Props {
  searchParams: ArticlesSearchParams;
  params: { provider: Provider };
}

export default function ArticlesPage({
  searchParams,
  params: { provider },
}: Props) {
  return (
    <div className="container mx-auto px-16">
      <h2 className="font-bold">مقالات</h2>
      <ArticlesList provider={provider} searchParams={searchParams} />
    </div>
  );
}
