/**
 * @swagger
 * /api/sigecor/type-correspondences/{id}:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get type correspondences.
 *     summary: Get type correspondences.
 *     tags:
 *       - Type Correspondences
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of correspondence.
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
 * /api/sigecor/type-correspondences:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow create a type-correspondences.
 *     summary: Create type correspondence.
 *     tags:
 *       - Type Correspondences
 *     parameters:
 *      - in: body
 *        name: New type correspondences
 *        description: Data of type correspondences.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/create-type-correspondence'
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
 * /api/sigecor/type-correspondences/{id}:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow update a type correspondences.
 *     summary: Update type correspondence.
 *     tags:
 *       - Type Correspondences
 *     parameters:
 *      - name: id
 *        in: path
 *        description: Id of type correspondence to be update
 *        required: true
 *        type: integer
 *        example: 1
 *      - in: body
 *        name: Update type correspondence
 *        description: Data of type correspondence.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/update-type-correspondence'
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