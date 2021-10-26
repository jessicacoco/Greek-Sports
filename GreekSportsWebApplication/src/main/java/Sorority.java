public class Sorority {
    // each sorority class keeps track of the sorority name and that sorority's size
    String name;
    String logo;
    int size;
    
    // class constructor
    public Sorority(String sorority_name, String sorority_logo, int sorority_size) {
        this.name = sorority_name;
        this.logo = sorority_logo;
        this.size = sorority_size;
    }
    
    // use public access methods to return general class info
    public String getName() { return name; }
    public String getLogo() { return logo; }
    public int getSize() { return size; }
}