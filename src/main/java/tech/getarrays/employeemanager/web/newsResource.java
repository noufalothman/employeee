package tech.getarrays.employeemanager.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.employeemanager.orm.Entity.News;
import tech.getarrays.employeemanager.orm.Entity.Role;
import tech.getarrays.employeemanager.service.newsService;
import tech.getarrays.employeemanager.service.roleService;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@RestController
@RequestMapping("/news")
public class newsResource {


        private final newsService newsservice;

        public newsResource(newsService newsservice) {
            this.newsservice = newsservice;
        }

        @GetMapping("/getAllNews")
        public ResponseEntity<List<News>> findAllNews(){
            List<News> n1 = newsservice.findAllNews();
            return new ResponseEntity<>( n1 , HttpStatus.OK);
        }

        @PostMapping("/add")
        public ResponseEntity<News> addNews(@RequestBody News n){
            News n1 = newsservice.addNews(n);
            return new ResponseEntity<>(n1 , HttpStatus.CREATED);

        }
    }

