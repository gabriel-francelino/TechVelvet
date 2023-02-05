package web.api.repository;

import java.util.List;
import web.api.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    Product findById(int id);
}