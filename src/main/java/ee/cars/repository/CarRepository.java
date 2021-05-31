package ee.cars.repository;

import ee.cars.model.Car;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface    CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByMakeOrModelOrNumberplate(String make, String model, String numberplate, Sort sort);
}
