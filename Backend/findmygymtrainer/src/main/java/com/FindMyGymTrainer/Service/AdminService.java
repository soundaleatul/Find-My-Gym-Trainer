package com.FindMyGymTrainer.Service;

import com.FindMyGymTrainer.Dto.AdminDto;
import com.FindMyGymTrainer.entity.Admin;

import java.util.List;

public interface AdminService {
    AdminDto createAdmin(AdminDto adminDto);
    List<Admin> getAllAdmin();
    AdminDto adminById(int admin_id);
    AdminDto deleteAdmin(int admin_id);
    AdminDto updateAdmin(int admin_id, Admin admin);
    Admin verification(String email,String password);
}
