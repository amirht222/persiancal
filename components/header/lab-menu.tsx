import { getLabs } from "@/lib/actions/labs/labsActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { LabViewModel } from "@/lib/interfaces/labs/LabViewModel";
import React from "react";
import NavItem from "./nav-item";

export default async function LabMenu() {
  const {
    count,
    message,
    ok,
    res: labs,
    status,
  }: FetchResposne<LabViewModel[]> = await getLabs();

  return (
    <details>
      <summary>آزمایشگاه ها</summary>
      <ul className="p-2">
        {labs &&
          labs.map((lab) => (
            <li key={lab.id}>
              <NavItem href={`/persia/labs/${lab.id}`}>{lab.name}</NavItem>
            </li>
          ))}
      </ul>
    </details>
  );
}
