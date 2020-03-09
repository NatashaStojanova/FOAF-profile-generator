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
public class PersonServiceImpl implements PersonService {
    private PersonRepository personRepository;

    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public void save(Person person) {
        personRepository.save(person);
    }

    @Override
    public List<Person> findAll() {
        return personRepository.findAll();
    }
}
