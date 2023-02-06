package web.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import web.api.entity.User;
import web.api.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable(value = "id") int userId) {
        User u = userService.findById(userId);
        if(u == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(u);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") int userId, @RequestBody User user) {
        if(userService.findById(userId) == null) {
            return ResponseEntity.notFound().build();
        }
        user.setId(userId);
        User updatedUser = userService.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable(value = "id") int userId) {
        User userDeleted = userService.findById(userId);
        if(userDeleted == null) {
            return ResponseEntity.notFound().build();
        }
        userService.delete(userDeleted);
        return ResponseEntity.noContent().build();
    }

//    @PutMapping("/{id}/roles")
//    public User addRoles(@PathVariable(value = "id") int userId, @RequestBody List<Integer> roleIds) {
//        User user = userService.findById(userId);
//        if(user == null) return null;
//        List<Role> roles = roleService.findAllById(roleIds);
//        user.getRoles().addAll(roles);
//        return userService.save(user);
//    }
}