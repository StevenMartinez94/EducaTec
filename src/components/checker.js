//import { getDatabase, ref, set } from 'firebase/database'
//
//// Use realtime firebase database
//function writeUserData(email, pass){
//  const db = getDatabase()
//  const reference = ref(db, 'users/' + email)
//
//  set(reference, {
//    email: email,
//    pass: pass
//  })
//}
//
//export {writeUserData}
  
  //// Initialize your Firebase app
	//firebase.initializeApp(config);
  //
  //// Reference to your entire Firebase database
  //var myFirebase = firebase.database().ref();
  //
  //// Get a reference to the recommendations object of your Firebase.
  //// Note: this doesn't exist yet. But when we write to our Firebase using
  //// this reference, it will create this object for us!
  //var users = myFirebase.child("users");
  //
  //// Push our first recommendation to the end of the list and assign it a
  //// unique ID automatically.
  //users.push({
	//"email": "The danger of a single story",
	//"presenter": "Chimamanda Ngozi Adichie",
	//"link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
  //});