package com.FindMyGymTrainer.controller;

import com.FindMyGymTrainer.Dto.GymPackageDto;
import com.FindMyGymTrainer.Service.Implimentation.GymPackageServiceImpl;
import com.FindMyGymTrainer.entity.GymPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class GymPackageController {
    @Autowired
    public GymPackageServiceImpl packageService;
    @GetMapping("packages")
    public List<GymPackage> getAllPackages(){
        List<GymPackage> gymPackage = packageService.getAllPackage();
        return gymPackage;
    }
    @PostMapping("package/add")
    public GymPackageDto addPackage(@RequestBody GymPackageDto gymPackage){
        GymPackageDto addPackage = packageService.createPackage(gymPackage);
        return addPackage;
    }
    @GetMapping("package/{package_id}")
    public GymPackageDto getPackageById(@PathVariable("package_id") int package_id){
        GymPackageDto gymPackage = packageService.packageById(package_id);
        return gymPackage;
    }
    @DeleteMapping("package/delete/{package_id}")
    public  GymPackageDto deletePackageById(@PathVariable("package_id") int package_id){
        GymPackageDto gymPackage = packageService.deletePackage(package_id);
        return gymPackage;
    }
    @PutMapping("package/update/{package_id}")
    public GymPackageDto updatePackage(@PathVariable("package_id") int package_id,@RequestBody GymPackage updatePackage){
        GymPackageDto gymPackage = packageService.updatePackage(package_id,updatePackage);
        return gymPackage;
    }
}
