package mk.ukim.finki.natashastojanova.wpbs.service.implementation;

import mk.ukim.finki.natashastojanova.wpbs.model.WorkProfile;
import mk.ukim.finki.natashastojanova.wpbs.repository.WorkProfileRepository;
import mk.ukim.finki.natashastojanova.wpbs.service.WorkProfileService;
import org.springframework.stereotype.Service;

/**
 * @author Natasha Stojanova
 */
@Service
public class WorkProfileServiceImpl extends BaseEntityCrudServiceImpl<WorkProfile, WorkProfileRepository> implements WorkProfileService {
    private WorkProfileRepository repository;

    public WorkProfileServiceImpl(WorkProfileRepository repository) {
        this.repository = repository;
    }

    @Override
    protected WorkProfileRepository getRepository() {
        return repository;
    }
}
