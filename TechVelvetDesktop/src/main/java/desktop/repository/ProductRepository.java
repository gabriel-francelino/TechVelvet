package desktop.repository;

import java.util.List;
import desktop.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    List<Product> findByName(String name);
    Product findById(int id);
}