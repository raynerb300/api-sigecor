/**
 * @swagger
 * /api/sigecor/positions/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get position.
 *     summary: Get position.
 *     tags:
 *       - Positions
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of position.
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
 * /api/sigecor/positions:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a position.
 *     summary: Create position.
 *     tags:
 *       - Positions
 *     parameters:
 *      - in: body
 *        name: New position
 *        description: Data of position.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-position'
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
 * /api/sigecor/positions/{id}:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a position.
 *     summary: Update position.
 *     tags:
 *       - Positions
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of position to be update
 *        required: true
 *        type: integer
 *        example: 1
 *      - in: body
 *        name: Update position
 *        description: Data of position.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-position'
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