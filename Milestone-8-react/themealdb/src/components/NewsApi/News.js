import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";


const News = (props) => {
    const {author,content,description,publishedAt,url,urlToImage,title} = props.article;
    console.log(props);

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small><p>{author}</p></small>
                        <Button variant="primary" onClick={()=>window.location=url}> Read More..</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default News;
