import DatisLink from "./datis/datis-link";
import PersiaLink from "./persia/persia-link";

export default function LinksSection() {
  return (
    <section className="flex flex-col sm:flex-row gap-4 p-6 lg:pr-0">
      <PersiaLink />
      <DatisLink />
    </section>
  );
}
