public class Main {
    public static void main(String[] args) {
        Sorority my_sorority = new Sorority(args[0], Integer.parseInt(args[1]));
        Frat my_frat = new Frat(args[0], Interger.parseInt(args[1]));
        System.out.println("Franitery: "+ my_frat.getName());
        System.out.println("Total: "+ my_frat.getSize()); 
        System.out.println("Sorority: " + my_sorority.getName());
        System.out.println("Total: " + my_sorority.getSize());
    }
}
