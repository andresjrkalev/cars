package ee.cars.common;

public class Constants {
    private static final String API_BASE = "/api";
    private static final String API_VERSION_1 = API_BASE + "/v1";
    public static final String API_PATH_CAR = "/cars";
    public static final String API_PATH_CAR_V1 = API_VERSION_1 + API_PATH_CAR;
    public static final String API_PATH_USER_V1 = API_VERSION_1 + "/users";
    public static final String API_PATH_ID = "/{id}";

    public static final String HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";

    public static final String SORT_DESC = "desc";

    public static final String PROPERTY_NAME = "name";

    public static final String SYMBOL_ASTERISK = "*";
    public static final String SYMBOL_COLON = ":";
}
