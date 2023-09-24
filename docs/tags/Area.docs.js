/**
 * @swagger
 * /api/sigecor/areas:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get areas.
 *     summary: Get areas.
 *     tags:
 *       - Areas
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
 * /api/sigecor/areas/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get area.
 *     summary: Get area.
 *     tags:
 *       - Areas
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of area.
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
 * /api/sigecor/areas:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a area.
 *     summary: Create area.
 *     tags:
 *       - Areas
 *     parameters:
 *      - in: body
 *        name: New area
 *        description: Data of area.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-area'
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
 * /api/sigecor/areas/{id}:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a area.
 *     summary: Update area.
 *     tags:
 *       - Areas
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of area to be update
 *        required: true
 *        type: integer
 *        example: 1
 *      - in: body
 *        name: Update area
 *        description: Data of area.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-area'
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
 * /api/sigecor/areas/{id}/type-correspondences:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get type correspondences of a area.
 *     summary: Get type correspondences of area.
 *     tags:
 *       - Areas
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of area to be consult
 *        required: true
 *        type: integer
 *        example: 1
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
 * /api/sigecor/areas/{id}/positions:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get positions of a area.
 *     summary: Get positios of area.
 *     tags:
 *       - Areas
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of area to be consult
 *        required: true
 *        type: integer
 *        example: 1
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