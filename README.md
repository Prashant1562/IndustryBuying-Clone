# soft-dogs-2567

# API End Points 
    Users
        Get = users/                    Request = GET
        Register = users/register       Request = POST
        Login = users/login             Request = POST
        Delete = users/delete/:id       Request = DELETE

    Admin
        Get = admin/                    Request = GET
        Register = admin/register       Request = POST
        Login = admin/login             Request = POST
        Delete = admin/delete/:id       Request = DELETE

    products
        Get = products/                                 Request = GET
        Sorting =  products/filter?des=dse              Request = GET
        Pagination = products/filter?skip=1&limit=1     Request = GET
        fillter = products/filter?brand=Rico Italy      Request = GET
        Create = products/create                        Request = POST
        Update = products/update/:id                    Request = PATCH
        Delete = products/delete/:id                    Request = DELETE



# Deploy Link 

    Backend Deploy Link = https://exuberant-slippers-slug.cyclic.app/  
