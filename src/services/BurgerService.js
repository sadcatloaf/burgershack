import { dbContext } from "../db/DbContext"

class BurgerService {
    createBurgers() {
        async getBurgerById(burgerId) {
            const burger = await dbContext.burger.findById(burgerId)
        }
    }
}


