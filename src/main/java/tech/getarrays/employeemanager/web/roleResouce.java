package tech.getarrays.employeemanager.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.employeemanager.orm.Entity.Employee;
import tech.getarrays.employeemanager.orm.Entity.Role;
import tech.getarrays.employeemanager.service.roleService;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@RestController
@RequestMapping("/role")
public class roleResouce {

    private final roleService roleservice;

    public roleResouce(roleService roleservice) {
        this.roleservice = roleservice;
    }

    @GetMapping("/findAllRole")
    public ResponseEntity<List<Role>> findAllRole(){
        List<Role> r = roleservice.findAllRole();
        return new ResponseEntity<>( r , HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Role> addRole(@RequestBody Role r){
        Role r1 = roleservice.addRole(r);
        return new ResponseEntity<>(r1 , HttpStatus.CREATED);

    }
}
