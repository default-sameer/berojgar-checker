// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '@/lib/supabase';
import { nanoid } from 'nanoid';
import { decode } from 'base64-arraybuffer';


export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const supabaseUrl = process.env.SUPABASE_URL as string;
    if(req.method === 'POST') {
      let {image} = req.body;
      if(!image){
        res.status(400).json({error: 'Image is required'});
        return;
      }
      try {
        const contentType = image.match(/data:(.*);base64/)?.[1];
        const base64FileData = image.split('base64,')?.[1];

        if(!contentType || !base64FileData) {
          res.status(400).json({message: 'Invalid image'});
          return;
        }

        // UploadImage
        const fileName = nanoid();
        const ext = contentType.split('/')[1];
        const path = `${fileName}.${ext}`;

        const {data , error: uploadError} = await supabase.storage.from(process.env.SUPABASE_BUCKET as string).upload(path, decode(base64FileData),{
            contentType,
            upsert: true
        });
        if (uploadError) {
          console.log(uploadError);
          throw new Error('Unable to upload image to storage');
        }

        // Constructing public url
        const url = `${supabaseUrl.replace(
        '.co',
        '.in'
        // @ts-ignore
        )}/storage/v1/object/public/${data.Key}`;

        return res.status(200).json({ url });
      } catch (error) {
        res.status(500).json({message: 'Something went wrong'});
      }
    }
    else{
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
    }
}
