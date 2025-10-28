// object destructuring 

const course = { 
    coursename : "js in hindi",
    price : "999",
    courseInstructor : " lucky"

}
// course.courseInstructor this is the way to display 

const {courseInstructor :instructor} =course
 console.log(instructor);
// this is deconstructor
