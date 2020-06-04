import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import PerSociete from './PerSociete';
import { GetPerson, GetSociete } from '../../Admin/GraphQl/Query';
import ClientInfo from './ClientInfo';
import AddClient from './AddClient';

function Demand() {
  const [getPerson, res] = useLazyQuery(GetPerson);
  const [getSociete, res2] = useLazyQuery(GetSociete);
  const [person, setPerson] = useState('');
  const [getNumber, setNumber] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [resClient, setResClient] = useState(null);
  useEffect(() => {
    setNumber(undefined);
  }, [person]);

  useEffect(() => {
    showAddClient();
  }, [getNumber, res, res2, setResClient]);

  const showAddClient = () => {
    if (person && getNumber) {
      if (person === 'person') {
        if (!res.data) {
          setShowAdd(true);
        }
        if (res.data) {
          if (res.data.personne) {
            setShowAdd(false);
          } else {
            setShowAdd(true);
          }
        }
      } else if (person === 'societe') {
        if (!res2.data) {
          setShowAdd(true);
        }
        if (res2.data) {
          if (res2.data.societe) {
            setShowAdd(false);
          } else {
            setShowAdd(true);
          }
        }
      } else setShowAdd(true);
    } else {
      setShowAdd(false);
    }
  };
  return (
    <div className='container mt-11 minHeight-7'>
      <PerSociete
        getPerson={getPerson}
        getSociete={getSociete}
        setPerson={setPerson}
        setNumber={setNumber}
        getNumber={getNumber}
        person={person}
      />
      {getNumber && (
        <ClientInfo
          ResClient={resClient}
          res={res}
          res2={res2}
          person={person}
          getNumber={getNumber}
        />
      )}
      {showAdd && (
        <AddClient
          ClientType={person}
          getNumber={getNumber}
          setResClient={setResClient}
        />
      )}
    </div>
  );
}
export default Demand;
