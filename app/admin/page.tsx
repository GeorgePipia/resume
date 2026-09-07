import { requireChatGPTUser } from '@/app/chatgpt-auth';
import { isOwner } from '@/app/owner';
import { readResume } from '@/db/content';
import Editor from './editor';
export const dynamic='force-dynamic';
export default async function Admin(){await requireChatGPTUser('/admin');if(!await isOwner())return <main className="editor"><h1>Owner access only</h1><p>Sign in with the account that owns this site.</p></main>;const data=await readResume();return <Editor initial={data.resume} revision={data.revision}/>;}
