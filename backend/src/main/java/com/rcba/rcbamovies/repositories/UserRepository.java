package com.rcba.rcbamovies.repositories;

import com.rcba.rcbamovies.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
