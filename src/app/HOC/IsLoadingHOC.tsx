import React, {useState} from "react";
import './isLoadingHOC.scss';
import LoadingIcons from 'react-loading-icons'

export interface IBaseLoadableComponent {
    setLoading: (isLoading: boolean) => void;
}

export const isLoadingHOC = (WrappedComponent: React.FunctionComponent<IBaseLoadableComponent>) => (props: any) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoadingState = (isComponentLoading: boolean) => {
        setIsLoading(isComponentLoading);
    };

    return (
        <>
            {isLoading && <LoadingIcons.TailSpin className={'hoc-loader-icon'} stroke={'#ff9900'}/>}
            <WrappedComponent {...props} setLoading={setLoadingState}/>
        </>
    );
}

export default isLoadingHOC;
