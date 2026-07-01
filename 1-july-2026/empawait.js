// list of employee , empid, empname, post
// get emp(id) => return emp it will take 3 second
// get basicsalary(emp.post) => basicSalary => 2 second
// getHRA(basicSalary) => HRA => 1 second
// calculate salary = bs + hra + da

let employees = [
        {
        eid: 101,
        ename: 'Aman',
        post: 'Worker'
    },
    {
        eid: 102,
        ename: 'Raju',
        post: 'Developer'
        
    },
    {
        eid: 103,
        ename: 'Vandana',
        post: 'HR'
    },
    {
        eid: 104,
        ename: 'Yogesh',
        post: 'CEO'
    },
    {
        eid: 105,
        ename: 'Tanish',
        post: 'Manager'
    },
]
function getEmployee(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let emp = employees.find((employee) => employee.eid === id)
            if(emp) {
                resolve(emp)
            } else {
                reject("Employee Not Found")
            }
        }, 3000)
    });
}
function getBasicSalary(post) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        let basicSalary = 0;
        if(post == 'CEO') {
            basicSalary = 100000
        } else if(post == 'Manager') {
            basicSalary = 80000;
        } else if(post == 'HR') {
            basicSalary = 50000;
        } else {
            basicSalary = 35000;
        }
        resolve(basicSalary);
    }, 2000)
})
}
function getHra(basicSalary) {
    return new Promise((resolve, reject) => {
        let hra = 0;
        setTimeout(() => {
            if(basicSalary > 80000) {
                hra = 15000;
            } else if(basicSalary >= 50000 && basicSalary < 30000) {
                hra = 12000;
            } else {
                hra = 10000;
            }
            resolve(hra);
        }, 1000)
    })
}
function getCalculateSalary(basicSalary, hra) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let grossSalary = 0;
                grossSalary = basicSalary + hra + basicSalary *.10;
                resolve(grossSalary)
        }, 500)
    })
}
async function salarySummary() {
        try{
            let emp = await getEmployee(104);
            console.log("Employee = ",emp)
            let basicSalary = await getBasicSalary(emp.post);
            console.log("Employee Basic Salary = " + basicSalary)
            let hra = await getHra(basicSalary);
            console.log("Employee Hra = " + hra)
            let grossSalary = await getCalculateSalary(basicSalary, hra);
            console.log("Employee Gross Salary = " + grossSalary)
        } catch(error) {
          console.log(error);
        }
}
salarySummary();