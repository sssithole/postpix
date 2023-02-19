package com.example.postpix.controller;

import com.example.postpix.exception.UserNotFoundException;
import com.example.postpix.model.User;
import com.example.postpix.repository.UserRepository;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/hello")
    public  String userController(){
        return ("Hell me");
    }
    @PostMapping("/users")
    User newUser(@RequestBody User newUser){
        System.out.println("its going in");

        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User>getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/users/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/users/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return ("user with ID "+id+" has been deleted ..");
    }
}
