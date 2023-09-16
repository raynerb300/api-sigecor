/**  
 *  @swagger
  * components:
 *  schemas:
 *    create-state:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the state.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the state.
 *           example: string
 *         order:
 *           type: integer
 *           description: Order of the state.
 *           example: 3
 *         type_correspondence_id:
 *           type: integer
 *           description: Id of type correspondence of the state.
 *           example: 3
 *       required:
 *         - name
 *         - description
 *         - order
 *         - type_correspondence_id
 */

/**  
 *  @swagger
  * components:
 *  schemas:
 *    update-state:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the state.
 *           example: string
 *         description:
 *           type: string
 *           description: Description of the state.
 *           example: string
 *         order:
 *           type: integer
 *           description: Order of the state.
 *           example: 3
 *         status:
 *           type: boolean
 *           description: Status of the state.
 *           example: true
 *       required:
 *         - name
 *         - description
 *         - status
 *         - order
 */