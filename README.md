# soft-dogs-2567

# IndustryBuying Clone

IndustryBuying is an e-commerce website made using MongoDb Chakra UI with all CRUD operations.

E-commerce service in New Delhi for Purchase of products by organizations for their own use or re-sell.



 <h1>Fully responsive HomePage</h1>
 
 <h2>Netlify Link</h2>-:https://soft-dogs-2567.netlify.app//<br/>
 
 
 
# Working Feautres-:
- Fully responsive HomePage for all three different screen sizes.
- All Products Page, Where data is fetched, sorted, filtered and searched using Cloud based database using MongoAtlas.
- Single Product Page for each product using dynamic id.
- User and Admin Sign up and Login in page with form validation.
- Cart Page followed by Checkout Page for payment with form valdation through out all pages.
- Admin Dashboard to View, Add, Delete and update all products present in database using Backend apis
- All the apis are created by using Node JS, Express and MongoDB.



# Tech Stack-:
- React
- Redux
- Chakra UI
- External Css
- MongoDB
- MongoDB Atlas for Database
- Node JS
- Express



# Team Members-:
- Prashant Rao Gunjal
- Uddeshy Jaiswal
- Shakil Pendhari
- Surya Ahire
- Vishal Tandale



# HOMEPAGE-:
Here is the homepage which is entirely responsive and is made by using Chakra UI the products over here are listed through the api which is made by using node JS, express, mongoDB. 
The data is fetched from the cloud database by mongoAtlas. 
Each product open up to a single product page also using an api.
![homepage](https://user-images.githubusercontent.com/76995063/213940407-29245dc1-3e9f-4d65-b9be-9cbf56947a89.png)


# SignUp Page-:
Here user can signup if he/she is not already registered with us already, so that in future they can just login and proceed with their order of purchasing.
![SignUpPage](https://user-images.githubusercontent.com/107555598/221860665-0286e7a2-d4a8-4776-a12f-f7eda4d638ef.png)


# Login Page-:
Here user can login to proceed before purchasing the product, so that in future they can track their order details and track order too. If user is not registered already he/she will be redirected to signUp page to signup first.
![LoginPage](https://user-images.githubusercontent.com/107555598/221860908-7bb0e48f-ced8-44b6-9741-0f73f6f82f1a.png)


# Address Page-:
Before Checking out user have to fill in the details about his address where he/she wants the product to get delivered. Here we have primarily focused upon the form validation part, if any field is kept empty the user will get to about the mandatory fields.
![address](https://user-images.githubusercontent.com/76995063/213941311-fa910801-cd1b-402e-8bce-c74536e3def3.png)

# Product Page-:
This page shows user all the products which are available in the database and user can sort them according to their price from low to high or vice versa. User can search for a specific item by using the search bar, the search funtionality is achieved using backend api.
User can choose the product for a specific brand by clicking on the brand listed on the sidebar also. User can click on any product and he/she will be redirected on single product page.
![ProductPage](https://user-images.githubusercontent.com/107555598/221860483-96a8f9c1-5ea3-4d75-8a0a-6b62e700aae6.png)


# Single Product Page-:
This is single product page where user can see more details about the product and compare the product according to their needs. All the data of single product is fetched using api from a cloud based database.
![SingleProductPage](https://user-images.githubusercontent.com/107555598/221860623-aa0f26c2-e7c7-4aad-899a-4829fab85213.png)

# Cart Page-:
This is our cart page where user can increase or decrease the quantity of the product according to their needs and can proceed further to checkout page before payment.
![cart](https://user-images.githubusercontent.com/76995063/213941227-a2503fa7-4d78-488b-a8e6-4af42c098e7c.png)

# Checkout Page-:
Once the user have filled all the details of his/her address they will be redirected to the checkout page so they can verify once more before placing the order so they don't make any mistakes. 
![checkout](https://user-images.githubusercontent.com/76995063/213941457-61b8b143-a67e-4c17-8f88-600054c03222.png)


# Payment Page-:
After checkout Page User will be redirected to the payment page where they have to put 16 digits of pin, 3 digits of cvv and expiry date too otherwise order won't be placed.
![payment](https://user-images.githubusercontent.com/76995063/213941636-34c98f21-ede1-4b5b-bf31-41906f4bc7c9.png)

Order Confirmation-:

Once all the details are filled user will get the confirmation of placed order.

![checkout3](https://user-images.githubusercontent.com/76995063/213941672-fcf28516-1ab0-4b33-b29e-cf593e67b550.png)


## Admin Section


# Admin Page-:
Just like user admin will also register and login first to go to the dashboard, but they have to give GST number also, so others can't access the admin dashboard.
Here in admin dashboard we can view all the data present in the database, we can add more data to the database, we can update the price to any specifc product and we can also delete any specific product if we want.
![AdminPage](https://user-images.githubusercontent.com/107555598/221863363-3632af70-5358-46a0-ab95-121d425ad574.png)

# Admin SignUp Page-:
![AdminSignup](https://user-images.githubusercontent.com/107555598/221863311-17e31b89-9bff-4915-905b-8d8f811d0bf1.png)


# Admin Login Page-:
![AdminLoginPage](https://user-images.githubusercontent.com/107555598/221863351-ce73f3e1-50ed-49e2-bf49-3d22b2c00e55.png)







# API End Points & Request
    Users
        Get = users/                    Request = GET
        Register = users/register       Request = POST
        Login = users/login             Request = POST
        Delete = users/delete/:id       Request = DELETE

    Users Schema

        name:String,
        pass:String,
        email:String,
        avatar:String,
        age:Number,
        number:Number,
        gender: "male" | "female" | "other"

    Admin
        Get = admin/                    Request = GET
        Register = admin/register       Request = POST
        Login = admin/login             Request = POST
        Delete = admin/delete/:id       Request = DELETE

    Admin Schema

        name:String,
        pass:String,
        email:String,
        avatar:String,
        age:Number,
        number:Number,
        gender: "male" | "female" | "other"
    

    products
        Get = products/                                 Request = GET
        Sorting =  products/filter?des=dse              Request = GET
        Pagination = products/filter?skip=1&limit=1     Request = GET
        fillter = products/filter?brand=Rico Italy      Request = GET
        Create = products/create                        Request = POST
        Update = products/update/:id                    Request = PATCH
        Delete = products/delete/:id                    Request = DELETE

    Products Schema

        title: String,
        price: Number,
        quantity: Number,
        brand: String,
        category: String,
        sub_category: String,
        images: Array


    block
        Get = block/                                 Request = GET
        Create = block/create                        Request = POST
        Delete = block/delete/:id                    Request = DELETE

    block Schema

        email:String,
        
# Deploy Link 

    Backend Deploy Link = https://exuberant-slippers-slug.cyclic.app/  
