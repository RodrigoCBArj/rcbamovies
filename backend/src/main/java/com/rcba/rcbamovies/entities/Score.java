package com.rcba.rcbamovies.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="tb_score")
public class Score {

    @EmbeddedId
    private ScorePK id = new ScorePK();
    private Double value;

    public void setMovie(Movie movie) {
        id.setMovie(movie);
    }

    public void setUser(User user) {
        id.setUser(user);
    }
}
