/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-area:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the area.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the area.
 *           example: string
 *         manager_id:
 *           type: string
 *           description: ID of the manager of area.
 *           example: string
 *         coordinator_id:
 *           type: string
 *           description: ID of the coordinator of area.
 *           example: string
 *       required:
 *         - name
 *         - description
 *         - manager_id
 *         - coordinator_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-area:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the area.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the area.
 *           example: string
 *         status:
 *           type: boolean
 *           description: Status of the area.
 *           example: true
 *         manager_id:
 *           type: string
 *           description: ID of the manager of area.
 *           example: string
 *         coordinator_id:
 *           type: string
 *           description: ID of the coordinator of area.
 *           example: string
 *       required:
 *         - name
 *         - description
 *         - status
 *         - manager_id
 *         - coordinator_id
 */