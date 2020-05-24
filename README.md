### This assignment is Anurag Bannur's attempt at the TruckX assignment for the role of Software Engineering Intern

1. To run the file, please clone the project into your favorite IDE.
2. Run the command npm intall
3. Run npm start

### Website flow:
1. You will be first redirected to Login page. Here you can login using any of the reqres users eg: email: eve.holt@reqres.in, password: cityslicka
2. Once logged in you will navigate to the users page. The users page lists all the users initially loaded from reqres/users api.
3. You can use the various buttons such as Add user, edit and delete to modify the local redux state. However, if refreshed the redux state will be blown away and you will be back to your initial state.
4. In the search bar you can search for a particluar user through first-name, last_name, email and phone. However, this search is case sensitive.
5. The assignment did not specify anything regarding the login/logout flow except that user has to be logged in before viewing the user dashboard. Hence, I took the liberty of implementing a logout button too. Hence, when <b>logged</b> out the user must sign in to access any other pages.
The token returned from the api is stored in localstorage.

### Assignment requirements completed:


Requirements | Status
------------ | -------------
Buttons to Add, Delete, Edit, Search | Done
Add USER must display new COmponent and use the CREATE API | Done
On Edit, user is navigated to new Page and allowed to Edit | Done
User should be able to delete a record. Ask user confirmation before deleteing | Done
Use Redux(optional) | Done
Use class components | Yes
USe hooks | Yes
Use React router | Yes
