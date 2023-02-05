package web.api.entity;

import jakarta.persistence.*;
import lombok.*;

// import java.util.HashSet;

@Getter @Setter @NoArgsConstructor @ToString
@Entity @Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private int id;

    @Column(name = "FIRST_NAME")
    String firstName;

    @Column(name = "LAST_NAME")
    String lastName;

    @Column(name = "EMAIL")
    String email;

    @Column(name = "PASSWORD")
    String password;

    /*
    @ManyToMany
    @JoinTable(
            name = "USER_ROLE",
            joinColumns = {@JoinColumn(name = "USER_ID")},
            inverseJoinColumns = {@JoinColumn(name = "ROLE_ID")}
    )
    HashSet<Role> roles = new HashSet<>();
    */
}
