import Boom from '@hapi/boom';
// import {fakeListing, fakeListings} from './fake-data';
import { db } from '../database';

export const getListingRoute ={
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        // const listing = fakeListings.find(listing => listing.id ===id);
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
            //prevents sql injection by entering DROP TABLE listings 
        );
        const listing = results[0];
        if(!listing) throw Boom.notFound(`Listing does not exist with Id ${id}`)
        return listing;
    } 

}