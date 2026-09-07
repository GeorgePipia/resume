import { getStore } from '@netlify/blobs';
import type { Config, Context } from '@netlify/functions';
export default async (request:Request,context:Context)=>{
  if(request.method==='GET'){const id=new URL(request.url).searchParams.get('id');if(!id)return new Response('Not found',{status:404});const result=await getStore({name:'resume-photos'}).get(id,{type:'blob'});return result?new Response(result,{headers:{'Content-Type':'image/jpeg'}}):new Response('Not found',{status:404});}
  if(context.clientContext?.user?.email?.toLowerCase()!=='tskali0zamboni@gmail.com')return new Response('Unauthorized',{status:401});
  if(request.method!=='POST')return new Response('Method not allowed',{status:405});
  const bytes=await request.arrayBuffer();if(bytes.byteLength>5*1024*1024)return Response.json({error:'Photo must be under 5 MB.'},{status:413});
  const type=request.headers.get('content-type')||'image/jpeg';if(!type.startsWith('image/'))return Response.json({error:'Please upload an image.'},{status:400});
  const id=crypto.randomUUID();await getStore({name:'resume-photos'}).set(id,bytes,{metadata:{contentType:type}});return Response.json({url:`/.netlify/functions/photo?id=${id}`});
};
export const config:Config={path:'/api/photo'};
