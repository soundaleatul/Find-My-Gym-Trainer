package com.FindMyGymTrainer.Mapper;

import com.FindMyGymTrainer.Dto.AdminDto;
import com.FindMyGymTrainer.entity.Admin;

public class AdminMapper {
    public static AdminDto maptoGymAdminDto(Admin admin){
        return new AdminDto(
                admin.getId(),
                admin.getFirstName(),
                admin.getLastname(),
                admin.getEmail(),
                admin.getPassword(),
                admin.getPhoneNumber()
        );
    }
    public static Admin maptoGymAdmin(AdminDto adminDto){
        return new Admin(
                adminDto.getId(),
                adminDto.getFirstName(),
                adminDto.getLastname(),
                adminDto.getEmail(),
                adminDto.getPassword(),
                adminDto.getPhoneNumber()
        );
    }
}
