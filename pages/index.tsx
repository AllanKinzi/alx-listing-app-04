import { Button } from "@/components/common/Button";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <section>
        <p>Find your favorite place here!</p>
        <p>The best prices for over 2 million properties worldwide.</p>
      </section>
      <section>
        Filter Section
      </section>

      <section>
        Listing Section
      </section>
      <Button variant={"default"} className="bg-c-primary text-white">
            Get Started
          </Button>
    </>
  );
}
