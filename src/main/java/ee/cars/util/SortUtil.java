package ee.cars.util;

import org.springframework.data.domain.Sort;

import static ee.cars.common.Constants.SORT_DESC;
import static ee.cars.common.Constants.SYMBOL_COLON;

public class SortUtil {
    public static Sort create(String sort) {
        if (sort == null) return Sort.unsorted();
        String[] parts = sort.split(SYMBOL_COLON);
        Sort.Direction direction = parts[1].equals(SORT_DESC) ? Sort.Direction.DESC : Sort.Direction.ASC;
        return Sort.by(direction, parts[0]);
    }
}
