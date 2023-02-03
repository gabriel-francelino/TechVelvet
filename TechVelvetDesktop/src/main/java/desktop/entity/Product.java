package desktop.entity;

public class Product {
    private String name;
    private float price;
    private String description;
    private String brand;

    public Product(String name, float price, String description, String brand) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.brand = brand;
    }
    public boolean validateProduct() {
        return !this.name.equals("") && !(this.price <= 0);
    }

    @Override
    public String toString() {
        return "Product[name=" + this.name
                + ", price=" + this.price
                + ", description=" + this.description
                + ", brand=" + this.brand
                + "]";
    }
}