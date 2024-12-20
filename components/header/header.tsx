import { Provider } from "@/lib/interfaces/general-types";
import DatisLogo from "@/public/images/datis-logo.png";
import PersiaLogo from "@/public/images/logo-persiaazma.png";
import Image from "next/image";
import Link from "next/link";
import ListItems from "./list-items";

interface Props {
  provider: Provider;
}

export default function Header({ provider }: Props) {
  return (
    <header className="bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.3)] z-50 sticky top-0">
      <div className="navbar justify-between">
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
              <ListItems provider={provider} />
            </ul>
          </div>
          {provider === "persia" && (
            <Link href="/persia" className="btn btn-ghost text-xl">
              <Image
                unoptimized
                className="object-contain w-40"
                src={PersiaLogo}
                alt="persia azma system logo"
                priority
              />
            </Link>
          )}
          {provider === "datis" && (
            <Link href="/datis" className="btn btn-ghost text-xl">
              <Image
                unoptimized
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
            <ListItems provider={provider} />
          </ul>
        </div>
      </div>
    </header>
  );
}
