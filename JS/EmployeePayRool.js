class EmployeePayrollData {
    id;
    salary;
    name;
    gender;
    startDate;
    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = this.gender;
        this.startDate = this.startDate;
    }
    get name()
    {
        return this.name;
    }
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    toString()
    {
        const options = { year:'numeric',month:'long',day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                        this.startDate.toLocaleDataString("en-US",options);
        return "id" + this.id + ",Name =" + this.name + " ,Salary=" + this.salary + "," +
                "gender=" + this.gender + ",staetDate=" + empDate; 
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Deepak" ,3000);
console.log(employeePayrollData.toString());
try {
employeePayrollData.name = "Dhiraj";
console.log(employeePayrollData.toString());
} catch(e) {
    console.log(e);
}
let newEmployeepayrollData = new EmployeePayrollData(1,"Shridhar",30000,"F",new Date());
console.log(newEmployeepayrollData.toString());