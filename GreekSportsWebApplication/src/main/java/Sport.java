public class Sport {
    // each sport class keeps track of the sport name, size, and how many members in each sorority
    String name;
    int size;
    int num_in_alpha_gamma_delta;
    int num_in_alpha_omega_epsilon;
    int num_in_alpha_phi;
    int num_in_omega_phi_beta;
    int num_in_pi_beta_phi;
    int num_in_sigma_delta;
    int num_not_in_sorority;

    // class constructor
    public Sport(String sportname, int sportsize) {
    	this.name = sportname;
    	this.size = sportsize;
    	this.num_in_alpha_gamma_delta = 0;
    	this.num_in_alpha_omega_epsilon = 0;
    	this.num_in_alpha_phi = 0;
    	this.num_in_omega_phi_beta = 0;
    	this.num_in_pi_beta_phi = 0;
    	this.num_in_sigma_delta = 0;
    	this.num_not_in_sorority = 0;
    }
    
    // add members in a specific sorority
    public void AddMembers(String sorority_name, int number) 
    {
    	if(sorority_name.equals("Alpha Gamma Delta"))
    	{
    		this.num_in_alpha_gamma_delta += number;
    	}
    	if(sorority_name.equals("Alpha Omega Epsilon"))
    	{
    		this.num_in_alpha_omega_epsilon += number;
    	}
    	if(sorority_name.equals("Alpha Phi"))
    	{
    		this.num_in_alpha_phi += number;
    	}
    	if(sorority_name.equals("Omega Phi Beta"))
    	{
    		this.num_in_omega_phi_beta += number;
    	}
    	if(sorority_name.equals("Pi Beta Phi"))
    	{
    		this.num_in_pi_beta_phi += number;
    	}
    	if(sorority_name.equals("Sigma Delta"))
    	{
    		this.num_in_sigma_delta += number;
    	}
    	if(sorority_name.equals("NONE"))
    	{
    		this.num_not_in_sorority += number;
    	}
    	return;
    }


    // use public access methods to return general class info
    public String getName() {return this.name;}
    public int getSize() {return this.size;}
    public int get_num_in_alpha_gamma_delta() {return this.num_in_alpha_gamma_delta;}
    public int get_num_in_alpha_omega_epsilon() {return this.num_in_alpha_omega_epsilon;}
    public int get_num_in_alpha_phi() {return this.num_in_alpha_phi;}
    public int get_num_in_omega_phi_beta() {return this.num_in_omega_phi_beta;}
    public int get_num_in_pi_beta_phi() {return this.num_in_pi_beta_phi;}
    public int get_num_in_sigma_delta() {return this.num_in_sigma_delta;}
    public int get_num_not_in_sorority() {return this.num_not_in_sorority;}
}
