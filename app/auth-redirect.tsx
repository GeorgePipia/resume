'use client';
import {useEffect} from 'react';
export default function AuthRedirect(){useEffect(()=>{if(location.pathname!=='/admin'&&/(?:recovery_token|confirmation_token|invite_token|access_token|email_change_token)=/.test(location.hash))location.replace('/admin'+location.hash);},[]);return null;}
