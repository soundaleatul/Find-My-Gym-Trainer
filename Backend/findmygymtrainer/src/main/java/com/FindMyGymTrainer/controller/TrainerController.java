package com.FindMyGymTrainer.controller;

import com.FindMyGymTrainer.Dto.TrainerDto;
import com.FindMyGymTrainer.Service.TrainerService;
import com.FindMyGymTrainer.entity.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class TrainerController {
    @Autowired
    private TrainerService trainerService;

    @GetMapping("trainers")
    public List<Trainer> getAllTrainers(){
        List<Trainer> trainer = trainerService.getAllTrainer();
        return trainer;
    }
    @PostMapping("trainer/add")
    public TrainerDto addTrainer(@RequestBody TrainerDto trainerDto){
        TrainerDto addTrainer = trainerService.createTrainer(trainerDto);
        return addTrainer;
    }
    @GetMapping("trainer/{trainer_id}")
    public TrainerDto trainerById(@PathVariable("trainer_id") int trainer_id){
        TrainerDto trainer=trainerService.trainerById(trainer_id);
        return trainer;
    }

    @PutMapping("trainer/update/{trainer_id}")
    public TrainerDto updateTrainer(@PathVariable("trainer_id") int trainer_id,@RequestBody Trainer updatetrainer){
        TrainerDto trainer=trainerService.updateTrainer(trainer_id,updatetrainer);
        return trainer;
    }

    @DeleteMapping("trainer/delete/{trainer_id}")
    public TrainerDto deleteTrainer(@PathVariable("trainer_id") int trainer_id){
        TrainerDto trainer=trainerService.deleteTrainer(trainer_id);
        return trainer;
    }

    @GetMapping("trainer/verify/{email}/{password}")
    public Trainer verifyTrainer(@PathVariable("email") String email, @PathVariable("password") String password){
        Trainer trainer=trainerService.verify(email,password);
        System.out.println(trainer);
        return trainer;
    }
}
