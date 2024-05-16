import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({params}) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
    <> 
    {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}

export default Page