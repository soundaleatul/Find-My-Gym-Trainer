package com.FindMyGymTrainer.Dto;

public class GymPackageDto {
    protected int id;
    protected double fees;
    protected String description;

    public GymPackageDto() {
    }

    public GymPackageDto(int id) {
        this.id = id;
    }

    public GymPackageDto(int id, double fees, String description) {
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
