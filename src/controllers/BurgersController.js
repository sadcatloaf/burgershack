import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router.get('', this.getTest).post('', this.getTest)
    }


    async getTest(request, response, next) {

    }
}