let salary = 3000.00;
let inssTax = 0;
let irTax = 0;

if (salary <= 1556.94) {
  inssTax = 8;
} else if (salary <= 2594.92) {
  inssTax = 9;
} else if (salary <= 5189.82) {
  inssTax = 11;
} else {
  inssTax = 'max';
}

if (inssTax === 'max') {
  salary -= 570.88;
} else {
  const inssTaxOnSalary = (salary * inssTax) / 100;
  salary -= inssTaxOnSalary;
}

if (salary <= 2826.65) {
  irTax = ((salary * 7.5) / 100) - 142.80;
} else if (salary <= 3751.06) {
  irTax = ((salary * 15) / 100) - 354.80;
} else if (salary <= 4664.68) {
  irTax = ((salary * 22.5) / 100) - 636.13;
} else {
  irTax = ((salary * 27.5) / 100) - 869.36;
}

salary -= irTax;

console.log(salary);
