package com.FindMyGymTrainer.controller;

import com.FindMyGymTrainer.Dto.AdminDto;
import com.FindMyGymTrainer.Service.AdminService;
import com.FindMyGymTrainer.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class AdminController {
    @Autowired
    public AdminService adminService;

    @GetMapping("admins")
    public List<Admin> getAllAdmin(){
        List<Admin> admin = adminService.getAllAdmin();
        return admin;
    }
    @PostMapping("admin/add")
    public AdminDto addAdmin(@RequestBody AdminDto admin){
        AdminDto addAdmin = adminService.createAdmin(admin);
        return addAdmin;
    }
    @GetMapping("admin/{admin_id}")
    public AdminDto getAdminById(@PathVariable("admin_id") int admin_id){
        AdminDto admin = adminService.adminById(admin_id);
        return admin;
    }
    @PostMapping("admin/delete/{admin_id}")
    public  AdminDto deleteAdminById(@PathVariable("admin_id") int admin_id){
        AdminDto admin = adminService.deleteAdmin(admin_id);
        return admin;
    }
    @PutMapping("admin/update/{admin_id}")
    public AdminDto updateAdmin(@PathVariable("admin_id") int admin_id,@RequestBody Admin updateAdmin){
        AdminDto admin = adminService.updateAdmin(admin_id,updateAdmin);
        return admin;
    }
    @GetMapping("admin/verify/{email}/{password}")
    public Admin adminVerification(@PathVariable("email") String email, @PathVariable("password") String password){
        Admin admin = adminService.verification(email, password);
        return admin;
    }
}
