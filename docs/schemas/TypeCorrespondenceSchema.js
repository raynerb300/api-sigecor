/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-type-correspondence:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the type correspondence.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the type correspondence.
 *           example: string
 *         approved:
 *           type: boolean
 *           description: If required approved this type correspondence.
 *           example: true
 *         area_id:
 *           type: integer
 *           description: Area id of the type correspondence.
 *           example: 1
 *       required:
 *         - name
 *         - description
 *         - approved
 *         - area_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-type-correspondence:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the type correspondence.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the type correspondence.
 *           example: string
 *         approved:
 *           type: boolean
 *           description: If required approved this type correspondence.
 *           example: true
 *         status:
 *           type: boolean
 *           description: Status of the rol.
 *           example: true
 *       required:
 *         - name
 *         - description
 *         - approved
 *         - status
 */