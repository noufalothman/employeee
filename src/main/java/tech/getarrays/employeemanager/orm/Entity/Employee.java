package tech.getarrays.employeemanager.orm.Entity;

import javax.persistence.*;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity //make sure this class maps to any database we configured on calss path
@Table(name = "employee")
public class Employee implements Serializable {

    @Id //assign as primary key
    @GeneratedValue(strategy = GenerationType.AUTO) //tell how to generate information and "pass the strategy optional"
    @Column(nullable = false , updatable = false) //make sure can't update or null
    private Long id ;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imageUrl ;
    @Column( updatable = false)
    private String employeeCode;
    private boolean Active;
    private boolean vacation;

    /*, referencedColumnName = "id" */
    @ManyToOne
    @JoinColumn(name = "role_id" , referencedColumnName = "id")
    public Role role;

/*    @Column(name = "Role_id")
    @JsonProperty("Role_id")
    private Integer Role_id;*/

    public Role getRole() {
        return role;
    }

    public void setRole(Role role_id) {
        this.role = role_id;
    }
/* @Column(nullable = false , updatable = false)
    private Long Role_id;

    public Long getRole_id() {
        return Role_id;
    }

    public void setRole_id(Long role_id) {
        Role_id = role_id;
    }*/



    /*The @JoinColumn annotation is used to specify the foreign key column
    in the owner of the relationship. The inverse-side of the relationship
    sets the mappedBy attribute to indicate that the relationship is owned by
     the other entity.*/

/*
    public Role getRole_id() {
        return Role_id;
    }

    public void setRole_id(Role role_id) {
        Role_id = role_id;
    }

*/


    public boolean isVacation() {
        return vacation;
    }

    public void setVacation(boolean vacation) {
        this.vacation = vacation;
    }
/*

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }*/

    public boolean isActive() {
        return Active;
    }

    public void setActive(boolean active) {
        this.Active = active;
    }



    public Employee(){}


    public Employee(String name,Role role_id, String email, String jobTitle, String phone, String imageUrl, String employeeCode, boolean active) {
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.employeeCode = employeeCode;
        this.Active = active;
        this.role = role_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    @Override
    public String toString() {
        return "EmployeeModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", phone='" + phone + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", employeeCode='" + employeeCode + '\'' +
                ", Active=" + Active +
                ", vacation=" + vacation +
                ", role_id=" + role +
                '}';
    }

}


