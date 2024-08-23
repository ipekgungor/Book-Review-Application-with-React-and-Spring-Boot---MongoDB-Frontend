import { useEffect, useRef, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';

const Reviews = () => {
    const [book, setBook] = useState(null);
    const [allReviews, setAllReviews] = useState([]);
    const revText = useRef();
    let { bookId } = useParams();

    useEffect(() => {
        if (bookId) {
            fetchBookData(bookId);
            fetchAllReviews(bookId);
        }
    }, [bookId]);

    const fetchBookData = async (bookId) => {
        try {
            const response = await api.get(`/api/v1/books/${bookId}`);
            setBook(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchAllReviews = async (bookId) => {
        try {
            const response = await api.get(`/api/v1/reviews/${bookId}`);
            setAllReviews(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, grId: bookId });
            rev.value = "";
            setAllReviews([...allReviews, response.data]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img
                        src={book?.poster || ''}
                        alt="Book Poster"
                        style={{ width: '200px', height: '300px', border: '1px solid', borderRadius: '10px' }}
                    />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelTxt="Write a Review..." />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    {Array.isArray(allReviews) && allReviews.map((r, index) => (
                        <React.Fragment key={index}>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
