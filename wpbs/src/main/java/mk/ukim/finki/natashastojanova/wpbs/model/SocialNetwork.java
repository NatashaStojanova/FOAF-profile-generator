package mk.ukim.finki.natashastojanova.wpbs.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author Natasha Stojanova
 */

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SocialNetwork {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String blog;
    private String skypeID;
    private String linkedIn;
    private String facebookLink;
    private String twitterLink;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "personId", nullable = false)
    private Person person;


}
