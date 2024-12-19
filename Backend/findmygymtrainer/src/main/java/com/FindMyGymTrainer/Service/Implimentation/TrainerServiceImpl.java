package com.FindMyGymTrainer.Service.Implimentation;

import com.FindMyGymTrainer.Exception.ResourceNotFound;
import com.FindMyGymTrainer.Dto.TrainerDto;
import com.FindMyGymTrainer.Mapper.TrainerMapper;
import com.FindMyGymTrainer.Service.TrainerService;
import com.FindMyGymTrainer.entity.Trainer;
import com.FindMyGymTrainer.repository.TrainerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {
    @Autowired
    public TrainerRepo trainerRepo;


    @Override
    public List<Trainer> getAllTrainer() {
        List<Trainer> trainer = trainerRepo.findAll();
        return trainer;
    }

    @Override
    public TrainerDto createTrainer(TrainerDto tarinerDto) {
        Trainer trainer = TrainerMapper.maptoTrainer(tarinerDto);
        Trainer saveTrainer = trainerRepo.save(trainer);
        return TrainerMapper.maptoTrainerDto(saveTrainer);
    }

    @Override
    public TrainerDto trainerById(int trainer_id) {
        Trainer trainer=trainerRepo.findById(trainer_id).orElseThrow(()->new ResourceNotFound("Trainer not found"));
        return TrainerMapper.maptoTrainerDto(trainer);
    }

    @Override
    public TrainerDto deleteTrainer(int trainer_id) {
        Trainer trainer=trainerRepo.findById(trainer_id).orElseThrow(()->new ResourceNotFound("Trainer not found"));
        trainerRepo.deleteById(trainer_id);
        return TrainerMapper.maptoTrainerDto(trainer);
    }

    @Override
    public TrainerDto updateTrainer(int trainer_id, Trainer updatedtariner) {
        Trainer currentTrainer=trainerRepo.findById(trainer_id).orElseThrow(()->new ResourceNotFound("Trainer not found"));
        currentTrainer.setFirstName(updatedtariner.getFirstName());
        currentTrainer.setLastName(updatedtariner.getLastName());
        currentTrainer.setEmail(updatedtariner.getEmail());
        currentTrainer.setPassword(updatedtariner.getPassword());
        currentTrainer.setPhoneNumber(updatedtariner.getPhoneNumber());
        currentTrainer.setSpecification(updatedtariner.getSpecification());
        currentTrainer.setCharges(updatedtariner.getCharges());
        Trainer update=trainerRepo.save(currentTrainer);
        System.out.println(update);
        return TrainerMapper.maptoTrainerDto(update);
    }

    @Override
    public Trainer verify(String email, String password) {
        Trainer trainer=trainerRepo.findByEmailAndPassword(email,password);
        System.out.println(trainer);
        return trainer;
    }


}
