import { getStore } from '@netlify/blobs';
import type { Config, Context } from '@netlify/functions';

const owner='tskali0zamboni@gmail.com';
function allowed(context:Context){return context.clientContext?.user?.email?.toLowerCase()===owner;}
export default async (request:Request, context:Context)=>{
  const store=getStore({name:'resume-data',consistency:'strong'});
  if(request.method==='GET') {
    try { return Response.json(await store.get('resume',{type:'json'})??{resume:null,revision:0}); }
    catch { return Response.json({resume:{name:'George Odyssey Pipia',headline:'Accounting major · Rutgers Business School',email:'george.pipia@rutgers.edu',secondaryEmail:'tskali0zamboni@gmail.com',phone:'(908) 565-4192',photo:'',sections:[]},revision:0}); }
  }
  if(request.method!=='PUT'||!allowed(context))return new Response('Unauthorized',{status:401});
  const body=await request.json(); if(!body?.resume)return Response.json({error:'Resume is required.'},{status:400});
  const current=await store.get('resume',{type:'json'}) as {revision:number}|null;
  if((current?.revision??0)!==body.revision)return Response.json({error:'Resume changed elsewhere. Reload.'},{status:409});
  await store.setJSON('resume',{resume:body.resume,revision:body.revision+1});return Response.json({revision:body.revision+1});
};
export const config:Config={path:'/api/resume'};
