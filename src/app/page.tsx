import { ExampleNavbarOne } from "./_components/Navbar/NavBar";
import { FooterFour } from "./_components/Footer/Footer";
import Blog from "./blog/page";
import Feature from "./_components/Feature/Feature";
export default function Home() {
  return (
<>
<section>
  <ExampleNavbarOne/>
  <main className="flex flex-col items-center justify-center pt-[5rem]  ">
  <h1 className="text-3xl font-bold pb-[3rem]">Feature Topics</h1>
    <Feature/>
  </main>
  <main className="px-[10rem] pb-[5rem]">
  <Blog/>

  </main>
  <FooterFour/>
</section>
</>   
  );
}
