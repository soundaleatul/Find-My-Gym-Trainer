package com.FindMyGymTrainer.Dto;

public class TrainerDto {
        protected int id;
        protected String firstName;
        protected String lastName;
        protected String email;
        protected String specification;
        protected double charges;
        protected long phoneNumber;
        protected String password;

        public TrainerDto(){}

    public TrainerDto(int id) {
        this.id = id;
    }

    public TrainerDto(int id, String firstName, String lastName, String email, String specification, double charges, long phoneNumber, String password) {
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
