import type { Resume } from './resume';
export function PortraitImage({resume,alt}:{resume:Resume;alt:string}){const x=resume.photoX??50,y=resume.photoY??50,zoom=resume.photoZoom??1;return <img src={resume.photo} alt={alt} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:`${x}% ${y}%`,transform:`scale(${zoom})`,transformOrigin:`${x}% ${y}%`}}/>;}
