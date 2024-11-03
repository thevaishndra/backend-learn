class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode//200 - success 404 - not found
        this.data = data //will store actual data
        this.message = message //stores a descriptive message
        this.success = statusCode < 400 //whether successful or not based on status code 
    }
}