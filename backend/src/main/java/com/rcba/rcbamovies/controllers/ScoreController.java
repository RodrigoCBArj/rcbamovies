package com.rcba.rcbamovies.controllers;

import com.rcba.rcbamovies.dto.MovieDTO;
import com.rcba.rcbamovies.dto.ScoreDTO;
import com.rcba.rcbamovies.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore (@RequestBody ScoreDTO dto) {
        MovieDTO movieDTO = service.saveScore(dto);
        return movieDTO;
    }
}
