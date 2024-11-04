import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress:'test@gmai.com',
        firstName:'Ali',
        lastName:'Iftikhar',

    }
})
console.log('done')