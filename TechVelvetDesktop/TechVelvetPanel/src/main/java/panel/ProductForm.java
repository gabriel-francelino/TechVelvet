package panel;

import desktop.entity.Product;
import request.ProductRequest;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.Serial;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class ProductForm extends JFrame {
    @Serial
    private static final long serialVersionUID = 1L;

    public ProductForm() {
        setSize(500, 210);
        setTitle("Create a new product for TechVelvet");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
        setResizable(false);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 2, 0, 3));

        JLabel headerLabel = new JLabel("Create a new product for TechVelvet");
        headerLabel.setForeground(Color.decode("#6F4A8E"));
        headerLabel.setHorizontalAlignment(JLabel.CENTER);
        add(headerLabel);

        JLabel nameLabel = new JLabel("Name");
        nameLabel.setForeground(Color.decode("#6F4A8E"));
        nameLabel.setHorizontalAlignment(JLabel.LEFT);
        panel.add(nameLabel);

        JTextField nameInput = new JTextField(20);
        nameInput.setBackground(Color.decode("#EBEBEB"));
        panel.add(nameInput);

        JLabel priceLabel = new JLabel("Price");
        priceLabel.setForeground(Color.decode("#6F4A8E"));
        priceLabel.setHorizontalAlignment(JLabel.LEFT);
        panel.add(priceLabel);

        JTextField priceInput = new JTextField(20);
        priceInput.setBackground(Color.decode("#EBEBEB"));
        panel.add(priceInput);

        JLabel descriptionLabel = new JLabel("Description");
        descriptionLabel.setForeground(Color.decode("#6F4A8E"));
        descriptionLabel.setHorizontalAlignment(JLabel.LEFT);
        panel.add(descriptionLabel);

        JTextField descriptionInput = new JTextField(20);
        descriptionInput.setBackground(Color.decode("#EBEBEB"));
        panel.add(descriptionInput);

        JLabel brandLabel = new JLabel("Brand");
        brandLabel.setForeground(Color.decode("#6F4A8E"));
        brandLabel.setHorizontalAlignment(JLabel.LEFT);
        panel.add(brandLabel);

        JTextField brandInput = new JTextField(20);
        brandInput.setBackground(Color.decode("#EBEBEB"));
        panel.add(brandInput);

        JButton submitButton = new JButton("Submit");
        submitButton.setBackground(Color.decode("#6F4A8E"));
        submitButton.setForeground(Color.WHITE);
        submitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String name = nameInput.getText();
                float price = Float.parseFloat(priceInput.getText());
                String description = descriptionInput.getText();
                String brand = brandInput.getText();
                Product p = new Product(name, price, description, brand);
                System.out.println(p);
                ProductRequest.postProduct(p);
            }
        });

        add(panel);
        add(submitButton);
        setVisible(true);
    }
    public static void main(String[] args) {
        new ProductForm();
    }
}