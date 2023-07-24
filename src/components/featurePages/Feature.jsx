import { FeatureTemplate } from "./FeatureTemplate";

export function Feature({featureData}) {
    return (
        <div>
            <FeatureTemplate featureTemplateData={featureData[0]} />
            <FeatureTemplate featureTemplateData={featureData[1]} />
            <FeatureTemplate featureTemplateData={featureData[2]} />
        </div>

    )
}