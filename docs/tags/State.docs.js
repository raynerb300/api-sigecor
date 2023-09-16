/**
 * @swagger
 * /api/sigecor/states/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get state.
 *     summary: Get state.
 *     tags:
 *       - States
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of state.
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
 * /api/sigecor/states/{id}:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a state.
 *     summary: Update state.
 *     tags:
 *       - States
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of state to be update
 *        required: true
 *        type: integer
 *        example: 1
 *      - in: body
 *        name: Update state
 *        description: Data of state.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-state'
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
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/sigecor/states:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a state.
 *     summary: Create state.
 *     tags:
 *       - States
 *     parameters:
 *      - in: body
 *        name: New state
 *        description: Data of state.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-state'
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
 *       409:
 *         description: Already exist.
 *       500:
 *         description: Internal server error.
 */
