import static org.junit.Assert.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.Test;

public class test_csv_file_parsing {

	@Test
	/*
	 * This tests that given the csv files test_sororities.csv and test_fraternities.csv, our program will be able to
	 * read in these files and produce the correct class objects from the data
	 */
	public void test_sororities(HttpServletRequest request, HttpServletResponse response) {
		// reading in the mock sorority data and doing the parsing
		Main parsed_objects = new Main();
		PrintWriter writer = response.getWriter();
		URL url = this.getServletContext().getResource("/Data_Feeds/test_sororities.csv");
		InputStreamReader isr = new InputStreamReader(url.openStream());
    	BufferedReader reader = new BufferedReader(isr);
    	ArrayList<GreekOrg> allorgs = parsed_objects.main(isr, reader, "Sorority");
    	
    	// assertions that the allorgs list was made correctly
    	int num_sororities = allorgs.size();
    	assert(num_sororities == 6);
    	System.out.println("All sororities were added");
    	
    	// spot check that the names and types of sororities were added correctly
    	GreekOrg a_phi = allorgs.get(2);
    	assert(a_phi.getName().equals("Alpha Phi"));
    	assert(a_phi.getOrgType().equals("Sorority"));
    	
    	GreekOrg sig_delt = allorgs.get(5);
    	assert(sig_delt.getName().equals("Sigma Delta"));
    	assert(sig_delt.getOrgType().equals("Sorority"));
    	
    	System.out.println("All sorority names and types were added correctly");
    	
    	// spot check that GreekOrg sororities have the correct activities
    	ArrayList<Activity> aphi_activities = a_phi.getActivities();
    	assert(aphi_activities.size() == 26);
    	assert(aphi_activities.get(2).getName().equals("C_Rcquetball"));
    	assert(aphi_activities.get(2).getActivityType().equals("Club"));
    	assert(aphi_activities.get(2).getSize() == 0);
    	assert(aphi_activities.get(14).getName().equals("S_WomenSoccer"));
    	assert(aphi_activities.get(14).getActivityType().equals("Sport"));
    	assert(aphi_activities.get(2).getSize() == 10);
    	
    	ArrayList<Activity> sigdelt_activities = sig_delt.getActivities();
    	assert(sigdelt_activities.size() == 26);
    	assert(sigdelt_activities.get(1).getName().equals("S_DanceTeam"));
    	assert(sigdelt_activities.get(1).getActivityType().equals("Sport"));
    	assert(sigdelt_activities.get(1).getSize() == 1);
    	
    	System.out.println("All test sorority csv file tests passed sucessfully!");
	}
	
	public void test_frats(HttpServletRequest request, HttpServletResponse response)
	{
		// reading in the mock fraternity data and doing the parsing
		Main parsed_objects = new Main();
		PrintWriter writer = response.getWriter();
		URL url = this.getServletContext().getResource("/Data_Feeds/test_fraternities.csv");
		InputStreamReader isr = new InputStreamReader(url.openStream());
    	BufferedReader reader = new BufferedReader(isr);
    	ArrayList<GreekOrg> allorgs = parsed_objects.main(isr, reader, "Fraternity");
    	
    	// assertions that the allorgs list was made correctly
    	int num_frats = allorgs.size();
    	assert(num_frats == 26);
    	System.out.println("All Frats were added");
    	
    	// spot check that the names and types of frats were added correctly
    	GreekOrg chi_phi = allorgs.get(5);
    	assert(chi_phi.getName().equals("Chi Phi"));
    	assert(chi_phi.getOrgType().equals("Fraternity"));
    	
    	GreekOrg lxa = allorgs.get(9);
    	assert(lxa.getName().equals("Lambda Chi Alpha"));
    	assert(lxa.getOrgType().equals("Fraternity"));
    	
    	System.out.println("All fraternity names and types were added correctly");
    	
    	// spot check that GreekOrg sororities have the correct activities
    	ArrayList<Activity> chiphi_activities = chi_phi.getActivities();
    	assert(chiphi_activities.size() == 26);
    	assert(chiphi_activities.get(2).getName().equals("C_Rcquetball"));
    	assert(chiphi_activities.get(2).getActivityType().equals("Club"));
    	assert(chiphi_activities.get(2).getSize() == 2);
    	assert(chiphi_activities.get(6).getName().equals("S_WaterPolo"));
    	assert(chiphi_activities.get(6).getActivityType().equals("Sport"));
    	assert(chiphi_activities.get(6).getSize() == 7);
    	assert(chiphi_activities.get(21).getName().equals("S_Wrestling"));
    	assert(chiphi_activities.get(21).getActivityType().equals("Sport"));
    	assert(chiphi_activities.get(21).getSize() == 7);
    	
    	ArrayList<Activity> lxa_activities = lxa.getActivities();
    	assert(lxa_activities.size() == 26);
    	assert(lxa_activities.get(0).getName().equals("C_Crew"));
    	assert(lxa_activities.get(0).getActivityType().equals("Club"));
    	assert(lxa_activities.get(0).getSize() == 10);
    	
    	System.out.println("All test fraternity csv file tests passed sucessfully!");
	}
	
}
