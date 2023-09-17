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