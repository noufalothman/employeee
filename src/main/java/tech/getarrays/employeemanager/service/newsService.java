package tech.getarrays.employeemanager.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tech.getarrays.employeemanager.orm.Entity.News;
import tech.getarrays.employeemanager.orm.Entity.Role;
import tech.getarrays.employeemanager.orm.repos.newsrepo;

import java.util.List;

@Service
public class newsService {

    newsrepo newsrepo ;


    @Autowired
    public newsService(newsrepo newsrepo) {

        this.newsrepo = newsrepo;
    }

    public newsService() { }

    public  List<News> findAllNews() {
        return newsrepo.findAll();
    }

    public News addNews(News n) {
    return newsrepo.save(n);
    }

   /* public static List<Role> findAllNews() {
    }*/



}
