package web.api.repository;

import org.springframework.data.repository.CrudRepository;
import web.api.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findById(int id);
}
