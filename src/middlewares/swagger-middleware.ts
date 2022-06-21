import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerMiddleware = () => {
  const swaggerDocument = YAML.load('src/config/swagger.yaml')
  return [
    SwaggerUI.serve,
    SwaggerUI.setup(swaggerDocument, {
      customSiteTitle: 'Company Dashboard API',
    }),
  ]
}

export default swaggerMiddleware
