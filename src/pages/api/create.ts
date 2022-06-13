// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // if(req.method === 'POST') {
    //     try {
    //         const {name, jobStatus} = req.body
            
    //         const data = await prisma.friends.create({
    //             data:{
    //                 name,
    //                 jobStatus
    //             }
    //             })
    //         res.status(200).json(data)
    //     } catch (error) {
    //         res.status(500).json({message: 'Something went wrong'})
    //     }
    // }
  res.status(200).json({ message: 'Comming Soon' })
}
