import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router.get('', this.getAllBurgers)
    }


    async getAllBurgers(request, response, next) {
        response.send('burger api is working')
    }
}