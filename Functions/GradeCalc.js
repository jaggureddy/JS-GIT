// Challenge
// Student score, total possible score
// 15/20 - You got a C(75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

function returnGrade(score=0, total=100){
    let grade
    let percent = (score / total)*100
if(percent>=90)
    grade = 'A'
else if(percent>=80 && percent <90)
    grade = 'B'
else if(70<=percent<79)
    grade = 'C'
else if(60<=percent<69)
    grade = 'D'
else 
    grade = 'F'

return `You got ${grade}(${percent}%)`
}

console.log(returnGrade(75,90));


