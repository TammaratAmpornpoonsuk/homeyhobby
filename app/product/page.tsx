import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";

export default function Product() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-6xl mt-8">
          <h1 className="text-4xl text-primary font-bold">Our Products</h1>
          <div className="flex items-center justify-between">
            <p className="text-foreground text-sm">Select your choice and order from instagram</p>
            <div className="flex gap-4">
              <a 
                href="#All"
                className="rounded-full border px-3 text-center"
              >
                All
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard
              name="Rainy Reset Kit"
              category="Kit"
              price={229}
              image="/projects/ideas/idea1.png"
              instagramUrl="https://www.instagram.com/homeyhobby.official/"
              isNew
            />
            <ProductCard
              name="Little Beginnings"
              category="kit"
              price={229}
              image="/projects/ideas/idea1.png"
              instagramUrl="https://www.instagram.com/homeyhobby.official/"
              isNew
            />
            <ProductCard
              name="Product 1"
              category="Kit"
              price={229}
              image="/projects/ideas/idea1.png"
              instagramUrl="https://www.instagram.com/homeyhobby.official/"
            />
            <ProductCard
              name="Product 2"
              category="Kit"
              price={229}
              image="/projects/ideas/idea1.png"
              instagramUrl="https://www.instagram.com/homeyhobby.official/"
            />
          </div>
        </div>
      </main>
    </>
  );
}
