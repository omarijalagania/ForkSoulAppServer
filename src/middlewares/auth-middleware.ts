import jwt from 'jsonwebtoken'

//@ts-ignore
const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(403).send('not authorized')
  } else {
    const [, token] = authorization.trim().split(' ')
    if (!token) {
      res.status(403).send('empty token')
    }
    //@ts-ignore
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    if (verified) {
      next()
    } else {
      res.status(403).send('token not verified')
    }
  }
}

export default authMiddleware
