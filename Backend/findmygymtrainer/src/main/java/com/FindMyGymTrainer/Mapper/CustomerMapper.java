package com.FindMyGymTrainer.Mapper;

import com.FindMyGymTrainer.Dto.CustomerDto;
import com.FindMyGymTrainer.entity.Customer;

public class CustomerMapper {
    public static CustomerDto maptoCustomerDto(Customer customer){
        return new CustomerDto(
                customer.getId(),
                customer.getfName(),
                customer.getlName(),
                customer.getEmail(),
                customer.getPhNo(),
                customer.getPackage_id(),
                customer.getStart_date(),
                customer.getEnd_date(),
                customer.getFeeStatus(),
                customer.getTrainer_id(),
                customer.getPassword()

        );
    }
    public static Customer maptoCustomer(CustomerDto customerDto){
        return new Customer(
                customerDto.getId(),
                customerDto.getfName(),
                customerDto.getlName(),
                customerDto.getEmail(),
                customerDto.getPhNo(),
                customerDto.getPackage_id(),
                customerDto.getStart_date(),
                customerDto.getEnd_date(),
                customerDto.getFeeStatus(),
                customerDto.getTrainer_id(),
                customerDto.getPassword()

        );
    }

}
