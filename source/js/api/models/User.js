import mongoose from 'api/models/db'
import { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  email: {
    type: String,
    index: { unique: true },
    lowercase: true,
    required: [true, 'An email is required'],
  },
  password: {
    type: String,
    minlength: [6, 'Must have minimum length of ({MINLENGTH}).'],
    required: [true, 'A password is required'],
  },
  username: {
    type: String,
    required: [true, 'A username is required'],
  },
})

UserSchema.methods.comparePassword = function comparePassword(pw, cb) {
  bcrypt.compare(pw, this.password, cb)
}

UserSchema.pre('save', function saveHook(next) {
  const user = this

  if (user.isModified('password') == false) return next()

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) return next(saltError)

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) return next(hashError)

      user.password = hash

      return next()
    })
  })
})

export default mongoose.model('User', UserSchema)
