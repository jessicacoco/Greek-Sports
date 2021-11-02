

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
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Form1Servlet
 */
@WebServlet("/Form1Servlet")
public class Form1Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	
	// Function returns a list of all fraternity and sorority names for Search dropdown
	public ArrayList<String> FSNames(ArrayList<GreekOrg> all_orgs){
		ArrayList<String> result = new ArrayList<String>();
		// Traverse list of GreekOrg objects
				for(int i = 0; i < all_orgs.size(); i++) {
					// Retrieve name of GreekOrg
					String house = all_orgs.get(i).getName();
					// Add name of GreekOrg to result array
					result.add(house);
				}
		// Sort result array alphabetically
		Collections.sort(result);
		return result;
	}
	
	// Function returns a list of all varsity and club sports names for Search dropdown
	public ArrayList<String> SportNames(ArrayList<GreekOrg> all_orgs){
		ArrayList<String> result = new ArrayList<String>();
		// Retrieve Activities list for current GreekOrg object
		ArrayList<Activity> activities = all_orgs.get(0).getActivities();
		// Traverse Activities list, adding each Sport name to result array
		for(Activity a:activities) {
			if(a.getActivityType().equals("Sport")) { result.add(a.getName()); }
		}
		// Sort result array alphabetically
		Collections.sort(result);
		return result;
	}
	
	// Function returns a list of all club names for Search dropdown
	public ArrayList<String> ClubNames(ArrayList<GreekOrg> all_orgs){
		ArrayList<String> result = new ArrayList<String>();
		// Retrieve Activities list for current GreekOrg object
		ArrayList<Activity> activities = all_orgs.get(0).getActivities();
		// Traverse Activities list, adding each Club name to result array
		for(Activity a:activities) {
			if(a.getActivityType().equals("Club")) { result.add(a.getName()); }
		}
		// Sort result array alphabetically
		Collections.sort(result);
		return result;
	}
	
	/* 
	 * Function takes in list of GreekOrg objects and the frat/sorority name.
	 * Then the function traverses the list of GreekOrg objects, looking for
	 * the entry whose name equals house parameter. Once the function finds
	 * this entry, it retrieves the necessary information for the Activity
	 * and stores it in a list, preceeding to add it to the 2D list.
	 * The function repeats this for each Activity, then returns the 2D list.
	 * 
	 * Input: List of all GreekOrg objects created from csv file
	 *        and the frat/sorority name as a string
	 *        
	 * Output: 2D ArrayList with each nested list containing
	 *         [Activity name, Activity type, Number of members, Percentage of members]
	 *         for each Activity that the given frat/sorority has at least 1 member in it
	 * 
	 */
	public ArrayList<ArrayList<String>> FS_Search(ArrayList<GreekOrg> all_orgs, String house){
		// 2D list to store name, type, number of members, and percent of members for each Activity
		ArrayList<ArrayList<String>> result = new ArrayList<ArrayList<String>>();
		// Traverse list of GreekOrg objects
		for(int i = 0; i < all_orgs.size(); i++) {
			// If the current GreekOrg object's names is equal to house...
			if(all_orgs.get(i).getName().equals(house)) {
				GreekOrg temp_house = all_orgs.get(i);
				int total = temp_house.getSize();
				ArrayList<Activity> activities = temp_house.getActivities();
				for (int j = 0; j < activities.size(); j++) {
					// Retrieve Activity name
					String name = activities.get(j).getName();
					// Retrieve Activity type
					String type = activities.get(j).getActivityType();
					// Retrieve number of Acitivty members
					int num = activities.get(j).getSize();
					String num_string = String.valueOf(num);
					// Calculate percentage of people from GreekOrg in Activity
					String percentage = String.format(java.util.Locale.US,"%.2f", (float)((num*100)/total));
					// If there is at least 1 member in Activity...
					if (num != 0) {
						// Add entry that includes [Activity name, Activity type, Number of members, Percentage of members]
						result.add(new ArrayList<String>(Arrays.asList(name,type,num_string,percentage)));
					}
				}
			}
		}
		// Sort 2D array by only the first element in the nested list (i.e. Acivity name)
		Collections.sort(result, new Comparator<ArrayList<String>>() {    
	        @Override
	        public int compare(ArrayList<String> o1, ArrayList<String> o2) {
	            return o1.get(0).compareTo(o2.get(0));
	        }               
		});
		return result;
	}
	
	
	/* 
	 * Function takes in list of GreekOrg objects and the frat/sorority name.
	 * Then the function passes these to the FS_Search function to get a 2D
	 * array for all the activities the house is involved in. The function
	 * takes this result 2D array and sorts it by the number of members, then
	 * adds the last three rows of the 2D array to a new 2D array and returns it.
	 * 
	 * Input: List of all GreekOrg objects created from csv file
	 *        and the frat/sorority name as a string
	 *        
	 * Output: 2D ArrayList with each nested list containing
	 *         [Activity name, Activity type, Number of members, Percentage of members]
	 *         for the top 3 Activities that the given frat/sorority has the most members in
	 *         
	 */
	public ArrayList<ArrayList<String>> FS_TopThree(ArrayList<GreekOrg> all_orgs, String house){
		// Retrieve list of all activities and necessary info using FS_Search function
		ArrayList<ArrayList<String>> result = FS_Search(all_orgs, house);
		// Sort 2D array by only the third element in the nested list (i.e. number of members)
		Collections.sort(result, new Comparator<ArrayList<String>>() {    
	        @Override
	        public int compare(ArrayList<String> o1, ArrayList<String> o2) {
	            return o1.get(2).compareTo(o2.get(2));
	        }               
		});
		// Get the last three nested lists in the 2D result array
		ArrayList<ArrayList<String>> sorted_result = new ArrayList<ArrayList<String>>();
		for(int i = result.size()-1; i > result.size()-4; i--) {
			sorted_result.add(new ArrayList<String>(Arrays.asList(result.get(i).get(0),result.get(i).get(1),result.get(i).get(2),result.get(i).get(3))));
		}
		return sorted_result;
	}
	
	
	
	/* 
	 * Function takes in list of GreekOrg objects and the Sport name.
	 * Then the function traverses the list of GreekOrg objects, retrieving
	 * the Acitvities list for each object. Then, going through that list searching
	 * for the Acitvity object whose name is equal to the sport parameter. 
	 * Once the function finds this entry, it retrieves the necessary information 
	 * for the GreekOrg's Acitvity and stores it in a list, preceeding to add it to the 2D list.
	 * The function repeats this for each GreekOrg object, then returns the 2D list.
	 * 
	 * Input: List of all GreekOrg objects created from csv file
	 *        and the Sport name as a string
	 *        
	 * Output: 2D ArrayList with each nested list containing
	 *         [GreekOrg name, GreekOrg type, Number of members, Percentage of members]
	 *         for each each GreekOrg that has at least 1 member in the given sport
	 * 
	 */
	public ArrayList<ArrayList<String>> SportSearch(ArrayList<GreekOrg> all_orgs, String sport){
		ArrayList<ArrayList<String>> result = new ArrayList<ArrayList<String>>();
		// Traverse array of GreekOrg objects
		for(int i = 0; i < all_orgs.size(); i++) {
			// Retrieve name for current GreekOrg object
			String house = all_orgs.get(i).getName();
			// Retrieve type for current GreekOrg object
			String type = all_orgs.get(i).getOrgType();
			// Retrieve size for current GreekOrg object
			int total = all_orgs.get(i).getSize();
			// Retrieve Activities list for current GreekOrg object
			ArrayList<Activity> activities = all_orgs.get(i).getActivities();
			// Traverse Activities list
			for(Activity a:activities) {
				// If the activity name is equal to the sport parameter, there is at least 1 member, and the activity is a sport... 
				if(a.getName().equals(sport) && a.getSize() != 0 && a.getActivityType().equals("Sport")) {
					// Retrieve sport team size
					int num = a.getSize();
					String num_string = String.valueOf(num);
					// Calculate percentage of people from GreekOrg in Activity
					String percentage = String.format(java.util.Locale.US,"%.2f", (float)((num*100)/total));
					// Add entry that includes [GreekOrg name, GreekOrg type, Number of members, Percentage of members]
					result.add(new ArrayList<String>(Arrays.asList(house,type,num_string,percentage)));
				}
			}
		}
		// Sort 2D array by only the first element in the nested list (i.e. GreekOrg name)
		Collections.sort(result, new Comparator<ArrayList<String>>() {    
		@Override
		public int compare(ArrayList<String> o1, ArrayList<String> o2) {
			return o1.get(0).compareTo(o2.get(0));
			        }               
		});
		return result;
	}
	
	
	/* 
	 * Function takes in list of GreekOrg objects and the Club name.
	 * Then the function traverses the list of GreekOrg objects, retrieving
	 * the Acitvities list for each object. Then, going through that list searching
	 * for the Acitvity object whose name is equal to the club parameter. 
	 * Once the function finds this entry, it retrieves the necessary information 
	 * for the GreekOrg's Acitvity and stores it in a list, preceeding to add it to the 2D list.
	 * The function repeats this for each GreekOrg object, then returns the 2D list.
	 * 
	 * Input: List of all GreekOrg objects created from csv file
	 *        and the Club name as a string
	 *        
	 * Output: 2D ArrayList with each nested list containing
	 *         [GreekOrg name, GreekOrg type, Number of members, Percentage of members]
	 *         for each each GreekOrg that has at least 1 member in the given sport
	 * 
	 */
	public ArrayList<ArrayList<String>> ClubSearch(ArrayList<GreekOrg> all_orgs, String club){
		ArrayList<ArrayList<String>> result = new ArrayList<ArrayList<String>>();
		// Traverse array of GreekOrg objects
		for(int i = 0; i < all_orgs.size(); i++) {
			// Retrieve name for current GreekOrg object
			String house = all_orgs.get(i).getName();
			// Retrieve type for current GreekOrg object
			String type = all_orgs.get(i).getOrgType();
			// Retrieve size for current GreekOrg object
			int total = all_orgs.get(i).getSize();
			// Retrieve Activities list for current GreekOrg object
			ArrayList<Activity> activities = all_orgs.get(i).getActivities();
			// Traverse Activities list
			for(Activity a:activities) {
				// If the activity name is equal to the sport parameter, there is at least 1 member, and the activity is a club... 
				if(a.getName().equals(club) && a.getSize() != 0 && a.getActivityType().equals("Club")) {
					// Retrieve sport team size
					int num = a.getSize();
					String num_string = String.valueOf(num);
					// Calculate percentage of people from GreekOrg in Activity
					String percentage = String.format(java.util.Locale.US,"%.2f", (float)((num*100)/total));
					// Add entry that includes [GreekOrg name, GreekOrg type, Number of members, Percentage of members]
					result.add(new ArrayList<String>(Arrays.asList(house,type,num_string,percentage)));
				}
			}
		}
		// Sort 2D array by only the first element in the nested list (i.e. GreekOrg name)
		Collections.sort(result, new Comparator<ArrayList<String>>() {    
		@Override
		public int compare(ArrayList<String> o1, ArrayList<String> o2) {
			return o1.get(0).compareTo(o2.get(0));
			        }               
		});
		return result;
	}
	
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
        try {
        	// using the function added to main now that parses on 11/1
        		Main parsed_objects = new Main();
        		ArrayList<GreekOrg> allorgs = parsed_objects.main(request, response);
                
                /*
                 * How to test query functions:
                 * ArrayList<ArrayList<String>> query_result = FS_Search(all_orgs, "Alpha Omega Epsilon");
                 * ArrayList<ArrayList<String>> query_result = FS_TopThree(all_orgs, "Alpha Omega Epsilon");
                 * ArrayList<ArrayList<String>> query_result = SportSearch(all_orgs, "WomenSoccer");
                 * ArrayList<ArrayList<String>> query_result = ClubSearch(all_orgs, "Crew");
                 * 
                 */
                // Test the FS_TopThree function, check output in HTML page
                ArrayList<ArrayList<String>> query_result = FS_TopThree(allorgs, "Alpha Omega Epsilon");
                String htmlResponse = "<html>";
                for (ArrayList<String> list:query_result) {
                	for (String x : list) {
                		htmlResponse += x + ' ';
                	}
                	htmlResponse += "<br/>";
                }
                htmlResponse += "</html>";
        	}
        catch (Exception e) {
            e.printStackTrace();
        }
        
         
        // build HTML code
        //String htmlRespone = "<html>";
        //htmlRespone += "<h2>You chose: " + val1 + "<br/>";      
        //htmlRespone += "</html>";
         
        // return response
        //writer.println(htmlRespone);
	}

}
