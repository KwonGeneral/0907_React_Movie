import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css'

class Home extends React.Component {
    state = {
        isLoading: true,
        movie_list: [],
    }

    getMovieData = async () => {
        const {
            data: {
                data: { movies },
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")

        this.setState({movie_list: movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovieData()
    }

    render() {
        const { isLoading, movie_list } = this.state;

        return (
            <section className="container">
                {
                    isLoading ? (
                        <div className="loader">
                            <span className="loader__text">로딩중...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {
                                movie_list.map(array_data => (
                                    <Movie
                                        key={ array_data.id }
                                        id={ array_data.id }
                                        year={ array_data.year }
                                        title={ array_data.title }
                                        summary={ array_data.summary }
                                        medium_cover_image={ array_data.medium_cover_image }
                                        genres={ array_data.genres }
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </section>

            // <div>
            //     { isLoading ? '로딩중...' : movie_list.map((array_data) => {
            //         // map은 for문처럼 새 객체를 만들고, 배열의 값을 1개씩 읽어오고 출력함.
            //         return (
            //             <Movie
            //                 key={ array_data.id }
            //                 id={ array_data.id }
            //                 year={ array_data.year }
            //                 title={ array_data.title }
            //                 summary={ array_data.summary }
            //                 medium_cover_image={ array_data.medium_cover_image }
            //             />)
            //     }) }
            // </div>
        )
    }
}

export default Home;