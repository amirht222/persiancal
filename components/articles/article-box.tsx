import { ConsultationViewModel } from "@/lib/interfaces/consultations/ConsultationViewModel";
import ShowConsultationDescriptionButton from "./show-desc-btn";
import ConsultationDescriptionDialog from "./article-description-dialog";
import { ArticleViewModel } from "@/lib/interfaces/articles/ArticleViewModel";
import ArticleDescriptionDialog from "./article-description-dialog";
import ShowArticleDescriptionButton from "./show-desc-btn";
const apiURL: string = process.env.API_URL!;

export default function ArticleBox({
  title,
  text,
  provider,
  id,
  attachmentUrl,
  articleStatus,
}: ArticleViewModel) {
  return (
    <li className="flex justify-between p-4 rounded-xl items-center bg-secondary">
      <div>
        <h4 className="font-bold text-base">{title}</h4>
        <p className="mt-2">پیوست: {attachmentUrl ? "دارد" : "ندارد"}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        {text && (
          <>
            <ShowArticleDescriptionButton />
            <ArticleDescriptionDialog description={text} />
          </>
        )}
        {attachmentUrl && (
          <a
            className="btn btn-primary text-white"
            download={`${apiURL}/${attachmentUrl}`}
            href={`${apiURL}/${attachmentUrl}`}
          >
            دانلود پیوست
          </a>
        )}
      </div>
    </li>
  );
}
