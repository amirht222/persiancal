import { Suspense } from "react";
import NavItem from "./nav-item";
import LabMenu from "./lab-menu";

export default function ListItems({ companyName }: { companyName: string }) {
  return (
    <>
      <li>
        <NavItem href="/">صفحه اصلی</NavItem>
      </li>
      <li>
        <NavItem href={`/${companyName}`}>درباره ما</NavItem>
      </li>
      {companyName === "persia" && (
        <li>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-md"></span>
            }
          >
            <LabMenu />
          </Suspense>
        </li>
      )}
      <li>
        <NavItem href={`/${companyName}/certificates`}>تاییدیه ها</NavItem>
      </li>
      <li>
        <details>
          <summary>خدمات</summary>
          <ul className="p-2">
            <li>
              <NavItem href={`/${companyName}/courses`}>دوره ها</NavItem>
            </li>
            <li>
              <NavItem href={`/${companyName}/products`}>محصولات</NavItem>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavItem href={`/${companyName}/customer-services`}>
          خدمات مشتری
        </NavItem>
      </li>
      <li>
        <NavItem href={`/${companyName}/feedback`}>نظرات و پیشنهاد ها</NavItem>
      </li>
      <li>
        <a href="#footer">تماس با ما</a>
      </li>
    </>
  );
}
