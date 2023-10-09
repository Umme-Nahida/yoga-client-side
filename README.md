                                 //  --------------   MCQ Ans is here  ---------//

 1. let greeting;
    greetign = {};
    console.log(greetign);

                                        <!-- Answer to the Q 1 -->
  ## Ans: A: {}
  Explain: `let greeting;`: This line declares a variable named `greeting` but doesn't assign it a value. In JavaScript, when you declare a variable using `let` without assigning a value, it is initialized with the value undefined.
 `greeting = {};`: This line assigns an empty object `{}` to the variable `greeting`. Now, `greeting` holds an empty    object.
  `console.log(greeting);`: This line logs the value of the greeting variable to the console. In this case, the value of greeting is an empty object {}, and that's why you see `{}` in the console output. 


 2.function sum(a, b) {
  return a + b;
 }

 sum(1, "2");

                                  <!-- Answer to the Q 2 -->
## Ans: C: "12"
Explaine:JavaScript performs type coercion when you use the + operator with different data types. In this case, it converts the number 1 to a string and then performs string concatenation, not numerical addition.So when you add the number 1 and the string "2", JavaScript treats it as a concatenation operation, resulting in the string "12" because it joins the two values together as strings, not as numerical addition. 


3.const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

                                   <!-- Answer to the Q 3 -->
## Ans: A: ['🍕', '🍫', '🥑', '🍔']
Explaine: when you log the food array to the console, it will display the original array, beacuse we changing the value of info.favoriteFood does not modify the original `food` array in any way.

4. function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
                                      <!-- Answer to the Q 4 -->
## Ans: B: Hi there, undefined;
Explaine: we have defined a function sayHi that takes a parameter name and returns a greeting message. However, when you call the sayHi function, you don't provide an argument for the name parameter. So we get the output is `Hi there, undefined;`


5.let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
                                   
                                     <!-- Answer to the Q 5 -->
## Ans: C: 3;
Explaine: Now, let's analyze the elements of the nums array one by one within the forEach loop:

When num is 0, it's considered falsy, so it doesn't increment count.
When num is 1, 2, and 3, they are all truthy values, so for each of them, count is incremented by 1.
After the forEach loop completes, the count variable will have a value of 3 because it was incremented for the truthy values 1, 2, and 3 in the array. So The output will be 3 because that's the final value of the count variable after iterating through the nums array.



                                
                                <!-- My website feature is here -->

 1. Personalized Yoga Journey: Our yoga website offers a personalized experience for every user. Upon signing up, users can take a brief assessment to determine their skill level and yoga goals. Based on their responses, we recommend tailored class suggestions and content, ensuring that each individual embarks on a yoga journey that suits their unique needs.

 2. Yoga Resources and Guides: Offer a comprehensive resource section with articles, and guides on various aspects of yoga, including techniques, benefits, and philosophy. 

  3. Our yoga website has a clear and up-to-date class schedule that includes details such as class times, instructors, and types of yoga offered. Users can book easily online classes.

4.Instructor Profiles and Credentials:
provide detailed profiles of yoga instructors, showcasing their qualifications, experience, and teaching styles. This helps potential students choose classes that align with their preferences and goals while fostering a sense of trust and connection with the instructors.   

5. Mobile-Friendly Design and Accessibility: My website is 100% responsive, user-friendly website and accessible. This enhances the user experience and allows people to access my site and book classes on the go.

