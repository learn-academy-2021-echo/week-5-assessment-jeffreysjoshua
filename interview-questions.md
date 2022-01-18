# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer: Blocks are chunks of code which perform logic on various data-types (or classes in Ruby). They typically start with "do", followed by 'x amount' of logical statements, and finish with the word "end".

  Researched answer: In addition to the answer above, I found that blocks can be thought of as an anonymous function in JavaScript, or a method that does not belong to an object in Ruby. This means that blocks do not have their own unique names, so they are typically called in a function or passed to a method (such as .each, .even?, etc.). Blocks can also take arguments and output values, however, in blocks arguments are placed inside of "smoke-stacks" (|x|), rather than inside of parentheses.



2. What is a gem?

  Your answer: Ruby gems are like open sourced pieces of code that a developer can download and use in their own personal projects; gems help add details to what they're working on.

  Researched answer: In my research, I found that gems can be very multi-purpose. For example, RSpec is considered a gem, which we use for testing, and Rails is also considered a gem, which we use to build quick web applications.



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is a Ruby gem which is used to build quick web applications. It is an open sourced framework that is written in Ruby.

  Researched answer: In addition to the answer above, I found that Rails follows a "MVC" process to construct and update the application. The M stands for "model" and is the layer of the database, the V stands for "view" and is the display a user sees on the application, and the C is for "controller" and it facilitates interaction between the database and the display.



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a type of database that stores information in tables, which consist of rows and columns. The columns consist of the various types of data that you're collecting, and the rows are typically for each instance that you're collecting data for. I know that there are other types of databases, but the only one that comes to mind is cloud databases.

  Researched answer: In addition to the answer above, relational databases can also contain multiple tables in them. Each of the rows in the table are instances of classes with the columns defining what data is being collected- this is represented in the "schema". There are also "NoSQL" databases which are considered to be "non-relational" databases; the idea is to have a database that is not dictated by pre-configured schemas, so that unstructured data is easier to store and changes are easier to make.



5. What are primary keys? Why are they important?

  Your answer: Primary keys are unique identifiers that are assigned to each row within a database. Primary keys allow databases/ tables to keep track of each class instance.

  Researched answer: A primary key is also its own column within a table, and assigned to each row. They are important because a table can contain hundreds or thousands of columns, and without primary keys, it would be very difficult to access data in a database. I think of the table as a giant array, and the primary key is like the index for the value (in this case the row).



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: These are the methods that are used to create, read, update, and delete data in a database (get, post, put, delete are RESTful routs).

2. JSON: Json is a way to exchange data between a server and an application; json stores its data in objects.

3. ERB: ERB allows you to use ruby code inside of HTML. It seems to be a similar concept to JSX for React.

4. Params: These are the parameters, in Rails, that are being passed to the controller through "get" or "post" requests.

5. API: API stands for application program interface, and is basically a list of various operations that programers can do with the prewritten code in the API.
