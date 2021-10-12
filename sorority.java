public class sorority 
{
  // each sorority class keeps track of the sorority name and that sorority's size
    string name;
    int size;

    // class constructor
    public Main(string sorority_name, int sorority_size)
    {
      this.name = sorority_name;
      this.size = sorority_size;
    }

    // given arguements, create an object of class Main and call the constructor
    public static void main(String[] args) {
      Main my_sorority = new Main(args[0], args[1]);
      System.out.println(my_sorority.name);
    }
}

  