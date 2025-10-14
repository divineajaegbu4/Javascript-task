// Student Grades Tracker
// Keep an array of student names and their scores.

// Write functions to:

// Add a student and their score

// Find the student with the highest score

// Find the class average

// Print out a “report card” for each student

const studentCard = [
    {id: 1, name: "Divine Ajaegbu", score: 50},

    {id: 2, name: "Agu Ikechukwu", score: 40},

    {id: 3, name: "Shedrack Ajaegbu", score: 30},

    {id: 4, name: "Chizoba Ajaegbu", score: 20},

    {id: 5, name: "Gideon Arinze", score: 10},

    {id: 6, name: "Bekee Mba", score: 5}
]


const addStudentAndScore = (nameId) => {
    
    for(let i = 0; i < studentCard.length; i++) {
        const student = studentCard[i];


        // Addition, get student score and name using their id

        if(student.id === nameId) {
           return `name: ${student.name}, score: ${student.score}`
        }
    }


    // Only runs if loop finishes without finding
    return "Student not found!"
}


const findHighestScoreStudent = (name) => {
    let highestStudent = null;

    let foundStudent = null;

    for(let i = 0; i < studentCard.length; i++) {
        let student = studentCard[i];

            if(student.score > highestStudent) {
                 highestStudent = student 
            }

            if(student.name === name) {
                foundStudent = student
            }

    }


    if(!foundStudent) {
        
        
        return `${name} is not our student!`

    }else if(highestStudent && highestStudent.name === name) {

        return `${highestStudent.name} is the one that score highest. Congratulations! 👏` 

    }else {

       return  `${name} is not the highest score` 
    }
}

const calculateSum = () => {
    let sum = 0;

    for(let i = 0; i < studentCard.length; i++) {
        const studentScore = studentCard[i].score;

        sum += studentScore;
    }

    return sum
}

const reportCard = (name) => {
    let classReportCard;

    for(let i = 0; i < studentCard.length; i++) {
        let student = studentCard[i];

        if(student.name === name) {
            classReportCard = student;
        }
       

    }

    console.log(classReportCard)


    if(!classReportCard) {
        return "Student not found!"
    }else {
        return `
          ${classReportCard.name} report card:

          id: ${classReportCard.id},
          score: ${classReportCard.score}
        `
    }
}



const getAddStudentAndScore = addStudentAndScore(7);
const getFindHighestScoreStudent = findHighestScoreStudent("Ann");
const getCaculateSum = calculateSum();
const getReportCard = reportCard("Divine Ajaegbu")

const classAverage = getCaculateSum / studentCard.length;

console.log("==============student score and name==========")
console.log(getAddStudentAndScore);

console.log("============highest score student============")
console.log(getFindHighestScoreStudent);

console.log("==============Class Average========");
console.log(classAverage);

console.log("==============Report Card========");
console.log(getReportCard)


