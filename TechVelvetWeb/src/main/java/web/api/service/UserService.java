package web.api.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import web.api.entity.User;
import web.api.repository.UserRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public List<User> findAll() {
        return (List<User>)userRepository.findAll();
    }
    public User findById(int id) {
        return userRepository.findById(id);
    }
    public User save(User user) {
        return userRepository.save(user);
    }
    public void delete(User user) {
        userRepository.delete(user);
    }
}
