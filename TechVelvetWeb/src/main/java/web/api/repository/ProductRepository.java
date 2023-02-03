package web.api.repository;

import java.util.List;
import web.api.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    List<Product> findByName(String name);
    Product findById(int id);
}