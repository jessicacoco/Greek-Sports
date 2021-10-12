public class Sorority {
    // each sorority class keeps track of the sorority name and that sorority's size
    String name;
    int size;

    // class constructor
    public Sorority(String sorority_name, int sorority_size) {
        this.name = sorority_name;
        this.size = sorority_size;
    }

    // use public access methods to return general class info
    public String getName() { return name; }
    public int getSize() { return size; }
}

  
