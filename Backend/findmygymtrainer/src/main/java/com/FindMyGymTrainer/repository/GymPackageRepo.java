package com.FindMyGymTrainer.repository;

import com.FindMyGymTrainer.entity.GymPackage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GymPackageRepo extends JpaRepository<GymPackage,Integer> {
}
