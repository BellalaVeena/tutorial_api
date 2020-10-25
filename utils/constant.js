const constant={
    PORT:4000,
    BASE_URI:'api/v1',
    TOKEN_SECRET:'tutorial@123',
    MONGODB_URI:'mongodb://localhost/tutorial',
    MODEL_NAME:{USER:'users',TUTORIAL:"tutorials"},
    HTTP_CODES:{SUCCESS: 200, CREATED: 201, UNAUTHORIZED: 401, INVALID_DATA: 406, INTERNAL_ERROR: 500, BAD_REQUEST: 400, NOT_FOUND: 404, INVALID_CREDENTIAL: 405 },
    MESSAGE: {
        USER: {
            USER_ALREADY_REGISTERED: 'It seems like user is already registered with the same email id.',
            MESSAGE_UNAUTHORIZED_USER: 'Unauthorized User',
            MESSAGE_INVALID_CREDENTIALS: 'Invalid Credentials.',
            NOT_REGISTERED: 'User not registered with the given UserName.',
            LOGIN_SECCESS: 'User loggedin successfully.',
            CREATED: 'New user created. Please login to continue..',
            IMPROPER_EMAIL:'Enter vaild email id.',
            INVALID_PASSWORD:'Invalid Password.',
            ENTER_FIELDS:"Please enter all the fields."
        },
        TUTORIALS:{
            TUTORIALS_CREATED:'Created tutorial successfully.',
            ENTER_FIELDS:"Please enter all the fields.",
            IMPROPER_ID:"Entered id is not exist.",
            DELETED_SUCCESS:"Deleted Succesfully.",
            NO_RECORDS:"No tutorials to delete.",
            SUCCESS:"Succesfull",
            NOT_FOUND:"No tutorial to display"

        }
    
}

    

}
module.exports=constant