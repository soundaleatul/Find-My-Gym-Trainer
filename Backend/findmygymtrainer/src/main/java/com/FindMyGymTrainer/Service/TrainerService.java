package com.FindMyGymTrainer.Service;


import com.FindMyGymTrainer.Dto.TrainerDto;
import com.FindMyGymTrainer.entity.Trainer;

import java.util.List;

public interface TrainerService {
    List<Trainer> getAllTrainer();
    TrainerDto createTrainer(TrainerDto trainerDto);
    TrainerDto trainerById(int trainer_id);
    TrainerDto deleteTrainer(int trainer_id);

    TrainerDto updateTrainer(int trainer_id,Trainer trainerDto);
    Trainer verify(String email, String password);

}
