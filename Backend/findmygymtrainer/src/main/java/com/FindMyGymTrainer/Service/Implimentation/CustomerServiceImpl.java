package com.FindMyGymTrainer.Service.Implimentation;


import com.FindMyGymTrainer.Dto.CustomerDto;
import com.FindMyGymTrainer.Exception.ResourceNotFound;
import com.FindMyGymTrainer.Mapper.CustomerMapper;
import com.FindMyGymTrainer.Service.CustomerService;
import com.FindMyGymTrainer.entity.Customer;
import com.FindMyGymTrainer.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    public CustomerRepo CustomerRepo;
    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        Customer customer = CustomerMapper.maptoCustomer(customerDto);
        Customer saveCustomer = CustomerRepo.save(customer);
        return CustomerMapper.maptoCustomerDto(saveCustomer);
    }

    @Override
    public List<Customer> getAllCustomer() {
        List<Customer> customer = CustomerRepo.findAll();
        return customer;
    }

    @Override
    public CustomerDto customerById(int customer_id) {
        Customer customer = CustomerRepo.findById(customer_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        return CustomerMapper.maptoCustomerDto(customer);
    }

    @Override
    public CustomerDto deleteCustomer(int customer_id) {
        Customer customer = CustomerRepo.findById(customer_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        CustomerRepo.deleteById(customer_id);
        return CustomerMapper.maptoCustomerDto(customer);
    }

    @Override
    public CustomerDto updateCustomer(int customer_id, Customer updateCustomer) {
        Customer existingCustomer = CustomerRepo.findById(customer_id).orElseThrow(()->new ResourceNotFound("Id not found"));
        existingCustomer.setStart_date((updateCustomer.getStart_date()));
        existingCustomer.setEnd_date((updateCustomer.getEnd_date()));
        existingCustomer.setEmail(updateCustomer.getEmail());
        existingCustomer.setfName(updateCustomer.getfName());
        existingCustomer.setlName(updateCustomer.getlName());
        existingCustomer.setFeeStatus(updateCustomer.getFeeStatus());
        existingCustomer.setTrainer_id(updateCustomer.getTrainer_id());
        existingCustomer.setPackage_id(updateCustomer.getPackage_id());
        existingCustomer.setPhNo(updateCustomer.getPhNo());
        existingCustomer.setPassword(updateCustomer.getPassword());
        Customer Updated = CustomerRepo.save(existingCustomer);
        return CustomerMapper.maptoCustomerDto(Updated);
    }

    @Override
    public Customer verification(String email,String fName) {
        Customer verifyCustomer = CustomerRepo.findByEmailAndFirstName(email,fName);
        System.out.println(verifyCustomer);
        return verifyCustomer;
    }


}
