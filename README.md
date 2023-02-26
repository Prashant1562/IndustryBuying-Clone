# soft-dogs-2567

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

# Deploy Link 

    Backend Deploy Link = https://exuberant-slippers-slug.cyclic.app/  
