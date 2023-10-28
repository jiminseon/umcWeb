import React from "react"
import * as t from './Movie.style';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


export default function Movie({ title, poster_path, vote_average, overview}) {
    return (
      <t.container>
        <t.movieContainer>
          <t.poster src={IMG_BASE_URL + poster_path} alt="영화포스터" /> 
          <t.movieInfo>
            <t.title>{title}</t.title>
            <t.vote>{vote_average}</t.vote>
          </t.movieInfo>
        </t.movieContainer>
        <t.movieDetail>
          {title}
          <p>{overview}</p>
        </t.movieDetail>
      </t.container>
    )
  }
  
