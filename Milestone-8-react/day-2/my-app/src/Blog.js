import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css"
const Blog=(props)=>{

    const h1Style={
        fontSize:"50px",
        color:"green",
    }

    return (
        <div>

            <article className="blog">
                <h1 style={h1Style}>{props.header}</h1>
                <h1>{props.author}</h1>
                <p>{props.body}</p>
                <button className="btn btn-danger">Read More...</button>
            </article>
        </div>
    );
}


export default Blog;