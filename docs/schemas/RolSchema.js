/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-rol:
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
 *         permissions:
 *           type: array
 *           items:
 *             type: integer
 *       required:
 *         - name
 *         - description
 *         - permissions
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-rol:
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
 *         permissions:
 *           type: array
 *           items:
 *             type: integer
 *       required:
 *         - name
 *         - description
 *         - status
 *         - permissions
 */