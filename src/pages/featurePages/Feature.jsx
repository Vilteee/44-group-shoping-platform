import { Link, useParams } from 'react-router-dom';
import style from './Feature.module.css';
import style1 from '../../components/button/Button.module.css'
import { SwitchingDots } from '../../components/switchingDots/SwitchingDots';
import { Skip } from '../../components/skip/Skip';
import { featureInfo } from '../../data/featureData';

export function Feature() {
    const { featureId } = useParams();

    const feature = featureInfo.filter(feature => '' + feature.id === featureId)[0];
    
    const getPath = () => {
        if(+featureId >= 3){
            return '/registration';
        }

        return `/feature/${+featureId + 1}`;
    }

    return (
        <div className={style.feature}>
            <Link to={getPath()} className={style.linkSkip}><Skip /></Link>
            <img className={style.featureImg} src={feature.featurePhoto} alt="featurePhoto" />
            <h2 className={style.featureTitle}>{feature.featureTitle}</h2>
            <p className={style.featureText}>{feature.featureText}</p>
            <SwitchingDots index={featureId}/>
            <Link to={getPath()} className={style1.button}>{feature.featureButton}</Link>
        </div>
    )
}

