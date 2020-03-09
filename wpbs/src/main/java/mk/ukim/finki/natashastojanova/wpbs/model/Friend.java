package mk.ukim.finki.natashastojanova.wpbs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String email;
    private String link;

    /*@ManyToMany(mappedBy = "friends")
    private List<Person> persons;*/

    @JsonIgnore
    @OneToMany(mappedBy = "friend")
    private List<PersonFriend> persons;

}
