import Head from 'next/head';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import {API_KEY, CONTEXT_KEY} from '../keys';
import Response from '../Response';
import {useRouter} from 'next/router';

function Search({results}) {
    console.log(results);
    const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term} - Search Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        {/* Header */}

        <Header/>
        {/* Search Results */}
        <SearchResults results={results}/>
    </div>
  )
}

export default Search
export async function getServerSideProps(context){
    const useDummyData = true;
    const startIndex = context.query.start || "0";
    //get results from server
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then((response) =>response.json());

    //pass results to the client
    return {
        props: {
            results: data
        }
    }

}
