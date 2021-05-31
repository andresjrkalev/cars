package ee.cars.service;

import ee.cars.model.Car;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface CarService {
    List<Car> findAll(String make, String model, String numberPlate, String sort);
    Car findById(long id);
}
