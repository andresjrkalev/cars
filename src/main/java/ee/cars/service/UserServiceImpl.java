package ee.cars.service;

import ee.cars.model.Car;
import ee.cars.model.User;
import ee.cars.repository.UserRepository;
import ee.cars.util.SortUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> findAll(String find, String sort) {
        Sort sorting = SortUtil.create(sort);

        if (find == null) {
            return userRepository.findAll(sorting);
        }
        return userRepository.findByNameContaining(find, sorting);
    }

    @Override
    public User findById(long id) {
        return userRepository.getById(id);
    }

    @Override
    public List<Car> findCarsById(long id) {
        User user = findById(id);
        return user == null ? null : user.getCars();
    }
}
