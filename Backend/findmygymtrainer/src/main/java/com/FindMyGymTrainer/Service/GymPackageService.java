package com.FindMyGymTrainer.Service;

import com.FindMyGymTrainer.Dto.GymPackageDto;
import com.FindMyGymTrainer.entity.GymPackage;

import java.util.List;

public interface GymPackageService {
    GymPackageDto createPackage(GymPackageDto packageDto);
    List<GymPackage> getAllPackage();
    GymPackageDto packageById(int package_id);
    GymPackageDto deletePackage(int package_id);
    GymPackageDto updatePackage(int package_id,GymPackage gymPackage);
}
