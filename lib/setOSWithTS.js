class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "  " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello ,     " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M. ", "User");
console.log(user);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0T1NXaXRoVFMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2V0T1NXaXRoVFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7SUFFSSxZQUFtQixTQUFTLEVBQVMsYUFBYSxFQUFTLFFBQVE7UUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBQTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBT0QsaUJBQWlCLE1BQWU7SUFDNUIsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3JFLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUEifQ==