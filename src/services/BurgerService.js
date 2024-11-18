import { dbContext } from "../db/DbContext"

class BurgerService {
    async getAllBurgers() {
        const burgerShack = await dbContext.burgers.find()
        return burgerShack
    }

    createBurgers() {
        // async getBurgerById(burgerId) {
        //     const burger = await dbContext.burgers.findById(burgerId)
        // }
    }

}
export const burgerService = new BurgerService

