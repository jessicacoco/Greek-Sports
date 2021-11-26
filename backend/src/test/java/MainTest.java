import static org.junit.Assert.assertEquals;

import com.greeksports.jsp.Main;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;

public class MainTest {
    @Test
    public void FSNamesTest(){
        ArrayList<String> true_result = Main.FSNames();
        ArrayList<String> expected_result = new ArrayList<>(Arrays.asList("Alpha Gamma Delta",
                                                                          "Alpha Omega Epsilon",
                                                                          "Alpha Phi",
                                                                          "Omega Phi Beta",
                                                                          "Pi Beta Phi",
                                                                          "Sigma Delta"));
        // Test if length of result list is as expected
        assertEquals(true_result.size(),expected_result.size());
        // Ensure result list contains correct strings in alphabetical order
        for (int i = 0; i < expected_result.size(); i++){
            assertEquals(true_result.get(i),expected_result.get(i));
        }
    }

    @Test
    public void SportNamesTest(){
        ArrayList<String> true_result = Main.SportNames();
        ArrayList<String> expected_result = new ArrayList<>(Arrays.asList("DanceTeam",
                                                                          "Rugby",
                                                                          "SkiTeam",
                                                                          "WaterPolo",
                                                                          "WomenBasketball",
                                                                          "WomenSoccer",
                                                                          "Wrestling"));
        // Test if length of result list is as expected
        assertEquals(true_result.size(),expected_result.size());
        // Ensure result list contains correct strings in alphabetical order
        for (int i = 0; i < expected_result.size(); i++){
            assertEquals(true_result.get(i),expected_result.get(i));
        }
    }

    @Test
    public void ClubNamesTest(){
        ArrayList<String> true_result = Main.ClubNames();
        ArrayList<String> expected_result = new ArrayList<>(Arrays.asList("Badminton",
                                                                          "BallroomDance",
                                                                          "Boxing",
                                                                          "ClubVolleyball",
                                                                          "Crew",
                                                                          "DanceClub",
                                                                          "DanceDanceRevolution",
                                                                          "Fencing",
                                                                          "Fishing",
                                                                          "Judo",
                                                                          "JugglingUnicycling",
                                                                          "Karate",
                                                                          "MeitokukanKendoDojo",
                                                                          "Outing",
                                                                          "Racquetball",
                                                                          "Rifle",
                                                                          "Rudras",
                                                                          "SkiSnowboardClub",
                                                                          "TaeKwonDo"));
        // Test if length of result list is as expected
        assertEquals(true_result.size(),expected_result.size());
        // Ensure result list contains correct strings in alphabetical order
        for (int i = 0; i < expected_result.size(); i++){
            assertEquals(true_result.get(i),expected_result.get(i));
        }
    }
}
