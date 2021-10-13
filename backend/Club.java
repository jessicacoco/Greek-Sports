public class Club {
    // each club class keeps track of the club name, size, and how many members in each sorority
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
    public Club(String clubname, int clubsize, int num_in_agd, int num_in_aoe, int num_in_aphi, 
                int num_in_opb, int num_in_pbp, int num_in_sd, int num_in_none) 
    {
        this.name = clubname;
        this.size = clubsize;
        this.num_in_alpha_gamma_delta = num_in_agd;
        this.num_in_alpha_omega_epsilon = num_in_aoe;
        this.num_in_alpha_phi = num_in_aphi;
        this.num_in_omega_phi_beta = num_in_opb;
        this.num_in_pi_beta_phi = num_in_pbp;
        this.num_in_sigma_delta = num_in_sd;
        this.num_not_in_sorority = num_in_none;
    }

    // use public access methods to return general class info
    public String getName() {return this.name;}
    public int getSize() {return this.size;}
    public int get_num_in_alpha_gamma_delta() {return this.num_in_alpha_gamma_delta;}
    public int get_num_in_alpha_omega_epsilon() {return this.num_in_alpha_omega_epsilon;}
    public int get_num_in_alpha_phi() {return this.num_in_alpha_phi;}
    public int get_num_in_omega_phi_beta() {return this.num_in_omega_phi_beta;}
    public int get_num_in_pi_beta_phi() {return this.num_in_pi_beta_phi;}
    public int get_num_in_sigma_delta() {return this.get_num_in_sigma_delta;}
    public int get_num_not_in_sorority() {return this.get_num_not_in_sorority;}
}