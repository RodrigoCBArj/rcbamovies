package com.rcba.rcbamovies.repositories;

import com.rcba.rcbamovies.entities.Score;
import com.rcba.rcbamovies.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
