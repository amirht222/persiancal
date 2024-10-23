import { Provider } from "@/lib/interfaces/general-types";
import { Suspense } from "react";
import Spinner from "../loading";
import AuthorizationCheck from "./AuthorizationCheck";
import CustomerLoginModal from "./CustomerLoginModal";
import LabMenu from "./lab-menu";
import NavItem from "./nav-item";

export default async function ListItems({ provider }: { provider: Provider }) {
  return (
    <>
      <li>
        <NavItem href="/">صفحه اصلی</NavItem>
      </li>
      <li>
        <NavItem href={`/${provider}`}>درباره ما</NavItem>
      </li>
      {provider === "persia" && (
        <li>
          <Suspense
            fallback={
              // <span className="loading loading-spinner loading-md"></span>
              <Spinner />
            }
          >
            <LabMenu />
          </Suspense>
        </li>
      )}
      <li>
        <NavItem href={`/${provider}/certificates`}>تاییدیه ها</NavItem>
      </li>
      <li>
        <details>
          <summary>خدمات</summary>
          <ul className="p-2">
            <li>
              <NavItem href={`/${provider}/courses`}>دوره ها</NavItem>
            </li>
            <li>
              <NavItem href={`/${provider}/products`}>محصولات</NavItem>
            </li>
            <li>
              <NavItem href={`/${provider}/consultations`}>مشاوره</NavItem>
            </li>
          </ul>
        </details>
      </li>
      {provider === "persia" && (
        <li>
          <Suspense fallback={<p>checking...</p>}>
            <AuthorizationCheck provider={provider} />
          </Suspense>
        </li>
      )}
      <li>
        <NavItem href={`/${provider}/articles`}>مقالات</NavItem>
      </li>
      <li>
        <NavItem href={`/${provider}/feedback`}>نظرات و پیشنهاد ها</NavItem>
      </li>
      <li>
        <a href="#footer">تماس با ما</a>
      </li>
    </>
  );
}
