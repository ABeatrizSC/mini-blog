import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export function useFetchDocument(docCollection, id) {
    const [document, setDocument] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    
    //load data if docCollection, search, uid and cancelled changes
    useEffect(() => {
        async function loadDocument() {
            if(cancelled) return;
            
            setLoading(true);

            try {
                //get the document/post by id
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());

                setLoading(false);
            } catch (error) {
                setError(error.message)
                setLoading(false);
            }
            
        };

        loadDocument();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

  return {
    document, 
    loading,
    error
  }
}