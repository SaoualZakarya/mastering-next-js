import { getWikiResults } from "@/lib/getWikiResult"
import Item from "./components/Item";

type Props = {
    params:{
        searchTerm:string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
      return {
          title: `${displayTerm} Not Found`
      }
  }

  return {
      title: displayTerm,
      description: `Search results for ${displayTerm}`
  }
}

export default async function searchResults  ({params:{searchTerm}}:Props)  {

  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

  const data = await wikiData ;

  const displayTerm = searchTerm.replaceAll('%20', ' ')

  const results : Result[] | undefined = data?.query?.pages
  
  const content = (
    <main className="bg-slate-200 text-black mx-auto max-w-lg py-1 min-h-screen">
        {results
            ? Object.values(results).map((result,i) => {
                return <Item key={i} result={result} />
            })
            : <h2 className="p-2 text-xl text-center">  <span className="font-bold"> {"'"+ displayTerm + "'"} </span>  Not found</h2>
        }
    </main>
  )

  return content ;
}
