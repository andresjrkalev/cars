package ee.cars.service;

import ee.cars.model.Car;
import ee.cars.repository.CarRepository;
import ee.cars.util.SortUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepository carRepository;

    @Override
    public List<Car> findAll(String make, String model, String numberPlate, String sort) {
        Sort sorting = SortUtil.create(sort);

        if (make == null && model == null && numberPlate == null) {
            return carRepository.findAll(sorting);
        }
        return carRepository.findByMakeOrModelOrNumberplate(make, model, numberPlate, sorting);
    }

    @Override
    public Car findById(long id) {
        return carRepository.getById(id);
    }
}
