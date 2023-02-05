package web.api.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import web.api.entity.Product;
import web.api.repository.ProductRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> findAll() {
        return (List<Product>)productRepository.findAll();
    }
    public Product findById(int id) {
        return productRepository.findById(id);
    }
    public Product save(Product product) {
        return productRepository.save(product);
    }
}
