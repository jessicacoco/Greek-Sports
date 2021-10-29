

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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
	
	/* Function takes in list of GreekOrg objects and the frat/sorority name.
	 * Then the function traverses the list of GreekOrg objects, looking for
	 * the entry whose name equals house parameter. Once the function finds
	 * this entry, it retrieves the necessary information for the Activity
	 * and stores it in a list, preceeding to add it to the 2D list.
	 * The function repeats this for each Activity, then return the 2D list.
	 * 
	 * Input: List of all GreekOrg objects created from csv file
	 *        and the frat/sorority name as a string
	 *        
	 * Output: 2D ArrayList with each nested list containing
	 *         [Activity name, Activity type, Number of members, Percentage of members]
	 *         for each Activity that the given frat/sorority has at least 1 member in
	 * 
	 */
	public ArrayList<List<String>> FS_Search(ArrayList<GreekOrg> all_orgs, String house){
		// 2D list to store name, type, number of members, and percent of members for each Activity
		ArrayList<List<String>> result = new ArrayList<List<String>>();
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
						result.add(Arrays.asList(name,type,num_string,percentage));
					}
				}
			}
		}
		return result;
	}
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
        
        
        try {
        	String val1 = request.getParameter("option");
    		
    		
            // Create an object of filereader
            // class with CSV file as a parameter.
        	if (val1.equals("Fraternity")) {
        		// get response writer
                PrintWriter writer = response.getWriter();
        		URL url = this.getServletContext().getResource("/Data_Feeds/test_frats.csv");
        		InputStreamReader isr = new InputStreamReader(url.openStream());
            	BufferedReader reader = new BufferedReader(isr);
                
         
            	String htmlResponse = "<html>";
                String s = null;
                while ((s=reader.readLine()) != null) {
                	htmlResponse += s + "<br/>";
                }
                htmlResponse += "<br/>";
                htmlResponse += "</html>";
                writer.println(htmlResponse);
        	}else{
        		// get response writer
                PrintWriter writer2 = response.getWriter();
        		URL url2 = this.getServletContext().getResource("/Data_Feeds/test_sororities.csv");
        		InputStreamReader isr = new InputStreamReader(url2.openStream());
            	BufferedReader reader = new BufferedReader(isr);

                String s = null;
                
                // read the first line with all of the activity names here
                String clubstring = reader.readLine();
                List<String> clubnames = Arrays.asList(clubstring.split("\\s*,\\s*")); // split by comma
                
                //empty list of all of the greek organizations
                ArrayList<GreekOrg> all_orgs = new ArrayList<GreekOrg>();
                
                while ((s=reader.readLine()) != null) {
                	
                	// CODE TO MAKE OBJECTS FOR THE DATA IN EACH LINE
                	List<String> line_data = Arrays.asList(s.split("\\s*,\\s*")); // split by comma
                	int sorority_size = Integer.valueOf(line_data.get(27));
                	Sorority temp = new Sorority(line_data.get(0), line_data.get(28), sorority_size);
                	
                	// add all of the club data into the sorority object as an activity object
                	for(int i = 1; i < 27; i++) // start at 1 to skip the sorority name
                	{
                		String[] clubData = clubnames.get(i).split("_");
                		String activ_type;
                		int num = Integer.valueOf(line_data.get(i));
                		if (clubData[0].equals("C"))
                		{
                			activ_type = "Club";
                		}
                		else
                		{
                			activ_type = "Sport";
                		}
                		Activity temp_activity = new Activity(clubData[1], num, activ_type);
                		temp.addActivity(temp_activity);
                	}
                	all_orgs.add(temp); // update the fat list of all of the greek orgs
                	
                }
                
                // Test the FS_Search function, check output in HTML page
                ArrayList<List<String>> query_result = FS_Search(all_orgs, "Alpha Gamma Delta");
                String htmlResponse = "<html>";
                for (List<String> list:query_result) {
                	for (String x : list) {
                		htmlResponse += x + ' ';
                	}
                	htmlResponse += "<br/>";
                }
                htmlResponse += "</html>";
                writer2.println(htmlResponse);
        	}
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
