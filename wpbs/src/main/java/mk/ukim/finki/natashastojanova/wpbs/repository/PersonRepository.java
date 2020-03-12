package mk.ukim.finki.natashastojanova.wpbs.repository;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import org.springframework.stereotype.Repository;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface PersonRepository extends JpaSpecificationRepository<Person> {
}
