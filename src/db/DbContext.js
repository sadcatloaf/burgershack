import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BurgerSchema } from '../models/Burger';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  burgers = mongoose.model('Shack', BurgerSchema)
}

export const dbContext = new DbContext()
