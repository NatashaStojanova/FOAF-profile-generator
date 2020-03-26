package mk.ukim.finki.natashastojanova.wpbs.web.controllers;


import mk.ukim.finki.natashastojanova.wpbs.dto.*;
import mk.ukim.finki.natashastojanova.wpbs.exceptions.PersonNotFoundException;
import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.model.SocialNetwork;
import mk.ukim.finki.natashastojanova.wpbs.model.WorkProfile;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import mk.ukim.finki.natashastojanova.wpbs.service.SocialNetworkService;
import mk.ukim.finki.natashastojanova.wpbs.service.WorkProfileService;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.jena.rdf.model.*;
import org.apache.jena.util.FileManager;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.bind.annotation.*;
import org.apache.jena.sparql.vocabulary.FOAF;
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

    /*Add your local path*/
    private String localPath = "C:\\Users\\natas\\Desktop\\FCSE\\WPBS\\wpbs\\profiles\\";

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
            if (optPerson.get().getEmail().equals(person.getEmail()) &&
                    optPerson.get().getBaseURI().equals(person.getBaseURI())) {
                optPerson.get().setFirstName(person.getFirstName());
                optPerson.get().setLastName(person.getLastName());
                optPerson.get().setBaseURI(person.getBaseURI());
                optPerson.get().setEmail(person.getEmail());
                optPerson.get().setImage(person.getImage());
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
            Optional<Person> friendIter = personService.findByEmail(friend.getEmail());
            if (friendIter.isPresent()) {
                //if that friends already exists id database, then don't create new one,
                //but connect the existing friend with this one.(they are the same person)
                personFriends.add(friendIter.get());
                System.out.println(personFriends);
                person.get().setFriends(personFriends);
            } else {
                //if that friends does not exist in database, then create him
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
        workProfile.setBasedNear(profile.getBasedNear());
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

    //generate new FOAF profile
    @RequestMapping(value = "/generate", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    FileSystemResource createFOAFprofile(@Valid @RequestBody Person newPerson) throws IOException {
        Optional<Person> check = personService.findOne(newPerson.getId());
        if (!check.isPresent())
            throw new PersonNotFoundException();
        Person person = check.get();
        Model model = ModelFactory.createDefaultModel();
        Resource personTurtle = model.createResource(person.getBaseURI(), FOAF.Person)
                .addProperty(FOAF.account,person.getBaseURI())
                .addProperty(FOAF.firstName, person.getFirstName())
                .addProperty(FOAF.lastName, person.getLastName())
                .addProperty(FOAF.mbox_sha1sum, person.getEmail())
                .addProperty(FOAF.img , person.getImage())
                .addProperty(FOAF.nick, person.getNickname())
                .addProperty(FOAF.title, person.getTitle())
                .addProperty(FOAF.homepage, person.getHomepage())
                .addProperty(FOAF.workplaceHomepage, person.getWorkProfile().getWorkHomepage())
                .addProperty(FOAF.currentProject, person.getWorkProfile().getCurrentProject())
                .addProperty(FOAF.schoolHomepage, person.getWorkProfile().getSchoolHomepage())
                .addProperty(FOAF.publications, person.getWorkProfile().getRecentPublication())
                .addProperty(FOAF.based_near,person.getWorkProfile().getBasedNear())
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
        FileWriter out = new FileWriter(localPath + fileName);
        try {
            model.write(out, "RDF/XML");
        } finally {
            try {
                out.close();
            } catch (IOException closeException) {
            }
        }
        final File sendFile = new File(localPath + fileName);
        return new FileSystemResource(sendFile);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.POST, produces = "application/json")
    public Profile addProfile(@Valid @RequestBody String s, HttpServletRequest request, HttpServletResponse response) throws IOException, JSONException {
        JSONObject json = new JSONObject(s);
        String profile = (String) json.get("yourProfile");
        String fromFormat = (String) json.get("fromFormat");
        int length = 10;
        boolean useLetters = true;
        boolean useNumbers = false;
        String fileName = RandomStringUtils.random(length, useLetters, useNumbers);
        FileWriter out = new FileWriter(localPath + fileName + fromFormat);
        try {
            out.write(profile);
        } finally {
            try {
                out.close();
            } catch (IOException closeException) {
            }
        }

        Model model = FileManager.get().loadModel(localPath + fileName + fromFormat);
        ResIterator iter = model.listSubjectsWithProperty(FOAF.weblog);
        Profile p = new Profile();

        Resource r = iter.nextResource();
        String firstName = r.getProperty(FOAF.firstName).getString();
        p.setName(firstName);
        String lastName = r.getProperty(FOAF.lastName).getString();
        p.setSurname(lastName);
        String nick = r.getProperty(FOAF.nick).getString();
        p.setNick(nick);
        String image = r.getProperty(FOAF.img).getString();
        p.setImage(image);
        String email = r.getProperty(FOAF.mbox_sha1sum).getString();
        p.setEmail(email);
        /*String baseURI = r.getProperty(FOAF.account).getString();
        p.setBaseURI(baseURI);*/
        String title = r.getProperty(FOAF.title).getString();
        p.setTitle(title);
        String homepage = r.getProperty(FOAF.homepage).getString();
        p.setHomepage(homepage);
        String weblog = r.getProperty(FOAF.weblog).getString();
        p.setBlogLink(weblog);
        String currentProject = r.getProperty(FOAF.currentProject).getString();
        p.setCurrentProject(currentProject);
        String publications = r.getProperty(FOAF.publications).getString();
        p.setRecentPublication(publications);
        String schoolHomepage = r.getProperty(FOAF.schoolHomepage).getString();
        p.setSchoolHomepage(schoolHomepage);
        String workHomepage = r.getProperty(FOAF.workplaceHomepage).getString();
        p.setWorkHomepage(workHomepage);
        String basedNear = r.getProperty(FOAF.based_near).getString();
        p.setBasedNear(basedNear);
       /* String facebookLink = r.getProperty(FOAF.account).getString();
        p.setFacebookLink(facebookLink);
        String linkedInLink = r.getProperty(FOAF.account).getString();
        p.setLinkedInLink(linkedInLink);
        String twitterLink = r.getProperty(FOAF.account).getString();
        p.setTwitterLink(twitterLink);*/
        for (int i = 0; i < 3; i++) {
            String iterLinks = r.getProperty(FOAF.account).getString();
            if (iterLinks.contains("facebook")) {
                p.setFacebookLink(iterLinks);
                r.getProperty(FOAF.account).remove();
                continue;
            } else if (iterLinks.contains("linkedin")) {
                p.setLinkedInLink(iterLinks);
                r.getProperty(FOAF.account).remove();
                continue;
            } else
                p.setTwitterLink(iterLinks);
            r.getProperty(FOAF.account).remove();
            continue;

        }
        String skypeID = r.getProperty(FOAF.skypeID).getString();
        p.setSkypeID(skypeID);

        NodeIterator iterFriends = model.listObjectsOfProperty(FOAF.knows);
        List<Friends> friends = new ArrayList<>();
        while (iterFriends.hasNext()) {
            Friends f = new Friends();
            Resource resourceFriend = (Resource) iterFriends.nextNode();
            String name = resourceFriend.getProperty(FOAF.firstName).getString();
            f.setName(name);
            String emailFriend = resourceFriend.getProperty(FOAF.mbox_sha1sum).getString();
            f.setEmail(emailFriend);
            friends.add(f);
        }
        p.setFriends(friends);
        return p;
    }

    @RequestMapping(value = "/parse", method = RequestMethod.POST, produces = "application/json")
    public FileSystemResource parseProfile(@Valid @RequestBody String s, HttpServletRequest request, HttpServletResponse response) throws IOException, JSONException {
        System.out.print(s);
        JSONObject json = new JSONObject(s);
        String profile = (String) json.get("yourProfile");
        String fromFormat = (String) json.get("fromFormat");
        String toFormat = (String) json.get("toFormat");
        int length = 10;
        boolean useLetters = true;
        boolean useNumbers = false;
        String fileName = RandomStringUtils.random(length, useLetters, useNumbers);
        FileWriter out = new FileWriter(localPath + fileName + ".rdf");
        try {
            out.write(profile);
        } finally {
            try {
                out.close();
            } catch (IOException closeException) {
            }
        }

        Model model = ModelFactory.createDefaultModel();
        InputStream is = FileManager.get().open(localPath + fileName + ".rdf");
        model.read(is, null, fromFormat);
        String outputFile = RandomStringUtils.random(length, useLetters, useNumbers);
        FileWriter outWriter = new FileWriter(localPath + outputFile);
        try {
            model.write(outWriter, toFormat);
        } finally {
            try {
                outWriter.close();
            } catch (IOException closeException) {
            }
        }
        final File sendFile = new File(localPath + outputFile);
        return new FileSystemResource(sendFile);
    }

}
