/**
 * @swagger
 * /api/sigecor/rols:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get rols.
 *     summary: Get rols.
 *     tags:
 *       - Rols
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
 * /api/sigecor/rols/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get rol.
 *     summary: Get rol.
 *     tags:
 *       - Rols
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of rol.
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
 * /api/sigecor/rols:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a rol.
 *     summary: Create rol.
 *     tags:
 *       - Rols
 *     parameters:
 *      - in: body
 *        name: New rol
 *        description: Data of rol.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-rol'
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
 * /api/sigecor/rols/{id}:
 *   put:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a rol.
 *     summary: Update rol.
 *     tags:
 *       - Rols
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of rol to be update
 *        required: true
 *        type: integer
 *        example: 1
 *      - in: body
 *        name: Update rol
 *        description: Data of rol.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-rol'
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