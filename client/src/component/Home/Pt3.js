import React from 'react';
import logofcit from '../../foundation/logo/logofcit3.png';
import Pt3Item from './Pt3Item';

function Pt3() {
  return (
    <div className='container '>
      <div className='row mt-5 mb-5'>
        <Pt3Item
          img={logofcit}
          title={'Booster'}
          text={`Valoriser vos compétences, Accélérer votre retour à l'emploi.`}
        />
        <Pt3Item
          img={logofcit}
          title={'Consulting'}
          text={'Accompagnement dans votre transformation digitale.'}
        />
        <Pt3Item
          img={logofcit}
          title={'Séminaires'}
          text={
            'Séminaires sur des thèmes innovants ou sur des tendances émergentes.'
          }
        />
        <Pt3Item
          img={logofcit}
          title={'Qualité garantie'}
          text={
            'Tous nos formateurs et consultants sont des professionnels de leur domaine.'
          }
        />
        <Pt3Item
          img={logofcit}
          title={'Supports'}
          text={
            'Supports développés par FCIT ou officiels des principaux éditeurs et constructeurs (Microsoft, IBM, Cisco, etc.).'
          }
        />
        <Pt3Item
          img={logofcit}
          title={'Booster'}
          text={`Valoriser vos compétences, Accélérer votre retour à l'emploi.`}
        />
      </div>
    </div>
  );
}
export default Pt3;
