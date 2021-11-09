package com.greeksports.jsp;

import java.util.ArrayList;

public class GreekOrg {
    // each greek organization class keeps track of their name and their size
    String name;
    String logo;
    int size;
    String org_type;
    ArrayList<Activity> activities;

    // class constructor
    public GreekOrg(String g_name, String g_logo, int g_size, String o_type) {
        this.name = g_name;
        this.logo = g_logo;
        this.size = g_size;
        this.org_type = o_type;
        this.activities = new ArrayList<Activity>();
    }

    // use public access methods to return general class info
    public String getName() { return name; }
    public String getLogo() { return logo; }
    public int getSize() { return size; }
    public String getOrgType() {return org_type;}
    public ArrayList<Activity> getActivities() {return activities;}

    // function for adding activity
    public void addActivity(Activity x)
    {
        this.activities.add(x);
    }
}
