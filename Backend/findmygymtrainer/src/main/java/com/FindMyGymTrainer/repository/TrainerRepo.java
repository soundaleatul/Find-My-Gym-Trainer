package com.FindMyGymTrainer.repository;

import com.FindMyGymTrainer.entity.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TrainerRepo extends JpaRepository<Trainer, Integer> {
    @Query("SELECT t from Trainer t WHERE t.email = :email AND t.password = :password")
    Trainer findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
