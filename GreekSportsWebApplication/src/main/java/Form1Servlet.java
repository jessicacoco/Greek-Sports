

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;

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
                
         
            	String htmlResponse = "<html>";
                String s = null;
                while ((s=reader.readLine()) != null) {
                	htmlResponse += s + "<br/>";
                }
                htmlResponse += "<br/>";
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
