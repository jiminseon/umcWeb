import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from './../Component/Movie/Movie';

export default function MovieDetail() {
    const {title} = useParams();
    const {state} = useLocation();


    return (
        <div className='page-container'>
            <div className='movieDetail'>
                <div style={{display: 'flex'}}>
                    <img style={{width: "250px", height: "450px"}}src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지" />
                    <div style={{fontSize: "32px"}}>{title}</div>
                </div>
            </div>
        </div>
    ) 
}
