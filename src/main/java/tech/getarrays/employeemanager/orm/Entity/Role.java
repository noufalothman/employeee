package tech.getarrays.employeemanager.orm.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role implements Serializable {


    @Id //assign as primary key
    @GeneratedValue(strategy = GenerationType.AUTO) //tell how to generate information and "pass the strategy optional"
    @Column(nullable = false , updatable = false ) //make sure can't update or null
    private Long id ;

    private String name;

    public Role(){}

    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
     /*   this.employee = employee;*/
    }

/*    @JsonIgnore mappedBy element to indicate the entity that owns the bidirectional relationship
    @OneToMany(mappedBy  = "role" , cascade = CascadeType.ALL) Role has many employee
    private Set<EmployeeModel> employee;*/
/*@OneToMany(mappedBy  = "role_id" , cascade = CascadeType.ALL)
    private Set<EmployeeModel> employee;*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
/*    public Set<EmployeeModel> getEmployee() {
        return employee;
    }*/

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public void setName(String name) {
        this.name = name;
    }


}
