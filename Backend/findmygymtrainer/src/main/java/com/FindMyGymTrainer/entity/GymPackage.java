package com.FindMyGymTrainer.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "packages")
public class GymPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;
    @Column(name = "price")
    protected double fees;
    @Column(name = "description")
    protected String description;

    public GymPackage() {
    }

    public GymPackage(int id) {
        this.id = id;
    }

    public GymPackage(int id, double fees, String description) {
        this.id = id;
        this.fees = fees;
        this.description = description;
    }

    @Override
    public String toString() {
        return "GymPackage{" +
                "id=" + id +
                ", fees=" + fees +
                ", description='" + description + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getFees() {
        return fees;
    }

    public void setFees(double fees) {
        this.fees = fees;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
