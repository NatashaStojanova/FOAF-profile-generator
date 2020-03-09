package mk.ukim.finki.natashastojanova.wpbs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author Natasha Stojanova
 */

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PersonFriend {
    @EmbeddedId
    PersonFriendCompositeKey id;

    @JsonIgnore
    @ManyToOne
    @MapsId("person_id")
    @JoinColumn(name = "person_id")
    Person person;

    @JsonIgnore
    @ManyToOne
    @MapsId("friend_id")
    @JoinColumn(name = "friend_id")
    Friend friend;


}
