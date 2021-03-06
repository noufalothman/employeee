package tech.getarrays.employeemanager.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.aspectj.lang.annotation.Before;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tech.getarrays.employeemanager.orm.Entity.Employee;
import tech.getarrays.employeemanager.service.EmployeeService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@Transactional
@RestController
@RequestMapping("/employee")
public class EmployeeResource {
    private final EmployeeService employeeservice;


    public EmployeeResource(EmployeeService employeeservice) {
        this.employeeservice = employeeservice;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployee(){
        List<Employee> employees = employeeservice.findAllEmployees();
        return new ResponseEntity<>(employees , HttpStatus.OK);
    }
   @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id){
        Employee employee = employeeservice.findEmployeeBYId(id);
        return new ResponseEntity(employee , HttpStatus.OK);
   }
    @GetMapping("/findAllEmployee")
    public ResponseEntity<List<Employee>> findAllEmployee(){
         List<Employee> e = employeeservice.findAllEmployee();
        return new ResponseEntity<>( e , HttpStatus.OK);
    }
    /*, @RequestBody Map<Object , String> temp*/
   @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody  Employee employee ) {
       System.out.println(employee.toString() + "hhhhhhhhhhhhhhhhhhhhhhhh"); /*null value !!!!*/

       Employee newemployee = employeeservice.addEmployee(employee);
       return new ResponseEntity<>(newemployee , HttpStatus.CREATED);

   }
    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody  Employee employee){
        Employee updateEmployee = employeeservice.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee , HttpStatus.OK);


    }
    @PutMapping("/Update/{id}/{phone}")
    public ResponseEntity<Employee> updateEmployeeByPhone(@PathVariable("phone") String phone , @PathVariable("id")  Long id){
         employeeservice.updateByPhone(phone , id);
        return new ResponseEntity<>(HttpStatus.OK);

    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable("id")  Long id){
         employeeservice.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }



}
//control and service like mirror 