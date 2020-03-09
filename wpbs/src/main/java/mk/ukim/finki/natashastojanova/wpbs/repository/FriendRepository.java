package mk.ukim.finki.natashastojanova.wpbs.repository;

import mk.ukim.finki.natashastojanova.wpbs.model.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Natasha Stojanova
 */
public interface FriendRepository extends JpaRepository<Friend, Long> {
}
