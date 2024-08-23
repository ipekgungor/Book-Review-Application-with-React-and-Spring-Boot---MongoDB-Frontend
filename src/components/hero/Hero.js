import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({books}) => {

    const navigate = useNavigate();

    function reviews(bookId)
    {
        navigate(`/Reviews/${bookId}`);
    }

  return (
    <div className ='book-carousel-container'>
      <Carousel>
        {
            books?.map((book) =>{
                return(
                    <Paper key={book.grId}>
                        <div className = 'book-info-container'>
                        <div className="book-info" style={{"--img": `url(${book.backdrops?.[0] || ''})`}}>
                                <div className="book-detail">
                                    <div className="book-poster">
                                        <img src={book.poster} alt="" />
                                    </div>
                                    <div className="book-title">
                                        <h4>{book.title}</h4>
                                    </div>
                                    <div>
                                        <div>
                                            <Button variant="outline-info" onClick={() => reviews(book.grId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero