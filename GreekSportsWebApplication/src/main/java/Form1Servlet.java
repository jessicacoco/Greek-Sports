

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
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
	
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
        try {
        	// using the function added to main now that parses on 11/1
        		Main parsed_objects = new Main();
        		PrintWriter writer = response.getWriter();
        		URL url = this.getServletContext().getResource("/Data_Feeds/test_sororities.csv");
        		InputStreamReader isr = new InputStreamReader(url.openStream());
            	BufferedReader reader = new BufferedReader(isr);
            	ArrayList<GreekOrg> allorgs = parsed_objects.main(isr, reader);
                /*
                 * How to test query functions:
                 * ArrayList<ArrayList<String>> query_result = FS_Search(all_orgs, "Alpha Omega Epsilon");
                 * ArrayList<ArrayList<String>> query_result = FS_TopThree(all_orgs, "Alpha Omega Epsilon");
                 * ArrayList<ArrayList<String>> query_result = SportSearch(all_orgs, "WomenSoccer");
                 * ArrayList<ArrayList<String>> query_result = ClubSearch(all_orgs, "Crew");
                 * 
                 */
                // Test the FS_TopThree function, check output in HTML page
                ArrayList<ArrayList<String>> query_result = parsed_objects.FS_TopThree("Alpha Omega Epsilon");
                String htmlResponse = "<html>";
                for (ArrayList<String> list:query_result) {
                	for (String x : list) {
                		htmlResponse += x + ' ';
                	}
                	htmlResponse += "<br/>";
                }
                htmlResponse += "</html>";
                
                writer.println(htmlResponse);
        }catch (Exception e) {
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
