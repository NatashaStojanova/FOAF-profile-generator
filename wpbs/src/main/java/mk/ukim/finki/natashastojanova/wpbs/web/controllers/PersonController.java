package mk.ukim.finki.natashastojanova.wpbs.web.controllers;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import mk.ukim.finki.natashastojanova.wpbs.dto.SocialNetworkDTO;
import mk.ukim.finki.natashastojanova.wpbs.dto.WorkProfileDTO;
import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.model.SocialNetwork;
import mk.ukim.finki.natashastojanova.wpbs.model.WorkProfile;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import mk.ukim.finki.natashastojanova.wpbs.service.SocialNetworkService;
import mk.ukim.finki.natashastojanova.wpbs.service.WorkProfileService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.Optional;

/**
 * @author Natasha Stojanova
 */

@RestController
@RequestMapping("/persons")
@CrossOrigin("*")
public class PersonController {

    private final PersonService personService;
    private final SocialNetworkService socialNetworkService;
    private final WorkProfileService workProfileService;

    public PersonController(PersonService personService, SocialNetworkService socialNetworkService, WorkProfileService workProfileService) {
        this.personService = personService;
        this.socialNetworkService = socialNetworkService;
        this.workProfileService = workProfileService;
    }

    //add new person
    @RequestMapping(value = "/new_person", method = RequestMethod.POST, produces = "application/json")
    public Person addPerson(@Valid @RequestBody Person person, HttpServletRequest request, HttpServletResponse response) {
        return personService.save(person);
    }

    //add new friends
    @PostMapping("/new_friends")
    public List<Person> addFriends(@Valid @RequestBody List<Person> friends, HttpServletRequest request, HttpServletResponse response) {
        Person person = personService.findByEmail(friends.get(0).getEmail());
        friends.remove(0);
        person.setFriends(friends);
        personService.save(friends);
        return friends;
    }

    //add social networks
    @PostMapping("/new_soc_net")
    public SocialNetworkDTO addSocNet(@Valid @RequestBody SocialNetworkDTO network, HttpServletRequest request, HttpServletResponse response) {
         Long personID =network.getPersonID();
        Person person = personService.findById(personID);
         SocialNetwork socNet = new SocialNetwork();
         socNet.setBlog(network.getBlog());
         socNet.setFacebookLink(network.getFacebookLink());
         socNet.setLinkedIn(network.getLinkedIn());
         socNet.setSkypeID(network.getSkypeID());
         socNet.setTwitterLink(network.getTwitterLink());
         socNet.setPerson(person);
         socNet = socialNetworkService.save(socNet);
         person.setSocialNetwork(socNet);
         personService.save(person);
        return network;
    }

    //add work profile
    @PostMapping("/new_work_profile")
    public WorkProfileDTO addWorkProf(@Valid @RequestBody WorkProfileDTO profile, HttpServletRequest request, HttpServletResponse response) {
        Long personID = profile.getPersonID();
        Person person = personService.findById(personID);
        WorkProfile workProfile = new WorkProfile();
        workProfile.setCurrentProject(profile.getCurrentProject());
        workProfile.setRecentPublication(profile.getRecentPublication());
        workProfile.setSchoolHomepage(profile.getSchoolHomepage());
        workProfile.setWorkHomepage(profile.getWorkHomepage());
        workProfile.setPerson(person);
        workProfile = workProfileService.save(workProfile);
        person.setWorkProfile(workProfile);
        personService.save(person);
        return profile;

    }

    //show all persons
    @GetMapping
    public List<Person> getAllPersons() {
        return personService.findAll();
    }
}
