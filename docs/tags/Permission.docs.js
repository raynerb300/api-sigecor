/**
 * @swagger
 * /api/sigecor/permissions:
 *   get:
 *     security:
 *     - bearerAuth: []
 *     description: This endpoint get permissions.
 *     summary: Get permissions.
 *     tags:
 *       - Permissions
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