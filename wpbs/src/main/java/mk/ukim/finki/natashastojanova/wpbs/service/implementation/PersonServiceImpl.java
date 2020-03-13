package mk.ukim.finki.natashastojanova.wpbs.service.implementation;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.repository.PersonRepository;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Service
public class PersonServiceImpl extends BaseEntityCrudServiceImpl<Person, PersonRepository> implements PersonService {
    private PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    protected PersonRepository getRepository() {
        return personRepository;
    }

    @Override
    public Person save(Person person) {
        return getRepository().save(person);
    }

    @Override
    public List<Person> findAll() {
        return getRepository().findAll();
    }


    @Override
    public Person findByEmail(String email) {
        return personRepository.findByEmail(email).get();
    }

    @Override
    public Person findByBaseURI(String baseURI) {
        return personRepository.findByBaseURI(baseURI).get();
    }

    @Override
    public Person findByNickname(String nickname) {
        return personRepository.findByNickname(nickname).get();
    }

    @Override
    public Person findById(Long id){
        return personRepository.findById(id).get();
    }
}
