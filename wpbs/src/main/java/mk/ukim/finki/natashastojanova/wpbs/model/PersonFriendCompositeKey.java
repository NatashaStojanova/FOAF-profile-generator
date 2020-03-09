package mk.ukim.finki.natashastojanova.wpbs.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * @author Natasha Stojanova
 */
@Embeddable
@Getter
@Setter
@NoArgsConstructor
public class PersonFriendCompositeKey implements Serializable {
    @Column(name = "person_id")
    Long pizzaId;
    @Column(name = "friend_id")
    Long ingredientid;
}
