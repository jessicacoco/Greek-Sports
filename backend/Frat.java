public class Frat {
    // Frat class keeps track of the Frat's name, greek letter logo, and size
    String name;
    String logo;
    int size;

    // class constructor
    public Frat(String frat_name, String frat_logo, int frat_size) {
        this.name = frat_name;
        this.logo = frat_logo;
        this.size = frat_size;
    }

    // use public access methods to return general class info
    public String getName() { return name; }
    public int getSize() { return size; }
    public String getLogo() { return logo; }
}
