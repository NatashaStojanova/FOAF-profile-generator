package mk.ukim.finki.natashastojanova.wpbs.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.SQLTransactionRollbackException;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String workHomepage;
    private String schoolHomepage;
    private String currentProject;
    private String recentPublication;
    private String basedNear;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;
}
