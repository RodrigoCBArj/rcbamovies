package com.rcba.rcbamovies.dto;

import com.rcba.rcbamovies.entities.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MovieDTO {

    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;

    public MovieDTO(Movie movie) {
        id = movie.getId();
        title = movie.getTitle();
        score = movie.getScore();
        count = movie.getCount();
        image = movie.getImage();
    }
}
