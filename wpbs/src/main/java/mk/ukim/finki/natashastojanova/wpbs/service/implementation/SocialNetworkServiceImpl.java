package mk.ukim.finki.natashastojanova.wpbs.service.implementation;

import mk.ukim.finki.natashastojanova.wpbs.model.SocialNetwork;
import mk.ukim.finki.natashastojanova.wpbs.repository.SocialNetworkRepository;
import mk.ukim.finki.natashastojanova.wpbs.service.SocialNetworkService;
import org.springframework.stereotype.Service;

/**
 * @author Natasha Stojanova
 */
@Service
public class SocialNetworkServiceImpl extends BaseEntityCrudServiceImpl<SocialNetwork, SocialNetworkRepository> implements SocialNetworkService {
    private SocialNetworkRepository repository;

    public SocialNetworkServiceImpl(SocialNetworkRepository repository) {
        this.repository = repository;
    }

    @Override
    protected SocialNetworkRepository getRepository() {
        return repository;
    }
}
