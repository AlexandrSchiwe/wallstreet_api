const NewsBlock = (props) => {
    return (<div className="article">
        <img src={props.urlToImage} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>Author:{props.author}</p>
        <p>{props.content}</p>
        <a href={props.url}>Read the full article</a>
    </div>);
}

export default NewsBlock;