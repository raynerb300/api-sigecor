/**
 * @swagger
 * /api/sigecor/members:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint allow add member to areas.
 *     summary: Add member to area.
 *     tags:
 *       - Members
 *     parameters:
 *      - in: body
 *        name: Assign member
 *        description: Data of member.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/member'
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
 * /api/sigecor/members:
 *   patch:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint update member of area.
 *     summary: Update member of area.
 *     tags:
 *       - Members
 *     parameters:
 *      - in: body
 *        name: Update member
 *        description: Data of member to be update.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/member'
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
 * /api/sigecor/members:
 *   delete:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint delete member of area.
 *     summary: Delete member of area.
 *     tags:
 *       - Members
 *     parameters:
 *      - in: body
 *        name: Delete member
 *        description: Data of member to be delete.
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/member'
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