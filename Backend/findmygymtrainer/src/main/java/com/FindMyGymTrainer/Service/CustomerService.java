package com.FindMyGymTrainer.Service;

import com.FindMyGymTrainer.Dto.CustomerDto;
import com.FindMyGymTrainer.entity.Customer;

import java.util.List;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customerDto);
    List<Customer> getAllCustomer();
    CustomerDto customerById(int customer_id);
    CustomerDto deleteCustomer(int customer_id);
    CustomerDto updateCustomer(int customer_id,Customer customerDto);
    Customer verification(String email,String password);
}
