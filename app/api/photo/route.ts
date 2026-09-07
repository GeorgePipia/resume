import { getStore } from '@netlify/blobs';
import { isOwner } from '@/app/owner';
export async function POST(request:Request){
if(!await isOwner())return Response.json({error:'Owner sign-in required.'},{status:403});
if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Invalid origin.'},{status:403});
const limit=5*1024*1024;const reader=request.body?.getReader();if(!reader)return Response.json({error:'Choose a photo.'},{status:400});
const chunks:Uint8Array[]=[];let length=0;while(true){const {value,done}=await reader.read();if(done)break;length+=value.length;if(length>limit){await reader.cancel();return Response.json({error:'Choose a photo smaller than 5 MB.'},{status:413});}chunks.push(value);}
const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
let type='';if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255)type='image/jpeg';else if([137,80,78,71,13,10,26,10].every((v,i)=>bytes[i]===v))type='image/png';else if(new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP')type='image/webp';
if(!type)return Response.json({error:'Choose a JPG, PNG, or WebP photo.'},{status:400});
const id=crypto.randomUUID();await getStore({name:'resume-photos'}).set(id,bytes.buffer,{metadata:{contentType:type}});return Response.json({url:`/api/photo/${id}`});}
