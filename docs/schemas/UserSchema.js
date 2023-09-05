/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-user:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Username of the user.
 *           example: string
 *         names:
 *           type: string
 *           description: Names of the user.
 *           example: string
 *         last_names:
 *           type: string
 *           description: Last names of the user.
 *           example: string
 *         email:
 *           type: string
 *           description: Email of the user.
 *           example: 'string@string.com'
 *         type_document:
 *           type: string
 *           description: Type document of the user.
 *           example: V
 *         nro_document:
 *           type: string
 *           description: Number document of the user.
 *           example: 123456
 *         sex:
 *           type: string
 *           description: Sex of the user.
 *           example: M
 *         rol_id:
 *           type: string
 *           description: Rol id of the user.
 *           example: 1
 *       required:
 *         - username
 *         - names
 *         - last_names
 *         - email
 *         - type_document
 *         - nro_document
 *         - sex
 *         - rol_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-user:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Userame of the user.
 *           example: string
 *         names:
 *           type: string
 *           description: Names of the user.
 *           example: string
 *         last_names:
 *           type: string
 *           description: Last names of the user.
 *           example: string
 *         sex:
 *           type: string
 *           description: Sex of the user.
 *           example: M
 *         status:
 *           type: boolean
 *           description: Status of the user.
 *           example: true
 *         rol_id:
 *           type: string
 *           description: Rol id of the user.
 *           example: 1
 *       required:
 *         - username
 *         - names
 *         - last_names
 *         - sex
 *         - status
 *         - rol_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    change-password:
 *       type: object
 *       properties:
 *         password:
 *           type: string
 *           description: Password of the user.
 *           example: string
 *       required:
 *         - password
 */