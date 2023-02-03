package web.api.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter @Setter @NoArgsConstructor @ToString
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID")
    private int id;

    @Column(name = "PRODUCT_NAME")
    private String name;

    @Column(name = "PRODUCT_PRICE")
    private float price;

    @Column(name = "PRODUCT_DESCRIPTION")
    private String description;

    @Column(name = "PRODUCT_BRAND")
    private String brand;

    public Product(String name, float price, String description, String brand) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.brand = brand;
    }
}