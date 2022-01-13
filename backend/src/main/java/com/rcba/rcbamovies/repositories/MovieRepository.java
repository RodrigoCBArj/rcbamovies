package com.rcba.rcbamovies.repositories;

import com.rcba.rcbamovies.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
