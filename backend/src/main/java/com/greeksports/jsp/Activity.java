package com.greeksports.jsp;

public class Activity {
    // attributes
    String name;
    int size;
    String activity_type;

    // class constructor
    public Activity(String a_name, int a_size, String a_type)
    {
        this.name = a_name;
        this.size = a_size;
        this.activity_type = a_type;
    }

    // getters
    public String getName(){return name;}
    public int getSize() {return size;}
    public String getActivityType(){return activity_type;}
}
