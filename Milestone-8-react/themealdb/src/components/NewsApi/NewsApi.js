import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import News from "./News";

const NewsApi = () => {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        fetch("./newsApi.JSON")
            .then(res => res.json())
            .then(data =>{
                console.log(data.articles);
                setNews(data.articles);
            })
    },[])

    return (
        <div>
            <Container>
                {
                    news.length === 0 ?
                        <div className="align-content-center align-items-center"><Spinner animation="grow" variant="primary"/>
                            <Spinner animation="grow" variant="secondary"/>
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="info" /></div>
                        :
                        <Row xs={1} md={3} className="g-4 mt-2">
                            {
                                news.map(news=><News key={news.url} article={news}></News>)
                            }
                        </Row>
                }

            </Container>
        </div>
    );
};

export default NewsApi;
