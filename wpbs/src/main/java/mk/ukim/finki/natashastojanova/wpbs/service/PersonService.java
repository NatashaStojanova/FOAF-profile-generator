package mk.ukim.finki.natashastojanova.wpbs.service;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;

import java.util.Optional;

/**
 * @author Natasha Stojanova
 */
public interface PersonService extends BaseEntityCrudService<Person> {

    public Optional<Person> findByEmail(String email);

    public Optional<Person> findByBaseURI(String baseURI);

    public Person findByNickname(String nickname);

    public  Person findById(Long id);

}
