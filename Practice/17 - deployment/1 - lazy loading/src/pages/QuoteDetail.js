import { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Max', text: 'Learning react is fun' },
//     { id: 'q2', author: 'Reyco', text: 'Learning react is fun' },
//     { id: 'q3', author: 'Kezeah', text: 'Learning react is fun' }
// ];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error } =  useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error) {
        return <p className='centered'>{error}</p>
    }

    if(!loadedQuote.text) {
        return <p>No quote found</p>
    }
    //const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    // if(!quote) {
    //     return <p>No quote found</p>
    // }
    
    return (
        <>
            <h1>Quote Detail</h1>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />

            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;

/**
HARDCODED ROUTE
<Route path={`/quotes/${params.quoteId}/comments`}>
    <Comments />
</Route>
 */