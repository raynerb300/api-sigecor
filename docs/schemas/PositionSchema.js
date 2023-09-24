/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-position:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the position.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the position.
 *           example: string
 *         area_id:
 *           type: id
 *           description: Name of the area.
 *           example: 1
 *       required:
 *         - name
 *         - area_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-position:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the rol.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the rol.
 *           example: string
 *         status:
 *           type: boolean
 *           description: Status of the rol.
 *           example: true
 *       required:
 *         - name
 *         - description
 *         - status
 */