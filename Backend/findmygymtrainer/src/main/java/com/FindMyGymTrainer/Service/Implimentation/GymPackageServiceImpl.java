package com.FindMyGymTrainer.Service.Implimentation;

import com.FindMyGymTrainer.Dto.GymPackageDto;
import com.FindMyGymTrainer.Exception.ResourceNotFound;
import com.FindMyGymTrainer.Mapper.GymPackageMapper;
import com.FindMyGymTrainer.Service.GymPackageService;
import com.FindMyGymTrainer.entity.GymPackage;
import com.FindMyGymTrainer.repository.GymPackageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymPackageServiceImpl implements GymPackageService {
    @Autowired
    public GymPackageRepo packageRepo;
    @Override
    public GymPackageDto createPackage(GymPackageDto packageDto) {
        GymPackage gymPackage = GymPackageMapper.maptoGymPackage(packageDto);
        GymPackage savePackage = packageRepo.save(gymPackage);
        return GymPackageMapper.maptoGymPackageDto(savePackage);
    }

    @Override
    public List<GymPackage> getAllPackage() {
        List<GymPackage> gymPackage = packageRepo.findAll();
        return gymPackage;
    }

    @Override
    public GymPackageDto packageById(int package_id) {
        GymPackage gymPackage = packageRepo.findById(package_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        return GymPackageMapper.maptoGymPackageDto(gymPackage);
    }

    @Override
    public GymPackageDto deletePackage(int package_id) {
        GymPackage gymPackage = packageRepo.findById(package_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        packageRepo.deleteById(package_id);
        return GymPackageMapper.maptoGymPackageDto(gymPackage);
    }

    @Override
    public GymPackageDto updatePackage(int package_id, GymPackage gymPackage) {
        GymPackage existingPackage = packageRepo.findById(package_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        existingPackage.setFees(gymPackage.getFees());
        existingPackage.setDescription(gymPackage.getDescription());
        GymPackage Updated = packageRepo.save(existingPackage);
        return GymPackageMapper.maptoGymPackageDto(Updated);
    }
}
