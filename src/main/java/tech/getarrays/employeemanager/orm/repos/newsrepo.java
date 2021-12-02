package tech.getarrays.employeemanager.orm.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.getarrays.employeemanager.orm.Entity.News;
import tech.getarrays.employeemanager.orm.Entity.Role;


@Repository
public interface newsrepo extends JpaRepository<News, Long> {
}

