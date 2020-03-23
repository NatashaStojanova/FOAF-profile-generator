package mk.ukim.finki.natashastojanova.wpbs.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Natasha Stojanova
 */
@Getter
@Setter
public class WorkProfileDTO {
    private Long personID;
    private String workHomepage;
    private String schoolHomepage;
    private String currentProject;
    private String recentPublication;
    private String basedNear;
}
