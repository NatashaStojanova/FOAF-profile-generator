package mk.ukim.finki.natashastojanova.wpbs.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Natasha Stojanova
 */
@Getter
@Setter
public class SocialNetworkDTO {
    private Long personID;
    private String blog;
    private String skypeID;
    private String linkedIn;
    private String facebookLink;
    private String twitterLink;
}
