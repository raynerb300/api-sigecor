/**
 * @swagger
 * /api/sigecor/login:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow begin session.
 *     summary: Login.
 *     tags:
 *       - Session 
 *     parameters:
 *      - in: body
 *        name: login
 *        description: Data of session.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: OK.
 *       401:
 *         description: Invalid username or password.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/logout/{id}:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow logout session.
 *     summary: Logout.
 *     tags:
 *       - Session 
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Id of user to be logout
 *          required: true
 *          type: string
 *          example: "uuid"
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/change-password:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow change password.
 *     summary: Change password.
 *     tags:
 *       - Session 
 *     parameters:
 *      - in: body
 *        name: login
 *        description: Data of session.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/change-password'
 *     responses:
 *       200:
 *         description: OK.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */
