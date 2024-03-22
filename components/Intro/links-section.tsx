import DatisLink from "./datis/datis-link";
import PersiaLink from "./persia/persia-link";

export default function LinksSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-4">
      <PersiaLink />
      <DatisLink />
    </section>
  );
}
