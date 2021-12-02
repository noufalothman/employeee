package tech.getarrays.employeemanager.orm.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.getarrays.employeemanager.orm.Entity.Employee;
import tech.getarrays.employeemanager.orm.Entity.Role;

import java.util.Optional;


@Repository
public interface roleRepo extends JpaRepository<Role, Long> {}
