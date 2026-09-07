import {cookies} from 'next/headers';
export async function isOwner(){
 const token=(await cookies()).get('nf_jwt')?.value;if(!token)return false;
 // Verify the session with Identity; never trust decoded JWT claims alone.
 try{const response=await fetch('https://george-pipia-resume.netlify.app/.netlify/identity/user',{headers:{Authorization:`Bearer ${token}`},cache:'no-store'});if(!response.ok)return false;const user=await response.json() as {email?:string;confirmed_at?:string};return user.email?.toLowerCase()==='tskali0zamboni@gmail.com'&&Boolean(user.confirmed_at);}catch{return false;}
}

