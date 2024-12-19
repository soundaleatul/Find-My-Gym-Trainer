package com.FindMyGymTrainer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;



    @Column(name = "customer_firstname")
    protected String fName;
    @Column(name = "customer_lastname")
    protected String lName;
    @Column(name = "customer_email")
    protected String email;
    @Column(name = "customer_phone")
    protected long phNo;

    @ManyToOne
    @JoinColumn(name = "Package_id")
    protected GymPackage package_id;
    @Column(name = "start_date")
    protected String start_date;
    @Column(name="end_date")
    protected String end_date;
    @Column(name = "fees_status")
    protected String feeStatus;
    @ManyToOne
    @JoinColumn(name = "trainer_id")
    protected Trainer trainer_id;

    @Column(name="password")
    protected String password;


    public Customer(){

    }

    public Customer(int id, String fName, String lName, String email, long phNo, GymPackage package_id, String start_date, String end_date, String feeStatus, Trainer trainer_id, String password) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phNo = phNo;
        this.package_id = package_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.feeStatus = feeStatus;
        this.trainer_id = trainer_id;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getPhNo() {
        return phNo;
    }

    public void setPhNo(long phNo) {
        this.phNo = phNo;
    }

    public GymPackage getPackage_id() {
        return package_id;
    }

    public void setPackage_id(GymPackage package_id) {
        this.package_id = package_id;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public String getFeeStatus() {
        return feeStatus;
    }

    public void setFeeStatus(String feeStatus) {
        this.feeStatus = feeStatus;
    }

    public Trainer getTrainer_id() {
        return trainer_id;
    }

    public void setTrainer_id(Trainer trainer_id) {
        this.trainer_id = trainer_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", email='" + email + '\'' +
                ", phNo=" + phNo +
                ", package_id=" + package_id +
                ", start_date='" + start_date + '\'' +
                ", end_date='" + end_date + '\'' +
                ", feeStatus='" + feeStatus + '\'' +
                ", trainer_id=" + trainer_id +
                ", password='" + password + '\'' +
                '}';
    }
}
