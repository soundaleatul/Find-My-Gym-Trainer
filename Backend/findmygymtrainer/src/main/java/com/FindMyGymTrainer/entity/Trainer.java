package com.FindMyGymTrainer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "Trainer")
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;
    @Column(name = "first_name")
    protected String firstName;
    @Column(name = "last_name")
    protected String lastName;

    @Column(name = "email")
    protected String email;
    @Column(name = "Specification")
    protected String specification;


    @Column(name = "charges")
    protected double charges;
    @Column(name = "phone_number")
    protected long phoneNumber;
    @Column(name = "password")
    protected String password;

    public Trainer(){}

    public Trainer(int id) {
        this.id = id;
    }

    public Trainer(int id, String firstName, String lastName, String email, String specification, double charges, long phoneNumber, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.specification = specification;
        this.charges = charges;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getSpecification() {
        return specification;
    }

    public double getCharges() {
        return charges;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public void setCharges(double charges) {
        this.charges = charges;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
