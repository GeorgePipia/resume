import { getUser } from '@netlify/identity';
export async function isOwner(){try{const user=await getUser();return user?.email?.toLowerCase()==='tskali0zamboni@gmail.com';}catch{return false;}}
