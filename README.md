### Task 1: Website Integration and JavaScript Task ###

The file recs.js is designed to run on M&Co's website.

If you open up https://www.mandco.com/tapered-trousers-black/1076604.html in Chrome and then open the Console (Ctrl+Shift+I), you can execute the code directly on the page.

What it should do, is a section called "YOU MIGHT ALSO LIKE" and show a set of Personify XP recommendations.

However, it's not currently picking up the product code (1076604) correctly, and is instead hardcoded to "9999". This needs changing so that, regardless of the page, it sends the correct product code to Personify XP.

The category and referrer fields are not completed either, please fix this as well.

Finally, if you JavaScript is your passion and you want to show it, then an optional task is to change the code so it overwrites the "PEOPLE WHO LIKED THIS ITEM ALSO LIKED" sidebar section instead of the "MORE FROM THIS COLLECTION" section.

### Task 2: Java Development Task ###

The file US-PRODUCT-FEED.txt is an actual test product file that we have had to process last year. The data in product files are used to drive all the UI elements that we use on the client's website.

This task is to code the parsing of the file into a JSON object. Example code has been given in LoadItemsExample.java and it is recommended that you use this as a basis for your code.

Please note that the file follows a parent/varient order, in that we first are shown a record for the generic product and then a line for each size and colour combination. For example the product AZZ00043 has a variant with id AZZ00043-105-14 where 105 is the colour and 14 is the size. You should ensure that you only include the main product (AZZ00043) and not the variants (AZZ00043-105-14, AZZ00043-105-16 etc.) in the JSON output. 

There are a further two optional tasks described in the java file that you can complete if you would like to show off your coding proficiency.

###

These tasks are designed to be similar to real life tasks that you would be given during your first few months at Personify XP, so do not hesistate to ask questions if needed.
