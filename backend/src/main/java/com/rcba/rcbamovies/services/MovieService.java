package com.rcba.rcbamovies.services;

import com.rcba.rcbamovies.dto.MovieDTO;
import com.rcba.rcbamovies.entities.Movie;
import com.rcba.rcbamovies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> result = repository.findAll(pageable);
        Page<MovieDTO> page = result.map(e -> new MovieDTO(e));
        return page;
    }

    @Transactional(readOnly = true)
    public MovieDTO findById (Long id) {
        Movie result = repository.findById(id).get();
        MovieDTO dto = new MovieDTO(result);
        return dto;
    }
}
