import { burgerService } from "../services/BurgerService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getAllBurgers)
    }


    async getAllBurgers(request, response, next) {
        try {
            const burgerShack = await burgerService.getAllBurgers()
            response.send('burgerShack')
        } catch (error) {
            next(error)
        }
    }
}

// async getAllCats(request, response, next) {
//     try {
//       // NOTE the cats variable is assigned to the returned value from the service
//       const cats = await catsService.getAllCats()
//       // NOTE sends a 200 response to the client
//       response.send(cats)
//     } catch (error) {
//       // NOTE passes this to our error handler
//       next(error)
//     }
//   }