package mk.ukim.finki.natashastojanova.wpbs.web.controllers;

import mk.ukim.finki.natashastojanova.wpbs.dto.SocialNetworkDTO;
import mk.ukim.finki.natashastojanova.wpbs.dto.WorkProfileDTO;
import mk.ukim.finki.natashastojanova.wpbs.exceptions.PersonNotFoundException;
import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.model.SocialNetwork;
import mk.ukim.finki.natashastojanova.wpbs.model.WorkProfile;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import mk.ukim.finki.natashastojanova.wpbs.service.SocialNetworkService;
import mk.ukim.finki.natashastojanova.wpbs.service.WorkProfileService;
import org.apache.commons.compress.utils.IOUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.jena.base.Sys;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.Property;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.util.FileManager;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.bind.annotation.*;
import org.apache.jena.sparql.vocabulary.FOAF;

import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Natasha Stojanova
 */

@RestController
@RequestMapping("/persons")
@CrossOrigin("*")
public class PersonController<RESTResource> {

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
        //check if the Person exists
        Optional<Person> optPerson = personService.findByEmail(person.getEmail());
        if (optPerson.isPresent()) {
            //ako postoi mailot ili base urito->znachi deka postoi toj chovek vo baza
            if (optPerson.get().getEmail().equals(person.getEmail()) &&
                    optPerson.get().getBaseURI().equals(person.getBaseURI())) {
                optPerson.get().setFirstName(person.getFirstName());
                optPerson.get().setLastName(person.getLastName());
                optPerson.get().setBaseURI(person.getBaseURI());
                optPerson.get().setEmail(person.getEmail());
                optPerson.get().setNickname(person.getNickname());
                optPerson.get().setHomepage(person.getHomepage());
                optPerson.get().setTitle(person.getTitle());

                return personService.save(optPerson.get());
            }
        }
        return personService.save(person);
    }

    //add new friends
    @PostMapping("/new_friends")
    public List<Person> addFriends(@Valid @RequestBody List<Person> friends, HttpServletRequest request, HttpServletResponse response) {
        Optional<Person> person = personService.findByEmail(friends.get(0).getEmail());
        List<Person> personFriends = new ArrayList<>();
        friends.remove(0);
        friends.forEach(friend -> {
            Optional<Person> friend1 = personService.findByEmail(friend.getEmail());
            if (friend1.isPresent()) {
                //ako postoi vo baza toj covek, togash ne treba da pravam nov tuku treba da go povrzam so Pwrson-ot
                personFriends.add(friend1.get());
                System.out.println(personFriends);
                person.get().setFriends(personFriends);
            } else {
                //dokolku ne postoi->togash treba da se kreira vo bazata
                personFriends.add(friend);
                person.get().setFriends(personFriends);
                personService.save(personFriends);
            }
        });
        return friends;
    }

    //add social networks
    @PostMapping("/new_soc_net")
    public SocialNetworkDTO addSocNet(@Valid @RequestBody SocialNetworkDTO network, HttpServletRequest request, HttpServletResponse response) {
        Long personID = network.getPersonID();
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

    //TURTLE FORMAT
    @RequestMapping(value = "/generate", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    FileSystemResource createFOAFprofile(@Valid @RequestBody Person newPerson) throws IOException {
        Optional<Person> check = personService.findOne(newPerson.getId());
        if (!check.isPresent())
            throw new PersonNotFoundException();
        Person person = check.get();
        Model model = ModelFactory.createDefaultModel();
        Resource personTurtle = model.createResource(person.getBaseURI(), FOAF.Person)
                .addProperty(FOAF.firstName, person.getFirstName())
                .addProperty(FOAF.lastName, person.getLastName())
                .addProperty(FOAF.nick, person.getNickname())
                .addProperty(FOAF.title, person.getTitle())
                .addProperty(FOAF.homepage, person.getHomepage())
                .addProperty(FOAF.workplaceHomepage, person.getWorkProfile().getWorkHomepage())
                .addProperty(FOAF.currentProject, person.getWorkProfile().getCurrentProject())
                .addProperty(FOAF.schoolHomepage, person.getWorkProfile().getSchoolHomepage())
                .addProperty(FOAF.publications, person.getWorkProfile().getRecentPublication())
                .addProperty(FOAF.skypeID, person.getSocialNetwork().getSkypeID())
                .addProperty(FOAF.weblog, person.getSocialNetwork().getBlog())
                .addProperty(FOAF.account, person.getSocialNetwork().getFacebookLink())
                .addProperty(FOAF.account, person.getSocialNetwork().getLinkedIn())
                .addProperty(FOAF.account, person.getSocialNetwork().getTwitterLink());
        person.getFriends().forEach(friend -> {
            personTurtle.addProperty(FOAF.knows, model.createResource(friend.getBaseURI(), FOAF.Person)
                    .addProperty(FOAF.firstName, friend.getFirstName())
                    .addProperty(FOAF.mbox_sha1sum, friend.getEmail()));
        });

        int length = 10;
        boolean useLetters = true;
        boolean useNumbers = false;
        String fileName = RandomStringUtils.random(length, useLetters, useNumbers);
        FileWriter out = new FileWriter("C:\\Users\\natas\\Desktop\\FCSE\\WPBS\\wpbs\\profiles\\" + fileName);
        try {
            model.write(out, "RDF/XML");
        } finally {
            try {
                out.close();
            } catch (IOException closeException) {
            }
        }
        final File sendFile = new File("C:\\Users\\natas\\Desktop\\FCSE\\WPBS\\wpbs\\profiles\\" + fileName);
        return new FileSystemResource(sendFile);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.POST, produces = "application/json")
    public String addProfile(@Valid @RequestBody String s, HttpServletRequest request, HttpServletResponse response) throws IOException {
        int length = 10;
        boolean useLetters = true;
        boolean useNumbers = false;
        String fileName = RandomStringUtils.random(length, useLetters, useNumbers);
        FileWriter out = new FileWriter("C:\\Users\\natas\\Desktop\\FCSE\\WPBS\\wpbs\\profiles\\" + fileName + ".rdf");
        try {
            out.write(s);
        } finally {
            try {
                out.close();
            } catch (IOException closeException) {
            }
        }

        Model model = ModelFactory.createDefaultModel();
        model.read(new FileInputStream("C:\\Users\\natas\\Desktop\\FCSE\\WPBS\\wpbs\\profiles\\" + fileName + ".rdf"), null);
        Resource person = model.getResource("http://test.example.com/MainPerson.rdf");
        Property firstName = model.createProperty("http://xmlns.com/foaf/0.1/firstName");
        String firstNameValue = person.getProperty(firstName).getString();

        return "profile";
    }


}
