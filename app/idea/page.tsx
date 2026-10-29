import { GalleryImage } from "@/components/gallery-image";
import { SiteHeader } from "@/components/site-header";

const ideaImages = [
  "/projects/ideas/idea1.png",
  "/projects/ideas/idea2.png",
  "/projects/ideas/idea3.png",
  "/projects/ideas/idea4.png",
  "/projects/ideas/idea4.png",
  "/projects/ideas/idea4.png",
  "/projects/ideas/idea4.png",
  "/projects/ideas/idea4.png",
]

export default function Idea() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto grid grid-cols-1 px-16 py-16 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <GalleryImage images={ideaImages}/>
        </div>
      </main>
    </>
  );
}
