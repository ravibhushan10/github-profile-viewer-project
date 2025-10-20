<!-- *******************Problem fixed ************************** -->
When you getting previous output ::
1  Remove-Item -Recurse -Force .parcel-cache, dist
2  npx parcel index.html

When you face npm audit fix problem 
1 npm outdated
2 npm install parcel@latest
3 npm audit

<!-- ************ API list *************** -->
https://api.github.com/users?per_page=${count}   //Multiple user data fetch (just give the count value)
https://api.github.com/users/taylorotwell        //single user data fetch
https://api.github.com/users?since=6000&per_page=20   // it show the data from 6000 id to 6020
because all user stored in unique id 


"An unauthenticated (not unauthorized) user is limited to 60 API calls per hour."

<!-- ************************************************************ -->
/ Here the main reason of empty dependencies is it render only one time for fetching the data 
 // Don't use  generateProfile()  in open , always use inside the useEffect otherwise this fetch data again and again when its parent render .. We all know API is very expeisive operation . we wan't data one time only .

 // here if you write all Profile.map((value)=>{ ....} in same line then you don't need to write return keyword it automatically return 
// But when you write in multiple line then you have to write return keyword

// Try catch functionality add karo
// UseCallBack function add karne ki koshish
// Search button: Name ke basis: User profile exist, display kara dena

<!-- ************************************************************* -->




