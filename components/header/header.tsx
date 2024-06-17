import Image from "next/image";
import Link from "next/link";
import React from "react";
import PersiaLogo from "@/public/images/logo-persiaazma.png";
import DatisLogo from "@/public/images/datis-logo.png";
import { CompanyName } from "@/lib/interfaces/general-types";
import NavItem from "./nav-item";

interface Props {
  companyName: CompanyName;
}

export default function Header(props: Props) {
  return (
    <header className="shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
      <div className="navbar">
        <div className="navbar-start w-full lg:w-1/2 justify-between lg:justify-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavItem href="/">صفحه اصلی</NavItem>
              </li>
              <li>
                <NavItem href="/persia">درباره ما</NavItem>
              </li>
              <li>
                <details>
                  <summary>آزمایشگاه ها</summary>
                  <ul className="p-2">
                    <li>
                      <NavItem href="/persia/labs/1">
                        آزمایشگاه جرم و حجم
                      </NavItem>
                    </li>
                    <li>
                      <NavItem href="/persia/labs/1">
                        آزمایشگاه اندازه گیری
                      </NavItem>
                    </li>
                    <li>
                      <NavItem href="/persia/labs/1">آزمایشگاه خون</NavItem>
                    </li>
                    <li>
                      <NavItem href="/persia/labs/1">
                        آزمایشگاه کالیبراسیون
                      </NavItem>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavItem href="/persia/certificates">تاییدیه ها</NavItem>
              </li>
              <li>
                <details>
                  <summary>خدمات</summary>
                  <ul className="p-2">
                    <li>
                      <NavItem href="/persia/courses">دوره ها</NavItem>
                    </li>
                    <li>
                      <NavItem href="/persia/products">محصولات</NavItem>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavItem href="/persia/customer-services">خدمات مشتری</NavItem>
              </li>
              <li>
                <NavItem href="/persia/feedback">نظرات و پیشنهاد ها</NavItem>
              </li>
              {/* <li>
                <NavItem href="/persia/about">درباره ما</NavItem>
              </li> */}
              <li>
                <a href="#footer">تماس با ما</a>
              </li>
            </ul>
          </div>
          {props.companyName === "PERSIA" && (
            <Link href="/persia" className="btn btn-ghost text-xl">
              <Image
                className="object-contain w-40"
                src={PersiaLogo}
                alt="persia azma system logo"
                priority
              />
            </Link>
          )}
          {props.companyName === "DATIS" && (
            <Link href="/datis" className="btn btn-ghost text-xl">
              <Image
                className="object-contain w-28"
                src={DatisLogo}
                alt="datis logo"
                priority
              />
            </Link>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavItem href="/">صفحه اصلی</NavItem>
            </li>
            <li>
              <NavItem href="/persia">درباره ما</NavItem>
            </li>
            <li>
              <details>
                <summary>آزمایشگاه ها</summary>
                <ul className="p-2">
                  <li>
                    <NavItem href="/persia/labs/1">آزمایشگاه جرم و حجم</NavItem>
                  </li>
                  <li>
                    <NavItem href="/persia/labs/1">
                      آزمایشگاه اندازه گیری
                    </NavItem>
                  </li>
                  <li>
                    <NavItem href="/persia/labs/1">آزمایشگاه خون</NavItem>
                  </li>
                  <li>
                    <NavItem href="/persia/labs/1">
                      آزمایشگاه کالیبراسیون
                    </NavItem>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavItem href="/persia/certificates">تاییدیه ها</NavItem>
            </li>
            <li>
              <details>
                <summary>خدمات</summary>
                <ul className="p-2">
                  <li>
                    <NavItem href="/persia/courses">دوره ها</NavItem>
                  </li>
                  <li>
                    <NavItem href="/persia/products">محصولات</NavItem>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavItem href="/persia/customer-services">خدمات مشتری</NavItem>
            </li>
            <li>
              <NavItem href="/persia/feedback">نظرات و پیشنهاد ها</NavItem>
            </li>
            {/* <li>
              <NavItem href="/persia/about">درباره ما</NavItem>
            </li> */}
            <li>
              <a href="#footer">تماس با ما</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
