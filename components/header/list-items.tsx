import { Suspense } from "react";
import NavItem from "./nav-item";
import LabMenu from "./lab-menu";
import CustomerServiceBtn from "./customer-service-btn";
import CustomerLoginModal from "./CustomerLoginModal";
import { Provider } from "@/lib/interfaces/general-types";
import Spinner from "../loading";

export default function ListItems({ provider }: { provider: Provider }) {
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
          <CustomerServiceBtn />
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
      <CustomerLoginModal />
    </>
  );
}
