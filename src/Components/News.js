import { useState, useEffect } from 'react';
import NewsBlock from './NewsBlock';

const News = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9122f8eb3f2840a7a5a86feaa0571e3a")
            .then(res => res.json())
            .then(json => {
                // setNews(json);
                setArticles(json.articles);
            })
    }, [])

    console.log(articles);

    return (<article className="newsBlock">
        {articles.map((elt, i) =>
            <NewsBlock
                key={i}
                title={elt.title}
                author={elt.author}
                urlToImage={elt.urlToImage}
                url={elt.url}
                description={elt.description}
            />
        )}
    </article>);
}

export default News;