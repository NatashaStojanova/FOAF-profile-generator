package mk.ukim.finki.natashastojanova.wpbs.web.controllers;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Natasha Stojanova
 */

@RestController
@RequestMapping("/persons")
@CrossOrigin("*")
public class PersonController {

    private PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    //add new person
    @PostMapping
    public Person addPerson(@RequestParam(value = "baseURI") String baseURI,
                            @RequestParam(value = "email") String email,
                            @RequestParam(value = "firstName") String firstName,
                            @RequestParam(value = "lastName") String lastName,
                            @RequestParam(value = "nickname") String nickname,
                            @RequestParam(value = "homepage") String homepage,
                            @RequestParam(value = "title") String title) {

        Person newPerson = new Person();
        newPerson.setBaseURI(baseURI);
        newPerson.setEmail(email);
        newPerson.setFirstName(firstName);
        newPerson.setLastName(lastName);
        newPerson.setNickname(nickname);
        newPerson.setHomepage(homepage);
        newPerson.setTitle(title);

        personService.save(newPerson);
        return newPerson;

    }

    //show all persons
    @GetMapping
    public List<Person> getAllPersons() {
        List<Person> pList = new ArrayList<>();
        personService.findAll().forEach(p -> {
            pList.add(p);
        });
        return pList;
    }


}
