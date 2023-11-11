import React from "react"
import * as t from './Movie.style';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


export default function Movie(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movies/${props.title}`, {
      state : props
    })
  }
  
  
  return (
      <t.container>
        <t.movieContainer onClick={onClickMovieItem}>
          <t.poster src={IMG_BASE_URL + props.poster_path} alt="영화포스터" /> 
          <t.movieInfo>
            <t.title>{props.title}</t.title>
            <t.vote>{props.vote_average}</t.vote>
          </t.movieInfo>
        </t.movieContainer>
        <t.movieDetail>
          {props.title}
          <p>{props.overview}</p>
        </t.movieDetail>
      </t.container>
    )
  }
  
