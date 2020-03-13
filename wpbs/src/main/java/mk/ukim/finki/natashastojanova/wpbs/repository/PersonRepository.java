package mk.ukim.finki.natashastojanova.wpbs.repository;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface PersonRepository extends JpaSpecificationRepository<Person> {
    Optional<Person> findByEmail(String email);

    Optional<Person> findByBaseURI(String baseURI);

    Optional<Person> findByNickname(String nickname);



}
