package com.FindMyGymTrainer.controller;

import com.FindMyGymTrainer.Dto.CustomerDto;
import com.FindMyGymTrainer.Service.CustomerService;
import com.FindMyGymTrainer.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    @GetMapping("customers")
    public List<Customer> getAllCustomer(){
        List<Customer> customer = customerService.getAllCustomer();
        return customer;
    }
    @PostMapping("customer/add")
    public CustomerDto addCustomer(@RequestBody CustomerDto customer){
        System.out.println(customer);
        CustomerDto addCustomer = customerService.createCustomer(customer);
        return addCustomer;
    }
    @GetMapping("customer/{customer_id}")
    public CustomerDto getCustomerById(@PathVariable("customer_id") int customer_id){
        CustomerDto customer = customerService.customerById(customer_id);
        return customer;
    }
    @DeleteMapping("customer/delete/{customer_id}")
    public  CustomerDto deleteCustomerById(@PathVariable("customer_id") int customer_id){
        CustomerDto customer = customerService.deleteCustomer(customer_id);
        return customer;
    }
    @PutMapping("customer/update/{customer_id}")
    public CustomerDto updateCustomer(@PathVariable("customer_id") int customer_id,@RequestBody Customer updateCustomer){
        CustomerDto customer = customerService.updateCustomer(customer_id,updateCustomer);
        return customer;
    }
    @GetMapping("customer/verify/{email}/{password}")
    public Customer customerVerification(@PathVariable("email") String email,@PathVariable("password") String password){
        Customer customer = customerService.verification(email,password);
        return customer;
    }
}
