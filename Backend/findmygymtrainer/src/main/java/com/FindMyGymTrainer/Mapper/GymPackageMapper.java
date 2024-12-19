package com.FindMyGymTrainer.Mapper;

import com.FindMyGymTrainer.Dto.GymPackageDto;
import com.FindMyGymTrainer.entity.GymPackage;

public class GymPackageMapper {
    public static GymPackageDto maptoGymPackageDto(GymPackage pack){
        return new GymPackageDto(
                pack.getId(),
                pack.getFees(),
                pack.getDescription()
        );
    }
    public static GymPackage maptoGymPackage(GymPackageDto packDto){
        return new GymPackage(
                packDto.getId(),
                packDto.getFees(),
                packDto.getDescription()
        );
    }
}
