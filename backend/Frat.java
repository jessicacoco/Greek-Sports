public class Frat {
    // each sorority class keeps track of the sorority name and that sorority's size
    String name;
    int size;

    // class constructor
    public Frat(String frat_name, int frat_size) {
        this.name = frat_name;
        this.size = frat_size;
    }

    // use public access methods to return general class info
    public String getName() { return name; }
    public int getSize() { return size; }
}
