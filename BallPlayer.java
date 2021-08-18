/**
* @author Davis Palmie
* @version 1.1
*/

public class BallPlayer {

    // instance variables
    private String name;
    private String position;
    private int age;
    private double skill;

    // constructors
    public BallPlayer(String name) {
        this(name, "Right Field", 18, 0.0);
    }

    public BallPlayer(String name, String position, int age, double skill) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.skill = skill;
    }

    // methods 
    public void practice() {
        this.setSkill(getSkill() + 1.5);
    }

    public boolean equals(Object o) {
        if (!(o instanceof BallPlayer)) {
            return false;
        }
        BallPlayer other = (BallPlayer) o;
        return ((other.getSkill() == skill) && (other.getName().equals(name)));
    }

    public String toString() {
        return "Hi! My name is " + getName() + " and I'm " + getAge() + " years old."
            + " I love to play " + getPosition() + ".";
    }

    // getters and setters
    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String newPosition) {
        this.position = newPosition;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int newAge) {
        this.age = newAge;
    }

    public double getSkill() {
        return skill;
    }

    public void setSkill(double newSkill) {
        this.skill = newSkill;
    }

    // main method for testing BallPlayer instances
    public static void main(String[] args) {
        BallPlayer davis = new BallPlayer("davis");
        BallPlayer frank = new BallPlayer("frank", "First Base", 22, 10.0);
        davis.practice();
        System.out.println(davis.getName());
        System.out.println(frank.getSkill());
        System.out.println(davis);
        System.out.println(frank);
        System.out.println(davis.equals(frank));
    }
}
