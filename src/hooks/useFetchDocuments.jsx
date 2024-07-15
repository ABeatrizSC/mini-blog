import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore'

export function useFetchDocuments(docCollection, search = null, uid = null) {
    const [documents, setDocuments] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    
    //load data if docCollection, search, uid and cancelled changes
    useEffect(() => {
        async function loadData() {
            if(cancelled) return;
            
            setLoading(true);
            
            const collectionRef = collection(db, docCollection);
            
            try {
                let q;
                
                if (search) {
                    //gets posts where the "tags" field has an array that contains the search
                    q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"));
/*                  } else if (uid){
                    q = await query(collectionRef, where("uid", "==", uid
                    ), orderBy("createdAt", "desc")); 
                    console.log("q", q) */
                } else {
                    //collection ordered
                    q = await query(collectionRef, orderBy("createdAt", "desc"));
                }
                
                //keeps collection rendering updated
                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id, //the doc id is separate from the data (firebase)
                            ...doc.data(), //body, title, image...
                        })),
                    );
                });
                
                setLoading(false);


            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        loadData();
    }, [docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

  return {
    documents, 
    loading,
    error
  }
}
