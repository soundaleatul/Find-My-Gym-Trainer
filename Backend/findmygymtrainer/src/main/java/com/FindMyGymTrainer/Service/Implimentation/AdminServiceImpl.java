package com.FindMyGymTrainer.Service.Implimentation;

import com.FindMyGymTrainer.Dto.AdminDto;
import com.FindMyGymTrainer.Exception.ResourceNotFound;
import com.FindMyGymTrainer.Mapper.AdminMapper;
import com.FindMyGymTrainer.Service.AdminService;
import com.FindMyGymTrainer.entity.Admin;
import com.FindMyGymTrainer.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    public AdminRepo adminRepo;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.maptoGymAdmin(adminDto);
        Admin saveAdmin = adminRepo.save(admin);
        return AdminMapper.maptoGymAdminDto(saveAdmin);
    }

    @Override
    public List<Admin> getAllAdmin() {
        List<Admin> admin = adminRepo.findAll();
        return admin;
    }

    @Override
    public AdminDto adminById(int admin_id) {
        Admin admin = adminRepo.findById(admin_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        return AdminMapper.maptoGymAdminDto(admin);
    }

    @Override
    public AdminDto deleteAdmin(int admin_id) {
        Admin admin = adminRepo.findById(admin_id).orElseThrow(() -> new ResourceNotFound("Id not found"));
        adminRepo.deleteById(admin_id);
        return AdminMapper.maptoGymAdminDto(admin);
    }

    @Override
    public AdminDto updateAdmin(int admin_id, Admin admin) {
        Admin existingAdmin = adminRepo.findById(admin_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        existingAdmin.setFirstName(admin.getFirstName());
        existingAdmin.setLastname(admin.getLastname());
        existingAdmin.setEmail(admin.getEmail());
        existingAdmin.setPassword(admin.getPassword());
        existingAdmin.setPhoneNumber(admin.getPhoneNumber());
        existingAdmin.setFirstName(admin.getFirstName());
        Admin updated = adminRepo.save(existingAdmin);
        return AdminMapper.maptoGymAdminDto(updated);
    }

    @Override
    public Admin verification(String email, String password) {
        Admin verifyAdmin = adminRepo.findByEmailAndPassword(email,password);
        System.out.println(verifyAdmin);
        return verifyAdmin;
    }
}
