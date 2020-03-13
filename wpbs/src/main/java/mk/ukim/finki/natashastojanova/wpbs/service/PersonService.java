package mk.ukim.finki.natashastojanova.wpbs.service;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;

/**
 * @author Natasha Stojanova
 */
public interface PersonService extends BaseEntityCrudService<Person> {

    public Person findByEmail(String email);

    public Person findByBaseURI(String baseURI);

    public Person findByNickname(String nickname);

    public  Person findById(Long id);

}
