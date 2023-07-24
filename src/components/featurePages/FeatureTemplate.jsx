import style from './Feature.module.css';
import style1 from '../button/Button.module.css';
import { SwitchingDots } from '../switchingDots/SwitchingDots';
import { Skip } from '../skip/Skip';
import { useState } from 'react';




export function FeatureTemplate({featureTemplateData:{featurePhoto, featureTitle, featuteText, featureButton}}) {
//     const [elementIndex, setElemntindex] = useState(0);
//    const kazkas = data[elementIndex];
    return (
        <div className={style.feature}>
            <Skip />
            <img className={style.featureImg} src={featurePhoto} alt="featurePhoto" />
            <h2 className={style.featureTitle}>{featureTitle}</h2>
            <p className={style.featureText}>{featuteText}</p>
            <SwitchingDots />
            <button className={style1.button}>{featureButton}</button>
        </div>
    )
}