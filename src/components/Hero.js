import React from 'react'
import {
    PlayButton,
    MyListButton,
    HeroContainer,
    HeroDescription,
    HeroTitle,
} from './Hero.styles'

function Hero({ movie }) {
    console.log(movie)

    return (
        <HeroContainer background={movie?.backdrop_path}>
            <HeroTitle>{movie?.name}</HeroTitle>
            <HeroDescription>{movie?.overview}</HeroDescription>
            <PlayButton>Play</PlayButton>
            <MyListButton>My List</MyListButton>
        </HeroContainer>
    )
}

export default Hero;