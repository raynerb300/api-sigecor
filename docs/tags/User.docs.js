/**
 * @swagger
 * /api/sigecor/users:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get users.
 *     summary: Get users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK.
 *       401:
 *         description: Unathorized.
 *       403:
 *         description: Forbidden.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/users/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get usert.
 *     summary: Get user.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of user.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unathorized.
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/users:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a user.
 *     summary: Create user.
 *     tags:
 *       - Users
 *     parameters:
 *      - in: body
 *        name: createUser
 *        description: Data of user.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-user'
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unathorized.
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/users/{id}:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a user.
 *     summary: Update user.
 *     tags:
 *       - Users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of user to be Update
 *        required: true
 *        type: string
 *        example: "uuid"
 *      - in: body
 *        name: updateUser
 *        description: Data of user.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-user'
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unathorized.
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/users/{id}/reset-password:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow reset the password of a user.
 *     summary: Reset password.
 *     tags:
 *       - Users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of user to be Update
 *        required: true
 *        type: string
 *        example: "uuid"
 *     responses:
 *       200:
 *         description: OK.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: Unathorized.
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/users/{id}/change-password:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow change password.
 *     summary: Change password.
 *     tags:
 *       - Users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of user to be Update
 *        required: true
 *        type: string
 *        example: "uuid"
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
