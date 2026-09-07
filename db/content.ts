import { initialResume, type Resume } from '@/app/resume';
import { getStore } from '@netlify/blobs';
export async function readResume(){try{const store=getStore({name:'resume-data',consistency:'strong'});const value=await store.get('resume',{type:'json'}) as {resume:Resume;revision:number}|null;return value??{resume:initialResume,revision:0};}catch{return {resume:initialResume,revision:0};}}
