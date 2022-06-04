import { db } from "../database";

export const deleteListingRoute ={
    method: 'DELETE',
    path: '/api/listingsf/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM listings WHERE id=?',
            [id],
        );
    return {message: 'SUCCESS!'};
    }
}