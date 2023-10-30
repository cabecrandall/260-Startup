LAUNCHING THE WEBSITE:

The command to launch the website is  

```ssh -i keytwosixtee.pem ubuntu@34.193.53.61```  

being in this dirctory with the keytwosixtee.pem private key. DON'T put that in the GitHub.

The command to deploy this garbage:  

```bash deployFiles.sh -k keytwosixtee.pem -h medicost.info -s simon```

    

GITHUB MERGES:
 - If there's a conflict, origin/main means the Github, while main means the local repository, AT LEAST according to Github Desktop, which is undoubtedly superior. 

 AWS PROBLEM:
 How do I do route 53 well with a transferred thingy?


### In the following code, what does the link element do?
    link elements attach outside files to an HTML document, like icon and CSS
### In the following code,  what does a div tag do?
    Div tags could do anything, just check the DOM
### In the following code, what is the difference between the #title and .grid selector?
    Title is an ID, grid is a class I guess
### In the following code, what is the difference between padding and margin?
    margin is space around the border of an element, padding is space between border and content
### Given this HTML and this CSS how will the images be displayed using flex?
    flex can put things in rows or columns, or to the left or right or center
### What does the following padding CSS do?
    padding can move around the text pretty much anywhere in an element
### What does the following code using arrow syntax function declaration do?
    Before arrow is arguments, after arrow is function
### What does the following code using map with an array output?
    maps take functions as arguments to convert arrays to other arrays
### What does the following code output using getElementByID and addEventListener?
    it's waiting for the user to do something with a button or element that's interactive
### What does the following line of Javascript do using a # selector?
    Could be changing CSS, or finding elements by ID
### Which of the following are true? (mark all that are true about the DOM)
    Goes in the tag description, <style> tags and then CSS files that are separate for the hierarchy
### By default, the HTML span element has a default CSS display property value of: 
    Inline! It stays in boxes and hides
### How would you use CSS to change all the div elements to have a background color of red?
    div {
        background-color: red
    }
### How would you display an image with a hyperlink in HTML?
    <img src="insert hyperlink">
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    Content then padding then border then margin!
### Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
    Two divs with two id's on the same line, the inner div set to green with style? Something like that
### What will the following code output when executed using a for loop and console.log?
    It's just JAVA/JS/C++ loops chief
### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    element = document.getElementById("byu")
    element.style.color = "green"
### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    <p>
    <ol>
    <ul>
    <h2>
    <h1>
    <h3>
### How do you declare the document type to be html?
    <!DOCTYPE html>
### What is valid javascript syntax for if, else, for, while, switch statements?
    if {
        stuff;
        more stuff;
        switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }
        }
### What is the correct syntax for creating a javascript object?
    new Object() or defining a literal mapping that looks like JSON
    also defining a constructor
    class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}
### Is is possible to add new properties to javascript objects?
    Yes! just do object["property"] = "thing";
    or object.property = "thing";
### If you want to include JavaScript on an HTML page, which tag do you use?
    <script>
### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    const thing = getElementById("animal_id");
    thing.InnerHTML = "crow\nfish";
### Which of the following correctly describes JSON?
    Object serialization into a string that is easily sendable and receivable
### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    chmod - change access mode of a file
    pwd - print current directory
    cd x - change directory to x, given x in current directory
    ls - list files in directory
    vim - open vim text editor
    nano - open nano text editor
    mkdir - make a directory in th current one
    mv x.txt y.txt - move file to another place, or rename it by moving it to the same directory with a different name
    rm - remove a file
    man x - display user manual of command x
    ssh - secure access to a URL with a password or passkey
    ps - view running processes
    wget - downloads a file using a url like curl
    sudo x - do command x as an administrator
### Which of the following console command creates a remote shell session?
    ssh -p, with p as the port I guess
### Which of the following is true when the -la parameter is specified for the ls console command?
    It shows hidden files, and all access statuses of files.
### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    root domain is bozo.click
    top level domain is .click
    subdomains are banana and fruit, where banana is a subdomain of fruit
### Is a web certificate is necessary to use HTTPS.
    Yes
### Can a DNS A record can point to an IP address or another A record.
    It points to an IP address, always!
### Port 443, 80, 22 is reserved for which protocol?
 443 - HTTPs
 80 - HTTP
 22 - SSH
### What will the following code using Promises output when executed?
    It will do things in order with .then, then return the outcome of whether the Promise was a good one or a bad one.

 [Go to README](README.md)