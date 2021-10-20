/*import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
*/
import java.io.IOException;


import javax.servlet.ServletException;  
import javax.servlet.annotation.WebServlet;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
  
/** 
 * Servlet implementation class TestServlet 
 */  
@WebServlet("/TestServlet")  
public class TestServlet extends HttpServlet {  
    private static final long serialVersionUID = 1L;  
         
    /** 
     * @see HttpServlet#HttpServlet() 
     */  
    public TestServlet() {  
        super();  
        // TODO Auto-generated constructor stub  
    }  
  
    /** 
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response) 
     */  
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        // TODO Auto-generated method stub  
        response.getWriter().append("Served at: ").append(request.getContextPath());  
    }  
  
    /** 
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response) 
     */  
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        // TODO Auto-generated method stub
    	/*
    	InputStream input = getServletContext().getResourceAsStream("/Data_Feeds/test_sororities.csv");
    	BufferedReader reader = new BufferedReader(new InputStreamReader(input));
    	int x = 0;
    	String line = null;
    	List<String> lines = new ArrayList<String>();
    	while (x != 7) {
    		line = reader.readLine();
    		lines.add(line);
    		x++;
    	}
    	request.setAttribute("SororityFile", lines);
    	*/
        doGet(request, response);  
    }  
  
} 