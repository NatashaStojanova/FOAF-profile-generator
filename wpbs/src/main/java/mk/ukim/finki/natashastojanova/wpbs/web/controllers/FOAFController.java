package mk.ukim.finki.natashastojanova.wpbs.web.controllers;

import mk.ukim.finki.natashastojanova.wpbs.model.Person;
import mk.ukim.finki.natashastojanova.wpbs.service.PersonService;
import mk.ukim.finki.natashastojanova.wpbs.service.SocialNetworkService;
import mk.ukim.finki.natashastojanova.wpbs.service.WorkProfileService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.apache.jena.rdf.model.*;
import org.apache.jena.vocabulary.*;

import javax.validation.Valid;
import java.util.Optional;

/**
 * @author Natasha Stojanova
 */
@RestController
@RequestMapping("ds")
@CrossOrigin("*")
public class FOAFController {

    private final PersonService personService;
    private final SocialNetworkService socialNetworkService;
    private final WorkProfileService workProfileService;

    public FOAFController(PersonService personService, SocialNetworkService socialNetworkService, WorkProfileService workProfileService) {
        this.personService = personService;
        this.socialNetworkService = socialNetworkService;
        this.workProfileService = workProfileService;
    }

    @GetMapping("/generate")
    @RequestMapping(value = "/create", method = RequestMethod.POST, produces = "application/json")
    public Resource createFOAFprofile(@Valid @RequestBody Person person) {
        Model model = ModelFactory.createDefaultModel();
        Resource personTurtle = model.createResource(person.getBaseURI())
                .addProperty(VCARD.Given, person.getFirstName())
                .addProperty(VCARD.Family, person.getLastName())
                .addProperty(VCARD.NICKNAME, person.getNickname())
                .addProperty(VCARD.EMAIL, person.getEmail())
                .addProperty(VCARD.TITLE, person.getTitle())
                .addProperty(VCARD.Other, person.getHomepage());
        model.write(System.out, "TURTLE");
        return personTurtle;
    }


}
