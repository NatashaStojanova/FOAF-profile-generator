package mk.ukim.finki.natashastojanova.wpbs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Profile {
    private String email;
    private String baseURI;
    private String name;
    private String surname;
    private String title;
    private String homepage;
    private String nick;
    private String image;
    private String facebookLink;
    private String twitterLink;
    private String blogLink;
    private String linkedInLink;
    private String skypeID;
    private String workHomepage;
    private String schoolHomepage;
    private String currentProject;
    private String recentPublication;
    private String basedNear;
    private List<Friends> friends;


}
