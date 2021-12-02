package tech.getarrays.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.orm.Entity.Employee;
import tech.getarrays.employeemanager.orm.Entity.Role;
import tech.getarrays.employeemanager.orm.repos.roleRepo;

import java.util.List;
import java.util.UUID;

@Service
public class roleService {

    roleRepo rolerepo ;

    @Autowired
    public roleService(roleRepo rolerepo) {
    this.rolerepo = rolerepo;
    }

    public List<Role> findAllRole(){

        return rolerepo.findAll();
    }

    public Role addRole(Role role){
        return rolerepo.save(role);
    }
}
