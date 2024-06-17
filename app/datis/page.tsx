import Activities from "@/components/datis/activities/activities";
import Hero from "@/components/datis/hero/hero";

export default function DatisPage() {
  return (
    <div className="container mx-auto px-6 lg:px-10">
      <Hero />
      <Activities />
    </div>
  );
}
