package mk.ukim.finki.natashastojanova.wpbs.service;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Service
public interface PersonService {

    public void save(Person person);

    public List<Person> findAll();
}
