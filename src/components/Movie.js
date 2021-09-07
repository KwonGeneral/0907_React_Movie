import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'
import {Link} from "react-router-dom";

function Movie({ year, title, summary, medium_cover_image, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: "/movie-detail",
                    state: { year, title, summary, medium_cover_image, genres }
                }}
            >

            <img src={medium_cover_image} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__year">{ year }</h5>
                <ul className="movie__genres">
                    {
                        genres.map((genres_data, index) => {
                            return <li className="movie__genres_li" key={ index }>{ genres_data }</li>
                        })
                    }
                </ul>
                <p className="movie__summary">{ summary.slice(0, 180) }...</p>
            </div>

            </Link>
        </div>

    )
}

// 구조체 생성 => 리액트에는 proptypes로 구조체를 만드는 것으로 보임.
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

