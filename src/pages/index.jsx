import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeWithLogin from '../components/HomeWithLogin';
import HomeWithOutLogin from '../components/HomeWithOutLogin';
import { getCurrentUser } from '../lib/appwrite';

export default function Home() {
  const [showAfterLogin, setShowAfterLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isdonor,setIsdonor]=useState(false);

  useEffect(() => {
    // Define an async function to handle the async operation
    const fetchUserData = async () => {
      if (typeof window !== 'undefined') {
        const islogged = localStorage.getItem('islogged');
        setIsLogged(Boolean(islogged));
      }

      if (isLogged) {
        setShowAfterLogin(true);
        try {
          const currentUser = await getCurrentUser();
          setUser(currentUser);
          setIsdonor(user.is_donor)
          
          
        } catch (error) {
          console.error('Failed to fetch current user:', error);
        }
      }
    };
  
  
    // Call the async function
    fetchUserData();
  }, [isLogged]);
  
  return (
    <div>
      <Navbar islogged={isLogged}  is_donor={isdonor} user={user}/>
      {showAfterLogin ? <HomeWithLogin /> : <HomeWithOutLogin />}
    </div>
  );
}
