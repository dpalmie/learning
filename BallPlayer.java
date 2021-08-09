/**
 * @author Davis Palmie
 * @version 1.0
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

  // testing method
  public static void main(String[] args) {
    BallPlayer davis = new BallPlayer("davis");
    davis.practice();
    System.out.println(davis.getName());
    System.out.println(davis.getSkill());
  }
    
}
