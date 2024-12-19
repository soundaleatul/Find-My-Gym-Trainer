package com.FindMyGymTrainer.Mapper;
import com.FindMyGymTrainer.Dto.TrainerDto;
import com.FindMyGymTrainer.entity.Trainer;

public class TrainerMapper {
    public static TrainerDto maptoTrainerDto(Trainer trainer){
        return new TrainerDto(
                trainer.getId(),
                trainer.getFirstName(),
                trainer.getLastName(),
                trainer.getEmail(),
                trainer.getSpecification(),
                trainer.getCharges(),
                trainer.getPhoneNumber(),
                trainer.getPassword()
        );
    }
    public static Trainer maptoTrainer(TrainerDto trainerDto){
        return new Trainer(
                trainerDto.getId(),
                trainerDto.getFirstName(),
                trainerDto.getLastName(),
                trainerDto.getEmail(),
                trainerDto.getSpecification(),
                trainerDto.getCharges(),
                trainerDto.getPhoneNumber(),
                trainerDto.getPassword()
        );
    }
}
